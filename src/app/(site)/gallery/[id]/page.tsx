import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getAlbum } from '@/lib/data';
import { fmt } from '@/lib/format';

export default async function AlbumDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const album = await getAlbum(id);
  if (!album) notFound();

  const date = fmt(album.albumDate, 'MMMM d, yyyy');
  const images = album.imageUrls.length ? album.imageUrls : album.coverImageUrl ? [album.coverImageUrl] : [];

  return (
    <>
      <section className="bg-harbour text-offwhite">
        <div className="max-w-6xl mx-auto px-5 py-14">
          <Link href="/gallery" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-sand hover:text-white">
            <ArrowLeft className="w-3.5 h-3.5" /> All Albums
          </Link>
          <h1 className="mt-6 font-heading text-3xl">{album.title}</h1>
          <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-offwhite/60">
            {album.category}{date ? ` · ${date}` : ''}
          </p>
          {album.description && <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-offwhite/80">{album.description}</p>}
        </div>
      </section>
      <section className="bg-offwhite">
        <div className="max-w-6xl mx-auto px-5 py-16">
          {images.length === 0 ? (
            <p className="text-[14px] text-charcoal/60">No photographs have been added to this album yet.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((url, i) => (
                <div key={i} className="framed">
                  <img src={url} alt={`${album.title} photograph ${i + 1}`} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
