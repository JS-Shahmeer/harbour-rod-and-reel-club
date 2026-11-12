import type { ReactNode } from 'react';

type Props = { eyebrow?: string; title: ReactNode; tone?: 'dark' | 'light'; align?: 'left' | 'center'; children?: ReactNode };

export default function SectionHeading({ eyebrow, title, tone = 'dark', align = 'left', children }: Props) {
  const isLight = tone === 'light';
  return (
    <div className={align === 'center' ? 'text-center max-w-2xl mx-auto' : ''}>
      {eyebrow && <p className={`eyebrow mb-3 ${isLight ? 'text-sand' : 'text-seagreen'}`}>{eyebrow}</p>}
      <h2 className={`font-heading text-2xl sm:text-3xl leading-tight ${isLight ? 'text-offwhite' : 'text-harbour'}`}>{title}</h2>
      <div className={`mt-4 h-px w-16 ${isLight ? 'bg-sand/60' : 'bg-seagreen/50'} ${align === 'center' ? 'mx-auto' : ''}`} />
      {children && <p className={`mt-5 text-[15px] leading-relaxed ${isLight ? 'text-offwhite/80' : 'text-charcoal/80'}`}>{children}</p>}
    </div>
  );
}
