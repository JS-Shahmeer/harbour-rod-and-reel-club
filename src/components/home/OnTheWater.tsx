import SectionHeading from '@/components/brand/SectionHeading';
import TextLink from '@/components/brand/TextLink';
import { IMG } from '@/lib/images';

const TOPICS = [
  ['Fishing Knowledge', 'Local conditions, seasons, and where the bite turns on.'],
  ['Techniques', 'Trolling, bait fishing, iron, and fly — shared by members.'],
  ['Species', 'Yellowtail, calico, halibut, tuna, and the rest of the local card.'],
  ['Catch & Release', 'Handling practices that send fish back strong.'],
  ['Member Tips', 'Hard-won advice from anglers who fish these waters weekly.'],
  ['Fishing Resources', 'Regulations, charts, tackle notes, and reference material.'],
];

export default function OnTheWater() {
  return (
    <section className="bg-sand-light border-y border-harbour/10">
      <div className="max-w-6xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-14 items-start">
        <div className="framed lg:sticky lg:top-32">
          <img src={IMG.heritage} alt="Fishing tackle and harbour scene" className="w-full h-[420px] object-cover" />
        </div>
        <div>
          <SectionHeading eyebrow="Fishing" title="On the Water">
            Fishing is the thread that runs through everything the club does. Members trade knowledge freely —
            what worked, what didn&apos;t, and what&apos;s worth trying next weekend.
          </SectionHeading>
          <dl className="mt-10 divide-y divide-harbour/15 border-t border-harbour/15">
            {TOPICS.map(([title, text]) => (
              <div key={title} className="py-5">
                <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-harbour">{title}</dt>
                <dd className="mt-1.5 text-[14px] leading-relaxed text-charcoal/75">{text}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-9"><TextLink to="/fishing">Explore Fishing Resources →</TextLink></div>
        </div>
      </div>
    </section>
  );
}
