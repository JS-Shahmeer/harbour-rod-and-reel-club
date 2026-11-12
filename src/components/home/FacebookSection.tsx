import ClubButton from '@/components/brand/ClubButton';
import { FACEBOOK_URL } from '@/lib/navigation';

export default function FacebookSection() {
  return (
    <section className="bg-sand border-y border-harbour/10">
      <div className="max-w-3xl mx-auto px-5 py-16 text-center">
        <h2 className="font-heading text-2xl text-harbour">Keep Up With the Club</h2>
        <div className="mt-5 h-px w-16 bg-seagreen/50 mx-auto" />
        <p className="mt-6 text-[15px] leading-relaxed text-charcoal/80">
          Follow Harbour Rod &amp; Reel Club on Facebook for club updates, fishing activities, events,
          photographs, and announcements.
        </p>
        <div className="mt-8"><ClubButton href={FACEBOOK_URL} variant="primary">Follow Us on Facebook</ClubButton></div>
      </div>
    </section>
  );
}
