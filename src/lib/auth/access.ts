// Access rules for the member area. Role and membership status are always read
// fresh from the database, so a payment or an admin change applies immediately.
import 'server-only';
import { redirect } from 'next/navigation';
import type { Membership, Role, User } from '@prisma/client';
import { auth } from '@/auth';
import { prisma } from '@/lib/db';

export type MemberContext = User & { membership: Membership | null };

export function isMembershipActive(m: Membership | null | undefined, now = new Date()) {
  return !!m && m.status === 'ACTIVE' && (!m.expiresAt || m.expiresAt > now);
}

/** Effective status shown to members: an ACTIVE membership past its expiry date reads as EXPIRED. */
export function effectiveStatus(m: Membership | null | undefined, now = new Date()) {
  if (!m) return 'PENDING' as const;
  if (m.status === 'ACTIVE' && m.expiresAt && m.expiresAt <= now) return 'EXPIRED' as const;
  return m.status;
}

export function hasMemberAccess(user: MemberContext) {
  return user.role === 'ADMIN' || isMembershipActive(user.membership);
}

export async function getCurrentUser(): Promise<MemberContext | null> {
  const session = await auth();
  if (!session?.user?.id) return null;
  return prisma.user.findUnique({ where: { id: session.user.id }, include: { membership: true } });
}

/** Signed-in user, or redirect to login. */
export async function requireUser(returnTo: string) {
  const user = await getCurrentUser();
  if (!user) redirect(`/login?returnTo=${encodeURIComponent(returnTo)}`);
  return user;
}

/** Signed-in user with a paid-up membership (or an admin), otherwise sent to the Dock status page. */
export async function requireActiveMember(returnTo: string) {
  const user = await requireUser(returnTo);
  if (!hasMemberAccess(user)) redirect('/members');
  return user;
}

export async function requireRole(roles: Role[], returnTo: string) {
  const user = await requireUser(returnTo);
  if (!roles.includes(user.role)) redirect('/members');
  return user;
}

/** Only same-site paths are allowed as post-login destinations. */
export function safeReturnTo(value: unknown, fallback = '/members') {
  return typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') ? value : fallback;
}
