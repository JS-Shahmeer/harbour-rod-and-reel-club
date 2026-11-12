import SectionHeading from '@/components/brand/SectionHeading';
import TextLink from '@/components/brand/TextLink';
import EventRow from '@/components/content/EventRow';
import { getEvents } from '@/lib/data';

export default async function EventsSection() {
  const events = await getEvents(4);
  return (
    <section className="bg-offwhite">
      <div className="max-w-4xl mx-auto px-5 py-20">
        <SectionHeading eyebrow="Calendar" title="Upcoming Club Events" />
        <div className="mt-10 border-t border-harbour/15">
          {events.length === 0 && <p className="py-8 text-[14px] text-charcoal/60">No events are on the calendar just yet. Check back soon.</p>}
          {events.map((e) => <EventRow key={e.id} event={e} />)}
        </div>
        <div className="mt-9"><TextLink to="/events">View Full Calendar →</TextLink></div>
      </div>
    </section>
  );
}
