import ClubButton from '@/components/brand/ClubButton';
import { IMG } from '@/lib/images';
import { getTournaments } from '@/lib/data';
import { fmt } from '@/lib/format';

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-3">
    <dt className="w-28 text-offwhite/50 uppercase tracking-[0.14em] text-[10px] pt-0.5">{label}</dt>
    <dd>{value}</dd>
  </div>
);

export default async function TournamentSpotlight() {
  const [next] = await getTournaments(1);
  return (
    <section className="bg-harbour text-offwhite">
      <div className="grid lg:grid-cols-2">
        <img src={IMG.tournament} alt="Anglers with a tournament catch aboard a sportfishing boat" className="w-full h-72 lg:h-full object-cover" />
        <div className="px-5 sm:px-12 py-16 lg:py-20 max-w-xl">
          <p className="eyebrow text-sand mb-4">Tournaments</p>
          <h2 className="font-heading text-2xl sm:text-3xl leading-snug">Competition. Sportsmanship. The One That Didn&apos;t Get Away.</h2>
          <div className="mt-5 h-px w-16 bg-seagreen-light" />
          <div className="mt-8 border border-offwhite/20 p-6">
            <p className="eyebrow text-seagreen-light mb-3">Next Tournament</p>
            {next ? (
              <>
                <h3 className="font-heading text-xl">{next.title}</h3>
                <dl className="mt-4 space-y-2 text-[13px] text-offwhite/80">
                  <Row label="Date" value={fmt(next.date, 'MMMM d, yyyy') ?? '—'} />
                  <Row label="Location" value={next.location || '—'} />
                  <Row label="Category" value={next.category} />
                  <Row label="Registration" value={next.registrationStatus} />
                  <Row label="Results" value={next.resultsSummary || 'Posted after the weigh-in'} />
                </dl>
              </>
            ) : (
              <p className="text-[14px] text-offwhite/70">The next tournament will be announced shortly.</p>
            )}
          </div>
          <div className="mt-8"><ClubButton to="/tournaments" variant="green">View Tournaments</ClubButton></div>
        </div>
      </div>
    </section>
  );
}
