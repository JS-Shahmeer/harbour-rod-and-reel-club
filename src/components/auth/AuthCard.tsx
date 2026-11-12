import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

// Club-styled version of the Base44 AuthLayout: icon tile, heading, card, footer line.
export default function AuthCard({ icon: Icon, eyebrow, title, subtitle, footer, children }: {
  icon: LucideIcon; eyebrow?: string; title: string; subtitle?: string; footer?: ReactNode; children: ReactNode;
}) {
  return (
    <section className="bg-offwhite paper-texture">
      <div className="max-w-md mx-auto px-5 py-16 sm:py-20">
        <div className="text-center mb-8">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-harbour mb-5">
            <Icon className="w-6 h-6 text-offwhite" strokeWidth={1.5} aria-hidden="true" />
          </span>
          {eyebrow && <p className="eyebrow text-seagreen mb-3">{eyebrow}</p>}
          <h1 className="font-heading text-2xl sm:text-3xl text-harbour">{title}</h1>
          <div className="mt-4 h-px w-16 bg-seagreen/50 mx-auto" />
          {subtitle && <p className="mt-4 text-[14px] leading-relaxed text-charcoal/75">{subtitle}</p>}
        </div>
        <div className="border border-harbour/20 bg-white p-7 sm:p-9">{children}</div>
        {footer && <p className="mt-6 text-center text-[13px] text-charcoal/70">{footer}</p>}
      </div>
    </section>
  );
}
