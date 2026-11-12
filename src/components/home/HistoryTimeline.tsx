import SectionHeading from '@/components/brand/SectionHeading';
import { getMilestones } from '@/lib/data';

export default async function HistoryTimeline({ heading = 'Our History' }: { heading?: string }) {
  const milestones = await getMilestones();
  return (
    <section id="history" className="bg-offwhite scroll-mt-32">
      <div className="max-w-4xl mx-auto px-5 py-20">
        <SectionHeading eyebrow="Club Archive" title={heading}>
          Milestones from the club&apos;s record. Entries are maintained by club officers — years and details can be
          added or corrected at any time.
        </SectionHeading>
        <div className="mt-12">
          {milestones.length === 0 && (
            <p className="text-[14px] text-charcoal/60">The club history is being compiled. Milestones will appear here once added.</p>
          )}
          <ol className="relative border-l border-harbour/20 ml-2">
            {milestones.map((m) => (
              <li key={m.id} className="relative pl-8 pb-10">
                <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-seagreen" aria-hidden="true" />
                <p className="font-heading text-xl text-seagreen">{m.year || '—'}</p>
                <h3 className="mt-1.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-harbour">{m.title}</h3>
                {m.description && <p className="mt-2.5 text-[14px] leading-relaxed text-charcoal/75">{m.description}</p>}
                {m.imageUrl && (
                  <div className="framed mt-4 max-w-md"><img src={m.imageUrl} alt={m.title} className="w-full h-48 object-cover" /></div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
