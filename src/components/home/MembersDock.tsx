import Link from 'next/link';
import { LogIn, MessageSquare, Newspaper, Scale, Trophy, Calendar, FileText, UtensilsCrossed, Images, BookOpen } from 'lucide-react';
import WaveDivider from '@/components/brand/WaveDivider';

const TILES = [
  [LogIn, 'Member Login'],
  [MessageSquare, 'Member Forum'],
  [Newspaper, 'Fishing Flashes'],
  [Scale, 'Weight Slips'],
  [Trophy, 'Leaderboard'],
  [Calendar, 'Events Calendar'],
  [FileText, 'Bylaws'],
  [UtensilsCrossed, 'Recipes'],
  [Images, 'Galleries'],
  [BookOpen, 'Member Resources'],
] as const;

export default function MembersDock() {
  return (
    <section className="bg-harbour-deep text-offwhite">
      <WaveDivider color="#3F7F78" className="opacity-50" />
      <div className="max-w-6xl mx-auto px-5 pb-20 pt-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-sand mb-4">Members Only</p>
          <h2 className="font-heading text-2xl sm:text-3xl">Members&apos; Dock</h2>
          <div className="mt-5 h-px w-16 bg-seagreen mx-auto" />
          <p className="mt-6 text-[15px] leading-relaxed text-offwhite/75">
            The club&apos;s private area for members — forum discussions, fishing flashes, weight slips,
            standings, documents, and photographs.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10">
          {TILES.map(([Icon, label]) => (
            <Link key={label} href="/members" className="bg-harbour-deep hover:bg-harbour-dark transition-colors p-6 flex flex-col items-center text-center gap-3 min-h-[130px] justify-center">
              <Icon className="w-5 h-5 text-seagreen-light" strokeWidth={1.4} aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-offwhite/85">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
