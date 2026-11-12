import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import MembershipCTA from '@/components/home/MembershipCTA';
import { FilteredEvents } from '@/components/content/FilteredLists';
import { getEvents } from '@/lib/data';

export const metadata: Metadata = { title: 'Events' };

export default async function Events() {
  const events = await getEvents();
  return (
    <>
      <PageHeader
        eyebrow="Calendar"
        title="Club Events"
        intro="Meetings, seminars, tournaments, social gatherings, conservation days, and community outreach — the club's year on the water and ashore."
      />
      <section className="bg-offwhite">
        <div className="max-w-4xl mx-auto px-5 py-16">
          <FilteredEvents items={events} />
        </div>
      </section>
      <MembershipCTA />
    </>
  );
}
