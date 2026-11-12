import ClubButton from '@/components/brand/ClubButton';
import { IMG } from '@/lib/images';

export default function HopeSection() {
  return (
    <section className="bg-seagreen text-white">
      <div className="grid lg:grid-cols-2">
        <div className="px-5 sm:px-12 py-16 lg:py-24 lg:pl-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))]">
          <div className="max-w-lg">
            <p className="eyebrow text-white/70 mb-4">Conservation</p>
            <h2 className="font-heading text-2xl sm:text-3xl leading-snug">Preserving the Water We Love</h2>
            <div className="mt-5 h-px w-16 bg-white/50" />
            <p className="mt-7 font-heading text-lg">H.O.P.E. — Harbour Ocean Preservation Enhancement</p>
            <p className="mt-4 text-[15px] leading-relaxed text-white/90">
              H.O.P.E. represents the club&apos;s commitment to conservation, education, and community outreach —
              caring for the harbour and the coastal waters beyond it so that fishing opportunities remain for
              the anglers who come next.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <ClubButton to="/hope" variant="primary">Learn About H.O.P.E.</ClubButton>
              <ClubButton to="/contact" variant="outlineLight">Get Involved</ClubButton>
            </div>
          </div>
        </div>
        <img src={IMG.hope} alt="Clean Pacific water and kelp along the California coast" className="w-full h-72 lg:h-full object-cover" />
      </div>
    </section>
  );
}
