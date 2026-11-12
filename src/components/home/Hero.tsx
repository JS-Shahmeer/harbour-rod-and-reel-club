import ClubButton from '@/components/brand/ClubButton';
import { IMG } from '@/lib/images';

export default function Hero() {
  return (
    <section className="relative">
      <img src={IMG.hero} alt="Sportfishing boat leaving Huntington Harbour at golden hour" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-harbour/70" />
      <div className="absolute inset-0 paper-texture opacity-40" />
      <div className="relative max-w-6xl mx-auto px-5 py-24 sm:py-32">
        <div className="max-w-xl border border-offwhite/25 bg-harbour/55 backdrop-blur-[2px] p-8 sm:p-10">
          <p className="eyebrow text-sand mb-5">Huntington Harbour · Southern California</p>
          <h1 className="font-heading text-offwhite text-3xl sm:text-[42px] leading-[1.15]">Were You Born to Fish?</h1>
          <div className="mt-6 h-px w-20 bg-seagreen-light" />
          <p className="mt-6 text-[15px] leading-relaxed text-offwhite/85">
            Join a community of anglers dedicated to fishing, friendship, sportsmanship, conservation,
            and the traditions that make time on the water worth remembering.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <ClubButton to="/membership" variant="green">Become a Member</ClubButton>
            <ClubButton to="/about" variant="outlineLight">Learn About the Club</ClubButton>
          </div>
        </div>
      </div>
    </section>
  );
}
