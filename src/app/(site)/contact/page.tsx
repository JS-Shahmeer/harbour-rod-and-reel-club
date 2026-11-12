import type { Metadata } from 'next';
import { MapPin, Facebook, Clock } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { FACEBOOK_URL } from '@/lib/navigation';
import { CONTACT_SUBJECTS } from '@/lib/categories';
import ContactForm from './ContactForm';

export const metadata: Metadata = { title: 'Contact' };

export default async function Contact({ searchParams }: { searchParams: Promise<{ subject?: string }> }) {
  const { subject } = await searchParams;
  const defaultSubject = subject && CONTACT_SUBJECTS.includes(subject) ? subject : 'General Question';

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact the Club"
        intro="Questions about membership, tournaments, events, charters, or H.O.P.E.? Send the club a note and an officer will get back to you."
      />
      <section className="bg-offwhite">
        <div className="max-w-5xl mx-auto px-5 py-20 grid lg:grid-cols-[1fr_280px] gap-12">
          <ContactForm defaultSubject={defaultSubject} />
          <aside className="space-y-8">
            <div>
              <p className="eyebrow text-seagreen mb-4">Club Contact</p>
              <ul className="space-y-5 text-[14px] leading-relaxed text-charcoal/80">
                <li className="flex gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-seagreen shrink-0" strokeWidth={1.5} />
                  <span>Huntington Harbour<br />Huntington Beach, California</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-4 h-4 mt-1 text-seagreen shrink-0" strokeWidth={1.5} />
                  <span>Monthly club meetings. See the <a href="/events" className="text-seagreen underline">events calendar</a> for dates.</span>
                </li>
                <li className="flex gap-3">
                  <Facebook className="w-4 h-4 mt-1 text-seagreen shrink-0" strokeWidth={1.5} />
                  <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="text-seagreen underline">Harbour Rod &amp; Reel Club on Facebook</a>
                </li>
              </ul>
            </div>
            <div className="border border-harbour/15 bg-sand-light p-6 text-[13px] leading-relaxed text-charcoal/75">
              Messages go to club officers, who reply by email, usually within a few days.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
