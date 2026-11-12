import SectionHeading from '@/components/brand/SectionHeading';
import TextLink from '@/components/brand/TextLink';
import ArticleCard from '@/components/content/ArticleCard';
import { getArticles } from '@/lib/data';

export default async function NewsSection() {
  const articles = await getArticles(3);
  return (
    <section className="bg-offwhite">
      <div className="max-w-6xl mx-auto px-5 py-20">
        <SectionHeading eyebrow="Fishing Flashes" title="From the Club" />
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {articles.length === 0 && <p className="text-[14px] text-charcoal/60">Club news will be posted here.</p>}
          {articles.map((a) => <ArticleCard key={a.id} article={a} />)}
        </div>
        <div className="mt-10"><TextLink to="/news">View All News →</TextLink></div>
      </div>
    </section>
  );
}
