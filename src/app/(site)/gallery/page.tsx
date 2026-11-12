import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { FilteredAlbums } from '@/components/content/FilteredLists';
import { getAlbums } from '@/lib/data';

export const metadata: Metadata = { title: 'Gallery' };

export default async function Gallery() {
  const albums = await getAlbums();
  return (
    <>
      <PageHeader eyebrow="Photographs" title="Club Gallery" intro="Albums from tournaments, club events, conservation days, and the club archive." />
      <section className="bg-offwhite">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <FilteredAlbums items={albums} />
        </div>
      </section>
    </>
  );
}
