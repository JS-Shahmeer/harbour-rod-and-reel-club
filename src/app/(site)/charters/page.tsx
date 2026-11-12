import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import SectionHeading from '@/components/brand/SectionHeading';
import ClubButton from '@/components/brand/ClubButton';
import MembershipCTA from '@/components/home/MembershipCTA';
import { IMG } from '@/lib/images';

export const metadata: Metadata = { title: 'Charters' };

const POINTS = [
  ['Club Charters', 'Group trips organised by the club for members and guests, from half-day inshore runs to offshore outings.'],
  ['Tournament Boats', 'Charter arrangements for club tournaments, coordinated by the tournament committee.'],
  ['Guest Anglers', 'Prospective members are welcome to join a club charter and meet the members on the water.'],
];

export default function Charters() {
  return (
    <>
      <PageHeader
        eyebrow="Charters"
        title="Fishing Charters"
        intro="Club charter trips out of Huntington Harbour and along the Southern California coast — a good way to fish with members and learn the local waters."
      />
      <section className="bg-offwhite">
        <div className="max-w-6xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <SectionHeading eyebrow="On the Water Together" title="Charter Information">
              Charter dates, boats, and pricing are set by club officers each season. Send an inquiry and an officer will
              share the current schedule and availability.
            </SectionHeading>
            <dl className="mt-10 divide-y divide-harbour/15 border-y border-harbour/15">
              {POINTS.map(([title, text]) => (
                <div key={title} className="py-5">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-harbour">{title}</dt>
                  <dd className="mt-1.5 text-[14px] leading-relaxed text-charcoal/75">{text}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-9"><ClubButton to="/contact?subject=Charters" variant="green">Send a Charter Inquiry</ClubButton></div>
          </div>
          <div className="framed">
            <img src={IMG.tournament} alt="Anglers aboard a sportfishing charter" className="w-full h-[420px] object-cover" />
          </div>
        </div>
      </section>
      <MembershipCTA />
    </>
  );
}
