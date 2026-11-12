import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import WhyJoin from '@/components/home/WhyJoin';
import MembershipCTA from '@/components/home/MembershipCTA';
import SectionHeading from '@/components/brand/SectionHeading';
import ClubButton from '@/components/brand/ClubButton';

export const metadata: Metadata = { title: 'Membership' };

const STEPS = [
  ['Come Fish With Us', 'Attend a club meeting or event as a guest and meet the members.'],
  ['Submit Your Interest', 'Send the club a note through the contact page and tell us about your fishing.'],
  ['Membership Review', 'A club officer follows up with current dues, categories, and next steps.'],
  ['Welcome Aboard', 'Get access to the Members’ Dock, tournaments, seminars, and club standings.'],
];

export default function Membership() {
  return (
    <>
      <PageHeader
        eyebrow="Membership"
        title="Join the Club"
        intro="Membership is open to anglers of every experience level — boat owners, crew, surf anglers, and families who simply love being on the water."
      />
      <section className="bg-offwhite">
        <div className="max-w-4xl mx-auto px-5 py-20">
          <SectionHeading eyebrow="How to Join" title="Four Steps to Membership" />
          <ol className="mt-10 divide-y divide-harbour/15 border-y border-harbour/15">
            {STEPS.map(([title, text], i) => (
              <li key={title} className="flex gap-6 py-7">
                <span className="font-heading text-2xl text-seagreen w-10 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-harbour">{title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-charcoal/75">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 border border-harbour/15 bg-sand-light p-7">
            <p className="eyebrow text-seagreen mb-3">Dues &amp; Categories</p>
            <p className="text-[14px] leading-relaxed text-charcoal/75">
              Current dues, membership categories, and application forms are provided by club officers. Contact the
              club and an officer will send you the up-to-date information.
            </p>
            <div className="mt-6"><ClubButton to="/contact" variant="green">Contact the Club</ClubButton></div>
          </div>
        </div>
      </section>
      <WhyJoin />
      <MembershipCTA />
    </>
  );
}
