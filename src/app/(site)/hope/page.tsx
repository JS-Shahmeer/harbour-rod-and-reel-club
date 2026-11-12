import type { Metadata } from 'next';
import { Waves, GraduationCap, Users, Fish } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import HopeSection from '@/components/home/HopeSection';
import SectionHeading from '@/components/brand/SectionHeading';
import ClubButton from '@/components/brand/ClubButton';

export const metadata: Metadata = { title: 'H.O.P.E.' };

const PILLARS = [
  [Waves, 'Conservation', 'Care for the harbour, local waters, and the habitat that holds our fisheries.'],
  [GraduationCap, 'Education', 'Teaching sound angling practice, species knowledge, and stewardship.'],
  [Users, 'Community Outreach', 'Working alongside neighbours and local organizations around the harbour.'],
  [Fish, 'Future Fishing', 'Protecting the opportunities that the next generation of anglers will inherit.'],
] as const;

export default function Hope() {
  return (
    <>
      <PageHeader
        eyebrow="H.O.P.E."
        title="Harbour Ocean Preservation Enhancement"
        intro="H.O.P.E. is the club's conservation initiative — our commitment to protecting the water we fish and the community that surrounds it."
      />
      <section id="conservation" className="bg-offwhite">
        <div className="max-w-5xl mx-auto px-5 py-20">
          <SectionHeading eyebrow="The Initiative" title="Preserving the Water We Love">
            H.O.P.E. represents the club&apos;s commitment to conservation, education, community outreach, and protecting
            future fishing opportunities. Program details and volunteer days are announced through the club.
          </SectionHeading>
          <div className="mt-14 grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {PILLARS.map(([Icon, title, text]) => (
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
          <div className="mt-14 border border-harbour/15 bg-sand-light p-8">
            <p className="eyebrow text-seagreen mb-3">Get Involved</p>
            <p className="text-[14px] leading-relaxed text-charcoal/75">
              Members and neighbours who want to take part in H.O.P.E. activities can reach the club directly and an
              officer will follow up with upcoming opportunities.
            </p>
            <div className="mt-6"><ClubButton to="/contact" variant="green">Contact the Club</ClubButton></div>
          </div>
        </div>
      </section>
      <HopeSection />
    </>
  );
}
