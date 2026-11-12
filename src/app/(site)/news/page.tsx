import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { FilteredArticles } from '@/components/content/FilteredLists';
import { getArticles } from '@/lib/data';

export const metadata: Metadata = { title: 'News' };

export default async function News() {
  const articles = await getArticles();
  return (
    <>
      <PageHeader
        eyebrow="Fishing Flashes"
        title="From the Club"
        intro="Club news, fishing reports, tournament recaps, conservation updates, and event announcements."
      />
      <section className="bg-offwhite">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <FilteredArticles items={articles} />
        </div>
      </section>
    </>
  );
}
