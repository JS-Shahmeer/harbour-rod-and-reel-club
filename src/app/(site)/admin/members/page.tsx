import type { Metadata } from 'next';
import Link from 'next/link';
import type { MembershipStatus, Prisma } from '@prisma/client';
import PageHeader from '@/components/layout/PageHeader';
import DockNav from '@/components/members/DockNav';
import { effectiveStatus, requireRole } from '@/lib/auth/access';
import { prisma } from '@/lib/db';
import { FIELD } from '@/lib/ui';
import MemberRow from './MemberRow';

export const metadata: Metadata = { title: 'Manage Members' };

const FILTERS = ['ALL', 'PENDING', 'ACTIVE', 'EXPIRED', 'CANCELLED'] as const;

export default async function ManageMembers({ searchParams }: { searchParams: Promise<{ q?: string; status?: string }> }) {
  await requireRole(['ADMIN'], '/admin/members');
  const sp = await searchParams;
  const q = sp.q?.trim() ?? '';
  const status = FILTERS.includes(sp.status as (typeof FILTERS)[number]) ? (sp.status as (typeof FILTERS)[number]) : 'ALL';

  const where: Prisma.UserWhereInput = {
    ...(q ? { OR: [{ name: { contains: q, mode: 'insensitive' } }, { email: { contains: q, mode: 'insensitive' } }] } : {}),
    ...(status !== 'ALL' ? { membership: { status: status as MembershipStatus } } : {}),
  };
  const [users, counts] = await Promise.all([
    prisma.user.findMany({ where, include: { membership: true }, orderBy: { createdAt: 'desc' }, take: 200 }),
    prisma.membership.groupBy({ by: ['status'], _count: true }),
  ]);
  const count = (s: string) => counts.find((c) => c.status === s)?._count ?? 0;
  const day = (d: Date | null | undefined) => (d ? d.toISOString().slice(0, 10) : '');

  return (
    <>
      <PageHeader eyebrow="Administration" title="Manage Members" intro="Approve new members, record dues, set paid-through dates, and give contributor or admin access." />
      <DockNav isAdmin active="/admin/members" />
      <section className="bg-offwhite">
        <div className="max-w-6xl mx-auto px-5 py-12">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <Link
                key={f}
                href={`/admin/members?status=${f}${q ? `&q=${encodeURIComponent(q)}` : ''}`}
                className={`px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] rounded-[2px] border ${status === f ? 'bg-harbour text-offwhite border-harbour' : 'border-harbour/25 text-charcoal/70 hover:border-seagreen hover:text-seagreen'}`}
              >
                {f === 'ALL' ? 'All' : f.charAt(0) + f.slice(1).toLowerCase()} {f !== 'ALL' && `(${count(f)})`}
              </Link>
            ))}
          </div>
          <form className="mt-6 flex gap-3 max-w-md">
            <input type="hidden" name="status" value={status} />
            <input name="q" defaultValue={q} placeholder="Search name or email" className={FIELD} aria-label="Search members" />
            <button className="px-5 bg-harbour text-offwhite text-[11px] font-semibold uppercase tracking-[0.16em] rounded-[2px]">Search</button>
          </form>
          <div className="mt-8 border-t border-harbour/15 bg-white px-5">
            {users.length === 0 && <p className="py-8 text-[14px] text-charcoal/60">No members found.</p>}
            {users.map((u) => (
              <MemberRow
                key={u.id}
                m={{
                  id: u.id, name: u.name, email: u.email, phone: u.phone, role: u.role, createdAt: day(u.createdAt),
                  status: u.membership?.status ?? 'PENDING', effective: effectiveStatus(u.membership),
                  plan: u.membership?.plan ?? '', expiresAt: day(u.membership?.expiresAt),
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
