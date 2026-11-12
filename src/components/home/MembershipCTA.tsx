import ClubButton from '@/components/brand/ClubButton';
import Emblem from '@/components/brand/Emblem';

export default function MembershipCTA() {
  return (
    <section className="bg-seagreen text-white">
      <div className="max-w-4xl mx-auto px-5 py-20 text-center">
        <div className="flex justify-center mb-7"><Emblem size={64} /></div>
        <h2 className="font-heading text-2xl sm:text-3xl">Become Part of the Club</h2>
        <div className="mt-5 h-px w-16 bg-white/50 mx-auto" />
        <p className="mt-6 text-[15px] leading-relaxed text-white/90">
          Whether you&apos;re an experienced angler or simply passionate about being on the water, Harbour Rod &amp; Reel
          Club provides a place to connect, learn, compete, and share the experience with fellow anglers.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <ClubButton to="/membership" variant="primary">Join the Club</ClubButton>
          <ClubButton to="/membership" variant="outlineLight">Membership Information</ClubButton>
        </div>
      </div>
    </section>
  );
}
