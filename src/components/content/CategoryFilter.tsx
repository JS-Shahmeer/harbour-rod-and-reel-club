'use client';

import { useMemo, useState, type ReactNode } from 'react';

type Props<T> = {
  categories: string[];
  items: T[];
  getCategory: (item: T) => string;
  render: (items: T[]) => ReactNode;
  emptyText: string;
  barClassName?: string;
};

// Filter chips used on Events, Gallery and News, matching the Base44 design.
export default function CategoryFilter<T>({ categories, items, getCategory, render, emptyText, barClassName = 'pb-10' }: Props<T>) {
  const [filter, setFilter] = useState('All');
  const shown = useMemo(() => items.filter((i) => filter === 'All' || getCategory(i) === filter), [items, filter, getCategory]);

  return (
    <>
      <div className={`flex flex-wrap gap-2 border-b border-harbour/15 ${barClassName}`}>
        {['All', ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] rounded-[2px] border transition-colors ${
              filter === c ? 'bg-harbour text-offwhite border-harbour' : 'border-harbour/25 text-charcoal/70 hover:border-seagreen hover:text-seagreen'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      {shown.length === 0 ? <p className="py-8 text-[14px] text-charcoal/60">{emptyText}</p> : render(shown)}
    </>
  );
}
