import { Fish, Users, Trophy, Compass, Waves, Anchor } from 'lucide-react';
import SectionHeading from '@/components/brand/SectionHeading';

const BENEFITS = [
  { icon: Fish, title: 'Fishing', text: 'Connect with anglers and share knowledge.' },
  { icon: Users, title: 'Friendship', text: 'Build relationships with fellow members.' },
  { icon: Trophy, title: 'Competition', text: 'Take part in tournaments and friendly competition.' },
  { icon: Compass, title: 'Education', text: 'Learn techniques, species knowledge, and fishing practices.' },
  { icon: Waves, title: 'Conservation', text: 'Help protect the future of fishing.' },
  { icon: Anchor, title: 'Community', text: 'Participate in outreach and club activities.' },
];

export default function WhyJoin() {
  return (
    <section className="bg-sand-light border-y border-harbour/10">
      <div className="max-w-6xl mx-auto px-5 py-20">
        <SectionHeading eyebrow="Why Join" title="Six Reasons Members Stay" align="center" />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 border-t border-harbour/15 pt-6">
              <span className="mt-0.5 flex items-center justify-center w-11 h-11 rounded-full border border-seagreen/50 shrink-0">
                <Icon className="w-5 h-5 text-seagreen" strokeWidth={1.4} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-harbour">{title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-charcoal/75">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
