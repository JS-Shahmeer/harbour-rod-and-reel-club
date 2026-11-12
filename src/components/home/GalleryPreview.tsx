import SectionHeading from '@/components/brand/SectionHeading';
import TextLink from '@/components/brand/TextLink';
import AlbumCard from '@/components/content/AlbumCard';
import { getAlbums } from '@/lib/data';

export default async function GalleryPreview() {
  const albums = await getAlbums(3);
  return (
    <section className="bg-sand-light border-y border-harbour/10">
      <div className="max-w-6xl mx-auto px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Photographs" title="From the Club Albums" />
          <TextLink to="/gallery">View the Gallery →</TextLink>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.length === 0 && <p className="text-[14px] text-charcoal/60">Albums will appear here once photographs are uploaded.</p>}
          {albums.map((a) => <AlbumCard key={a.id} album={a} />)}
        </div>
      </div>
    </section>
  );
}
