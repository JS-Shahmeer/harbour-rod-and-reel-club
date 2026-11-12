import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Sailboat } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import DockNav from '@/components/members/DockNav';
import { requireActiveMember } from '@/lib/auth/access';
import { prisma } from '@/lib/db';
import { FIELD } from '@/lib/ui';

export const metadata: Metadata = { title: 'Member Directory' };

export default async function Directory({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const user = await requireActiveMember('/members/directory');
  const q = (await searchParams).q?.trim() ?? '';
  const now = new Date();

  const members = await prisma.user.findMany({
    where: {
      showInDirectory: true,
      membership: { status: 'ACTIVE', OR: [{ expiresAt: null }, { expiresAt: { gt: now } }] },
      ...(q ? { OR: [{ name: { contains: q, mode: 'insensitive' } }, { city: { contains: q, mode: 'insensitive' } }, { boatName: { contains: q, mode: 'insensitive' } }] } : {}),
    },
    orderBy: { name: 'asc' },
    select: { id: true, name: true, email: true, phone: true, city: true, boatName: true, bio: true },
  });

  return (
    <>
      <PageHeader eyebrow="Members' Dock" title="Member Directory" intro="Fellow paid-up members who have chosen to be listed. Please keep these details within the club." />
      <DockNav isAdmin={user.role === 'ADMIN'} active="/members/directory" />
      <section className="bg-offwhite">
        <div className="max-w-6xl mx-auto px-5 py-14">
          <form className="flex gap-3 max-w-md">
            <input name="q" defaultValue={q} placeholder="Search by name, city or boat" className={FIELD} aria-label="Search members" />
            <button className="px-5 bg-harbour text-offwhite text-[11px] font-semibold uppercase tracking-[0.16em] rounded-[2px]">Search</button>
          </form>
          <p className="mt-6 text-[13px] text-charcoal/60">{members.length} {members.length === 1 ? 'member' : 'members'}</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((m) => (
              <article key={m.id} className="border border-harbour/15 bg-white p-6">
                <h3 className="font-heading text-lg text-harbour">{m.name}</h3>
                <ul className="mt-4 space-y-2 text-[13px] text-charcoal/75">
                  {m.city && <li className="flex gap-2"><MapPin className="w-3.5 h-3.5 mt-0.5 text-seagreen" strokeWidth={1.5} />{m.city}</li>}
                  {m.boatName && <li className="flex gap-2"><Sailboat className="w-3.5 h-3.5 mt-0.5 text-seagreen" strokeWidth={1.5} />{m.boatName}</li>}
                  {m.phone && <li className="flex gap-2"><Phone className="w-3.5 h-3.5 mt-0.5 text-seagreen" strokeWidth={1.5} /><a href={`tel:${m.phone}`} className="hover:text-seagreen">{m.phone}</a></li>}
                  <li className="flex gap-2"><Mail className="w-3.5 h-3.5 mt-0.5 text-seagreen" strokeWidth={1.5} /><a href={`mailto:${m.email}`} className="hover:text-seagreen break-all">{m.email}</a></li>
                </ul>
                {m.bio && <p className="mt-4 text-[13px] leading-relaxed text-charcoal/70 border-t border-harbour/10 pt-4">{m.bio}</p>}
              </article>
            ))}
            {members.length === 0 && <p className="text-[14px] text-charcoal/60">No members match that search.</p>}
          </div>
        </div>
      </section>
    </>
  );
}
