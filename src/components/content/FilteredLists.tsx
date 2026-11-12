'use client';

import CategoryFilter from '@/components/content/CategoryFilter';
import EventRow from '@/components/content/EventRow';
import AlbumCard from '@/components/content/AlbumCard';
import ArticleCard from '@/components/content/ArticleCard';
import type { AlbumItem, ArticleItem, EventItem } from '@/lib/data';
import { ALBUM_CATEGORIES, ARTICLE_CATEGORIES, EVENT_CATEGORIES } from '@/lib/categories';

const byCategory = (i: { category: string }) => i.category;

export function FilteredEvents({ items }: { items: EventItem[] }) {
  return (
    <CategoryFilter
      categories={EVENT_CATEGORIES}
      items={items}
      getCategory={byCategory}
      emptyText="No events in this category yet."
      barClassName="pb-8"
      render={(shown) => <div className="mt-2">{shown.map((e) => <EventRow key={e.id} event={e} />)}</div>}
    />
  );
}

export function FilteredAlbums({ items }: { items: AlbumItem[] }) {
  return (
    <CategoryFilter
      categories={ALBUM_CATEGORIES}
      items={items}
      getCategory={byCategory}
      emptyText="No albums in this category yet."
      render={(shown) => (
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {shown.map((a) => <AlbumCard key={a.id} album={a} />)}
        </div>
      )}
    />
  );
}

export function FilteredArticles({ items }: { items: ArticleItem[] }) {
  return (
    <CategoryFilter
      categories={ARTICLE_CATEGORIES}
      items={items}
      getCategory={byCategory}
      emptyText="No articles in this category yet."
      render={(shown) => (
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {shown.map((a) => <ArticleCard key={a.id} article={a} />)}
        </div>
      )}
    />
  );
}
