import Link from 'next/link';
import Logo from '@/components/brand/Logo';
import WaveDivider from '@/components/brand/WaveDivider';
import { FACEBOOK_URL } from '@/lib/navigation';

const COLUMNS = [
  { title: 'Club', links: [['About', '/about'], ['History', '/about#history'], ['Leadership', '/about#leadership'], ['Membership', '/membership']] },
  { title: 'Fishing', links: [['Fishing Resources', '/fishing'], ['Tournaments', '/tournaments'], ['Charters', '/charters'], ['Leaderboard', '/members'], ['Gallery', '/gallery']] },
  { title: 'Community', links: [['H.O.P.E.', '/hope'], ['Conservation', '/hope#conservation'], ['Community Events', '/events']] },
  { title: 'Members', links: [["Members' Dock", '/members'], ['Forum', '/members'], ['Weight Slips', '/members'], ['Calendar', '/events'], ['Documents', '/members']] },
];

export default function Footer() {
  return (
    <footer className="bg-harbour-dark text-offwhite">
      <div className="h-px bg-seagreen" />
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="flex flex-col sm:flex-row items-start gap-6 pb-10 border-b border-white/10">
          <Logo height={72} />
          <div className="max-w-xl">
            <h3 className="font-heading text-lg">Harbour Rod &amp; Reel Club</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-offwhite/70">
              A community of anglers in Huntington Harbour dedicated to fishing, friendship, sportsmanship,
              conservation, and the traditions that make time on the water worth remembering.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-10">
          {COLUMNS.map((c) => (
            <div key={c.title}>
              <h4 className="eyebrow text-sand mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map(([label, to]) => (
                  <li key={label}><Link href={to} className="text-[13px] text-offwhite/70 hover:text-seagreen-light">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="eyebrow text-sand mb-4">Connect</h4>
            <ul className="space-y-2.5">
              <li><a href={FACEBOOK_URL} target="_blank" rel="noreferrer" className="text-[13px] text-offwhite/70 hover:text-seagreen-light">Facebook</a></li>
              <li><Link href="/contact" className="text-[13px] text-offwhite/70 hover:text-seagreen-light">Contact</Link></li>
            </ul>
          </div>
        </div>

        <WaveDivider color="#3F7F78" className="opacity-60" />
        <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-offwhite/40">
          © {new Date().getFullYear()} Harbour Rod &amp; Reel Club · Huntington Harbour, Huntington Beach, Orange County, California
        </p>
      </div>
    </footer>
  );
}
