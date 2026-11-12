import Link from 'next/link';
import type { AlbumItem } from '@/lib/data';
import { fmt } from '@/lib/format';

export default function AlbumCard({ album }: { album: AlbumItem }) {
  const date = fmt(album.albumDate, 'MMMM yyyy');
  return (
    <Link href={`/gallery/${album.id}`} className="group block">
      <div className="framed">
        {album.coverImageUrl && (
          <img src={album.coverImageUrl} alt={album.title} className="w-full h-56 object-cover transition-opacity duration-300 group-hover:opacity-90" />
        )}
      </div>
      <h3 className="mt-4 font-heading text-[17px] text-harbour group-hover:text-seagreen transition-colors">{album.title}</h3>
      <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/55">
        {album.category}{date ? ` · ${date}` : ''}
      </p>
    </Link>
  );
}
