'use server';

import { z } from 'zod';
import { prisma } from '@/lib/db';
import { CONTACT_SUBJECTS } from '@/lib/categories';

const schema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(120),
  email: z.string().trim().email('Please enter a valid email address.').max(200),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  subject: z.enum(CONTACT_SUBJECTS as [string, ...string[]]),
  message: z.string().trim().min(1, 'Please enter a message.').max(5000),
  // Honeypot: real visitors never fill this in.
  website: z.string().max(0).optional().or(z.literal('')),
});

export type ContactState = { ok: boolean; error?: string };

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { ok: false, error: parsed.error.issues[0]?.message ?? 'Please check the form.' };
  const { website, phone, ...data } = parsed.data;
  if (website) return { ok: true };
  await prisma.contactMessage.create({ data: { ...data, phone: phone || null } });
  return { ok: true };
}
