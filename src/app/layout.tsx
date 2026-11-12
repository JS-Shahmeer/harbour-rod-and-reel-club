import type { Metadata } from 'next';
import { Inter, Libre_Baskerville } from 'next/font/google';
import { IMG } from '@/lib/images';
import './globals.css';

const heading = Libre_Baskerville({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'], variable: '--font-heading' });
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Harbour Rod & Reel Club | Fishing Club in Huntington Harbour, CA',
    template: '%s | Harbour Rod & Reel Club',
  },
  description:
    'Harbour Rod & Reel Club is a community of anglers in Huntington Harbour, Huntington Beach — tournaments, seminars, conservation through H.O.P.E., and fishing across Orange County and Southern California.',
  icons: { icon: IMG.logo },
  openGraph: {
    type: 'website',
    title: 'Harbour Rod & Reel Club',
    description: 'Fishing, friendship, sportsmanship, and conservation in Huntington Harbour, Southern California.',
    images: [IMG.hero],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
