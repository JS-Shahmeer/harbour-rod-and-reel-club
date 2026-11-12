import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import OnTheWater from '@/components/home/OnTheWater';
import MembershipCTA from '@/components/home/MembershipCTA';
import SectionHeading from '@/components/brand/SectionHeading';
import { getFishingResources } from '@/lib/data';

export const metadata: Metadata = { title: 'Fishing' };

export default async function Fishing() {
  const resources = await getFishingResources();
  return (
    <>
      <PageHeader
        eyebrow="Fishing"
        title="On the Water"
        intro="Techniques, species notes, catch & release practice, and member advice for fishing Huntington Harbour and the Southern California coast."
      />
      <section className="bg-offwhite">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <SectionHeading eyebrow="Resources" title="Fishing Knowledge" />
          <div className="mt-12 grid md:grid-cols-2 gap-10">
            {resources.length === 0 && <p className="text-[14px] text-charcoal/60">Fishing resources will be published here.</p>}
            {resources.map((r) => (
              <article key={r.id} className="border-t border-harbour/15 pt-6">
                {r.imageUrl && <div className="framed mb-5"><img src={r.imageUrl} alt={r.title} className="w-full h-52 object-cover" /></div>}
                <p className="eyebrow text-seagreen">{r.topic}</p>
                <h3 className="mt-2 font-heading text-xl text-harbour">{r.title}</h3>
                {r.summary && <p className="mt-3 text-[14px] leading-relaxed text-charcoal/75">{r.summary}</p>}
                {r.body && <p className="mt-3 text-[14px] leading-relaxed text-charcoal/70">{r.body}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>
      <OnTheWater />
      <MembershipCTA />
    </>
  );
}
