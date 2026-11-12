'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { requireRole } from '@/lib/auth/access';
import { prisma } from '@/lib/db';

const schema = z.object({
  userId: z.string().min(1),
  status: z.enum(['PENDING', 'ACTIVE', 'EXPIRED', 'CANCELLED']),
  role: z.enum(['MEMBER', 'CONTRIBUTOR', 'ADMIN']),
  plan: z.string().trim().max(80).optional(),
  expiresAt: z.string().optional(),
});

export type AdminState = { ok?: boolean; error?: string };

export async function updateMemberAction(_prev: AdminState, form: FormData): Promise<AdminState> {
  const admin = await requireRole(['ADMIN'], '/admin/members');
  const parsed = schema.safeParse(Object.fromEntries(form));
  if (!parsed.success) return { error: 'Please check the values and try again.' };
  const { userId, status, role, plan, expiresAt } = parsed.data;

  if (userId === admin.id && role !== 'ADMIN') return { error: "You can't remove your own admin access." };

  const expiry = expiresAt ? new Date(`${expiresAt}T23:59:59Z`) : null;
  if (expiry && Number.isNaN(expiry.getTime())) return { error: 'That expiry date is not valid.' };

  const existing = await prisma.membership.findUnique({ where: { userId } });
  const startedAt = status === 'ACTIVE' ? existing?.startedAt ?? new Date() : existing?.startedAt ?? null;

  await prisma.user.update({
    where: { id: userId },
    data: {
      role,
      membership: {
        upsert: {
          create: { status, plan: plan || null, expiresAt: expiry, startedAt },
          update: { status, plan: plan || null, expiresAt: expiry, startedAt },
        },
      },
    },
  });
  revalidatePath('/admin/members');
  return { ok: true };
}
