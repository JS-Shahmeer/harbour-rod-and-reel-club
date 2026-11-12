export default function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <section className="bg-harbour text-offwhite">
      <div className="max-w-6xl mx-auto px-5 py-16 sm:py-20">
        {eyebrow && <p className="eyebrow text-sand mb-4">{eyebrow}</p>}
        <h1 className="font-heading text-3xl sm:text-4xl leading-tight max-w-3xl">{title}</h1>
        <div className="mt-5 h-px w-20 bg-seagreen-light" />
        {intro && <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-offwhite/80">{intro}</p>}
      </div>
    </section>
  );
}
