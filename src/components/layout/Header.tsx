'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/brand/Logo';
import { NAV_LINKS } from '@/lib/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (to: string) => (to === '/' ? pathname === '/' : pathname.startsWith(to));

  return (
    <header className="sticky top-0 z-50 bg-harbour text-offwhite">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between h-[76px]">
          <Link href="/" className="flex items-center gap-3" aria-label="Harbour Rod & Reel Club home">
            <Logo height={52} />
            <span className="hidden sm:block text-[9px] uppercase tracking-[0.28em] text-sand/80 leading-relaxed">
              Huntington Harbour<br />California
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <Link href="/members" className="text-[11px] font-semibold uppercase tracking-[0.16em] text-offwhite/80 hover:text-sand">Member Login</Link>
            <Link href="/membership" className="bg-seagreen hover:bg-[#356b65] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] rounded-[2px]">Join the Club</Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2" aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <nav className="hidden lg:block border-t border-seagreen/40" aria-label="Main">
        <div className="max-w-6xl mx-auto px-5 flex items-center gap-7 h-11">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={`text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${isActive(l.to) ? 'text-sand border-b-2 border-seagreen-light pb-1' : 'text-offwhite/80 hover:text-sand'}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
      <div className="h-px bg-sand/40" />

      {open && (
        <nav className="lg:hidden bg-harbour-dark border-t border-seagreen/30 px-5 py-4 max-h-[calc(100vh-77px)] overflow-y-auto" aria-label="Mobile">
          {NAV_LINKS.map((l) => (
            <Link key={l.to} href={l.to} onClick={() => setOpen(false)} className="block py-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-offwhite/90 border-b border-white/10">
              {l.label}
            </Link>
          ))}
          <div className="mt-5 flex flex-col gap-3">
            <Link href="/members" onClick={() => setOpen(false)} className="text-center border border-offwhite/40 py-3 text-[12px] font-semibold uppercase tracking-[0.16em]">Member Login</Link>
            <Link href="/membership" onClick={() => setOpen(false)} className="text-center bg-seagreen py-3 text-[12px] font-semibold uppercase tracking-[0.16em]">Join the Club</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
