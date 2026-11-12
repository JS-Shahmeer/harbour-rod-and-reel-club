import Link from 'next/link';
import type { ArticleItem } from '@/lib/data';
import { fmt } from '@/lib/format';

export default function ArticleCard({ article }: { article: ArticleItem }) {
  const date = fmt(article.publishDate, 'MMMM d, yyyy');
  return (
    <article className="bg-white border border-harbour/12 group">
      <Link href={`/news/${article.slug}`} className="block">
        {article.imageUrl && <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />}
        <div className="p-6">
          <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em]">
            <span className="text-seagreen">{article.category}</span>
            {date && <><span className="h-3 w-px bg-harbour/25" /><span className="text-charcoal/50">{date}</span></>}
          </div>
          <h3 className="mt-3 font-heading text-lg leading-snug text-harbour group-hover:text-seagreen transition-colors">{article.title}</h3>
          {article.excerpt && <p className="mt-3 text-[14px] leading-relaxed text-charcoal/75">{article.excerpt}</p>}
        </div>
      </Link>
    </article>
  );
}
