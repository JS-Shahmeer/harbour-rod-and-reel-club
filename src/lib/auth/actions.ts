'use server';

import crypto from 'node:crypto';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { AuthError } from 'next-auth';
import { z } from 'zod';
import { signIn, signOut } from '@/auth';
import { prisma } from '@/lib/db';
import { sendEmail, siteUrl } from '@/lib/email';
import { getCurrentUser, safeReturnTo } from '@/lib/auth/access';

export type FormState = { ok?: boolean; error?: string; message?: string; values?: Record<string, string> };

// Echo back non-secret fields so a failed submit doesn't wipe what the visitor typed.
const keep = (form: FormData, ...keys: string[]) =>
  Object.fromEntries(keys.map((k) => [k, String(form.get(k) ?? '')]));

const email = z.string().trim().toLowerCase().email('Please enter a valid email address.').max(200);
const password = z.string().min(8, 'Passwords must be at least 8 characters.').max(200);
const sha256 = (v: string) => crypto.createHash('sha256').update(v).digest('hex');

export async function loginAction(_prev: FormState, form: FormData): Promise<FormState> {
  try {
    await signIn('credentials', {
      email: form.get('email'),
      password: form.get('password'),
      redirectTo: safeReturnTo(form.get('returnTo')),
    });
  } catch (e) {
    if (e instanceof AuthError) return { error: 'That email and password did not match an account.', values: keep(form, 'email') };
    throw e;
  }
  return {};
}

const registerSchema = z
  .object({
    name: z.string().trim().min(1, 'Please enter your name.').max(120),
    email,
    phone: z.string().trim().max(40).optional(),
    password,
    confirm: z.string(),
  })
  .refine((d) => d.password === d.confirm, { message: 'Passwords do not match.', path: ['confirm'] });

export async function registerAction(_prev: FormState, form: FormData): Promise<FormState> {
  const values = keep(form, 'name', 'email', 'phone');
  const parsed = registerSchema.safeParse(Object.fromEntries(form));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message, values };
  const { name, phone, password: pw } = parsed.data;
  const address = parsed.data.email;

  if (await prisma.user.findUnique({ where: { email: address } })) {
    return { error: 'An account with that email already exists. Try logging in instead.', values };
  }
  await prisma.user.create({
    data: {
      name,
      email: address,
      phone: phone || null,
      passwordHash: await bcrypt.hash(pw, 12),
      membership: { create: { status: 'PENDING' } },
    },
  });
  await signIn('credentials', { email: address, password: pw, redirectTo: safeReturnTo(form.get('returnTo')) });
  return {};
}

export async function logoutAction() {
  await signOut({ redirectTo: '/' });
}

export async function forgotPasswordAction(_prev: FormState, form: FormData): Promise<FormState> {
  const parsed = email.safeParse(form.get('email'));
  if (parsed.success) {
    const user = await prisma.user.findUnique({ where: { email: parsed.data } });
    if (user) {
      const token = crypto.randomBytes(32).toString('base64url');
      await prisma.passwordResetToken.create({
        data: { userId: user.id, tokenHash: sha256(token), expiresAt: new Date(Date.now() + 60 * 60 * 1000) },
      });
      await sendEmail({
        to: user.email,
        subject: 'Reset your Harbour Rod & Reel Club password',
        text: `Hi ${user.name},\n\nUse this link to choose a new password. It expires in one hour.\n\n${siteUrl()}/reset-password?token=${token}\n\nIf you didn't ask for this, you can ignore this email.`,
      });
    }
  }
  // Same answer either way so the form can't be used to discover accounts.
  return { ok: true };
}

export async function resetPasswordAction(_prev: FormState, form: FormData): Promise<FormState> {
  const token = String(form.get('token') || '');
  const parsed = z
    .object({ password, confirm: z.string() })
    .refine((d) => d.password === d.confirm, { message: 'Passwords do not match.' })
    .safeParse(Object.fromEntries(form));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message };

  const record = await prisma.passwordResetToken.findUnique({ where: { tokenHash: sha256(token) } });
  if (!record || record.usedAt || record.expiresAt < new Date()) {
    return { error: 'This reset link has expired. Please request a new one.' };
  }
  await prisma.$transaction([
    prisma.user.update({ where: { id: record.userId }, data: { passwordHash: await bcrypt.hash(parsed.data.password, 12) } }),
    prisma.passwordResetToken.update({ where: { id: record.id }, data: { usedAt: new Date() } }),
  ]);
  redirect('/login?reset=1');
}

const profileSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(120),
  phone: z.string().trim().max(40).optional(),
  city: z.string().trim().max(80).optional(),
  boatName: z.string().trim().max(80).optional(),
  bio: z.string().trim().max(600).optional(),
});

export async function updateProfileAction(_prev: FormState, form: FormData): Promise<FormState> {
  const user = await getCurrentUser();
  if (!user) redirect('/login?returnTo=/members/account');
  const parsed = profileSchema.safeParse(Object.fromEntries(form));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message };
  const d = parsed.data;
  await prisma.user.update({
    where: { id: user.id },
    data: {
      name: d.name,
      phone: d.phone || null,
      city: d.city || null,
      boatName: d.boatName || null,
      bio: d.bio || null,
      showInDirectory: form.get('showInDirectory') === 'on',
    },
  });
  return { ok: true, message: 'Your details have been saved.' };
}

export async function changePasswordAction(_prev: FormState, form: FormData): Promise<FormState> {
  const user = await getCurrentUser();
  if (!user) redirect('/login?returnTo=/members/account');
  const parsed = z
    .object({ current: z.string(), password, confirm: z.string() })
    .refine((d) => d.password === d.confirm, { message: 'New passwords do not match.' })
    .safeParse(Object.fromEntries(form));
  if (!parsed.success) return { error: parsed.error.issues[0]?.message };
  if (!(await bcrypt.compare(parsed.data.current, user.passwordHash))) return { error: 'Your current password is not correct.' };
  await prisma.user.update({ where: { id: user.id }, data: { passwordHash: await bcrypt.hash(parsed.data.password, 12) } });
  return { ok: true, message: 'Your password has been changed.' };
}
