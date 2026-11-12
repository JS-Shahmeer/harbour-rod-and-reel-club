const ITEMS = ['Fish', 'Compete', 'Learn', 'Conserve', 'Connect'];

export default function HeritageStrip() {
  return (
    <section className="bg-sand border-y border-harbour/10">
      <div className="max-w-6xl mx-auto px-5 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {ITEMS.map((item, i) => (
          <div key={item} className="flex items-center gap-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-harbour">{item}</span>
            {i < ITEMS.length - 1 && <span className="hidden sm:block h-4 w-px bg-harbour/25" />}
          </div>
        ))}
      </div>
    </section>
  );
}
