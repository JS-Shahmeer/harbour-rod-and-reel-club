import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeading from '@/components/brand/SectionHeading';
import MembershipCTA from '@/components/home/MembershipCTA';
import TournamentSpotlight from '@/components/home/TournamentSpotlight';
import { getTournaments } from '@/lib/data';
import { fmt } from '@/lib/format';

export const metadata: Metadata = { title: 'Tournaments' };

export default async function Tournaments() {
  const tournaments = await getTournaments();
  return (
    <>
      <PageHeader
        eyebrow="Tournaments"
        title="Competition. Sportsmanship. The One That Didn't Get Away."
        intro="The club's tournament season runs up and down the Southern California coast — open events, members-only contests, junior divisions, and charity fishing."
      />
      <section className="bg-offwhite">
        <div className="max-w-5xl mx-auto px-5 py-20">
          <SectionHeading eyebrow="Season Schedule" title="Tournament Calendar" />
          <div className="mt-12 space-y-8">
            {tournaments.length === 0 && <p className="text-[14px] text-charcoal/60">The tournament schedule will be posted here.</p>}
            {tournaments.map((t) => (
              <article key={t.id} className="border border-harbour/15 bg-white">
                <div className="flex flex-col sm:flex-row">
                  {t.imageUrl && <img src={t.imageUrl} alt={t.title} className="sm:w-56 h-44 sm:h-auto object-cover" />}
                  <div className="p-7 flex-1">
                    <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em]">
                      <span className="text-seagreen">{t.category}</span>
                      <span className="h-3 w-px bg-harbour/25" />
                      <span className="text-charcoal/55">Registration: {t.registrationStatus}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-xl text-harbour">{t.title}</h3>
                    <p className="mt-2 text-[13px] text-charcoal/70">
                      {fmt(t.date, 'MMMM d, yyyy') ?? '—'}{t.location ? ` · ${t.location}` : ''}
                    </p>
                    {t.description && <p className="mt-4 text-[14px] leading-relaxed text-charcoal/75">{t.description}</p>}
                    <p className="mt-4 text-[13px] text-charcoal/70">
                      <span className="eyebrow text-harbour mr-2">Results</span>
                      {t.resultsSummary || 'Posted after the weigh-in.'}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <TournamentSpotlight />
      <MembershipCTA />
    </>
  );
}
