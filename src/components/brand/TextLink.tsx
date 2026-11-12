import Link from 'next/link';
import type { ReactNode } from 'react';

export default function TextLink({ to, children, tone = 'dark', className = '' }: { to: string; children: ReactNode; tone?: 'dark' | 'light'; className?: string }) {
  const color = tone === 'light' ? 'text-sand hover:text-white' : 'text-seagreen hover:text-harbour';
  return (
    <Link href={to} className={`inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] border-b border-current/40 pb-1 transition-colors ${color} ${className}`}>
      {children}
    </Link>
  );
}
