'use client';

import { useActionState } from 'react';
import ClubButton from '@/components/brand/ClubButton';
import { CONTACT_SUBJECTS } from '@/lib/categories';
import { sendContactMessage, type ContactState } from './actions';

const FIELD = 'w-full border border-harbour/25 bg-white px-4 py-3 text-[14px] text-charcoal rounded-[2px] focus:border-seagreen focus:outline-none';
const LABEL = 'block text-[11px] font-semibold uppercase tracking-[0.16em] text-harbour mb-2';

export default function ContactForm({ defaultSubject = 'General Question' }: { defaultSubject?: string }) {
  const [state, action, busy] = useActionState<ContactState, FormData>(sendContactMessage, { ok: false });

  if (state.ok) {
    return (
      <div className="border border-seagreen/40 bg-white p-10 text-center" role="status">
        <h2 className="font-heading text-2xl text-harbour">Thank you — your message is on its way.</h2>
        <p className="mt-4 text-[14px] leading-relaxed text-charcoal/75">A club officer will follow up with you soon.</p>
      </div>
    );
  }

  return (
    <form action={action} className="border border-harbour/20 bg-white p-8 sm:p-10 space-y-6">
      <div>
        <label className={LABEL} htmlFor="name">Name</label>
        <input id="name" name="name" required className={FIELD} />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={LABEL} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className={FIELD} />
        </div>
        <div>
          <label className={LABEL} htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" className={FIELD} />
        </div>
      </div>
      <div>
        <label className={LABEL} htmlFor="subject">Subject</label>
        <select id="subject" name="subject" defaultValue={defaultSubject} className={FIELD}>
          {CONTACT_SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label className={LABEL} htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows={6} className={FIELD} />
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {state.error && <p className="text-[13px] text-destructive" role="alert">{state.error}</p>}
      <ClubButton variant="green" type="submit" disabled={busy} className="w-full sm:w-auto disabled:opacity-60">
        {busy ? 'Sending…' : 'Send Message'}
      </ClubButton>
    </form>
  );
}
