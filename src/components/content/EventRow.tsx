import { MapPin } from 'lucide-react';
import type { EventItem } from '@/lib/data';
import { fmt } from '@/lib/format';

export default function EventRow({ event }: { event: EventItem }) {
  return (
    <article className="flex flex-col sm:flex-row gap-5 sm:gap-8 py-7 border-b border-harbour/15">
      <div className="w-20 h-20 shrink-0 bg-seagreen text-white flex flex-col items-center justify-center rounded-[2px]">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">{fmt(event.date, 'MMM') ?? '—'}</span>
        <span className="font-heading text-2xl leading-none mt-1">{fmt(event.date, 'd') ?? ''}</span>
      </div>
      <div className="flex-1">
        <p className="eyebrow text-seagreen">{event.category}</p>
        <h3 className="mt-2 font-heading text-xl text-harbour">{event.title}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-[13px] text-charcoal/70">
          {event.time && <span>{event.time}</span>}
          {event.location && <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />{event.location}</span>}
        </div>
        {event.description && <p className="mt-3 text-[14px] leading-relaxed text-charcoal/75 max-w-2xl">{event.description}</p>}
      </div>
    </article>
  );
}
