import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import MembershipCTA from '@/components/home/MembershipCTA';
import { getArticle } from '@/lib/data';
import { fmt } from '@/lib/format';

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const article = await getArticle((await params).slug);
  return article ? { title: article.title, description: article.excerpt ?? undefined } : {};
}

export default async function ArticlePage({ params }: Params) {
  const article = await getArticle((await params).slug);
  if (!article) notFound();
  const date = fmt(article.publishDate, 'MMMM d, yyyy');

  return (
    <>
      <section className="bg-harbour text-offwhite">
        <div className="max-w-4xl mx-auto px-5 py-14">
          <Link href="/news" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-sand hover:text-white">
            <ArrowLeft className="w-3.5 h-3.5" /> All News
          </Link>
          <p className="mt-6 eyebrow text-sand">{article.category}</p>
          <h1 className="mt-3 font-heading text-3xl sm:text-4xl leading-tight">{article.title}</h1>
          <div className="mt-5 h-px w-20 bg-seagreen-light" />
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-offwhite/60">
            {[article.author, date].filter(Boolean).join(' · ')}
          </p>
        </div>
      </section>
      <section className="bg-offwhite">
        <div className="max-w-3xl mx-auto px-5 py-16">
          {article.imageUrl && (
            <div className="framed mb-10"><img src={article.imageUrl} alt={article.title} className="w-full h-[360px] object-cover" /></div>
          )}
          {article.excerpt && <p className="font-heading text-lg leading-relaxed text-harbour">{article.excerpt}</p>}
          {article.body && (
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-charcoal/80">
              {article.body.split(/\n{2,}/).map((p, i) => <p key={i}>{p}</p>)}
            </div>
          )}
        </div>
      </section>
      <MembershipCTA />
    </>
  );
}
