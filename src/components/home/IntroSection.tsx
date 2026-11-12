import SectionHeading from '@/components/brand/SectionHeading';
import TextLink from '@/components/brand/TextLink';
import { IMG } from '@/lib/images';

export default function IntroSection() {
  return (
    <section className="bg-offwhite">
      <div className="max-w-6xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionHeading eyebrow="The Club" title="A Club Built Around the Love of Fishing" />
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-charcoal/80">
            <p>
              Harbour Rod &amp; Reel Club brings together anglers from Huntington Harbour and across Orange County —
              inshore and offshore, surf and sportboat, seasoned skippers and first-time crew.
            </p>
            <p>
              Members gather for club meetings and seminars, fish tournaments up and down the Southern California
              coast, share what they learn, and work to protect the waters we all rely on. What holds it together
              isn&apos;t the fishing alone; it&apos;s the people you fish with.
            </p>
          </div>
          <div className="mt-8"><TextLink to="/about">Our Story →</TextLink></div>
        </div>
        <div className="framed">
          <img src={IMG.heritage} alt="Classic wooden fishing boat docked in Huntington Harbour" className="w-full h-[380px] object-cover" />
        </div>
      </div>
    </section>
  );
}
