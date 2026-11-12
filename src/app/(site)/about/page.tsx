import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import HistoryTimeline from '@/components/home/HistoryTimeline';
import HeritageStrip from '@/components/home/HeritageStrip';
import MembershipCTA from '@/components/home/MembershipCTA';
import SectionHeading from '@/components/brand/SectionHeading';
import { IMG } from '@/lib/images';

export const metadata: Metadata = { title: 'About' };

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the Club"
        title="A Club Built Around the Love of Fishing"
        intro="Harbour Rod & Reel Club is a community of anglers based in Huntington Harbour, Huntington Beach — fishing the waters of Orange County and Southern California together."
      />
      <HeritageStrip />

      <section className="bg-offwhite">
        <div className="max-w-6xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading eyebrow="Our Story" title="Anglers, First and Always" />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-charcoal/80">
              <p>
                The club exists for one simple reason: fishing is better shared. Members meet regularly, run
                tournaments through the season, host seminars on techniques and local species, and take part in
                conservation and community work around the harbour.
              </p>
              <p>
                Newcomers are welcome. You don&apos;t need a boat, a tournament record, or years of experience — only
                an interest in being on the water and the willingness to learn from the anglers around you.
              </p>
            </div>
          </div>
          <div className="framed">
            <img src={IMG.heritage} alt="Archival photograph of a fishing boat in Huntington Harbour" className="w-full h-[400px] object-cover" />
          </div>
        </div>
      </section>

      <HistoryTimeline />

      <section id="leadership" className="bg-sand-light border-y border-harbour/10">
        <div className="max-w-4xl mx-auto px-5 py-20">
          <SectionHeading eyebrow="Leadership" title="Club Officers">
            The club is run by its members. Officer names, roles, and terms are maintained by the club and can be
            published here once confirmed.
          </SectionHeading>
          <div className="mt-10 border border-harbour/15 bg-white p-8 text-[14px] leading-relaxed text-charcoal/70">
            Leadership information has not been published yet. Once officers are confirmed, each role appears here
            with name, position, and term.
          </div>
        </div>
      </section>

      <MembershipCTA />
    </>
  );
}
