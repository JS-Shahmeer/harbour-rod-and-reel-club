import ClubButton from '@/components/brand/ClubButton';

export default function NotFoundContent() {
  return (
    <section className="bg-offwhite">
      <div className="max-w-2xl mx-auto px-5 py-28 text-center">
        <p className="eyebrow text-seagreen">404</p>
        <h1 className="mt-4 font-heading text-3xl text-harbour">This one got away.</h1>
        <div className="mt-5 h-px w-16 bg-seagreen/50 mx-auto" />
        <p className="mt-6 text-[15px] leading-relaxed text-charcoal/75">The page you were looking for could not be found.</p>
        <div className="mt-8"><ClubButton to="/" variant="primary">Back to Home</ClubButton></div>
      </div>
    </section>
  );
}
