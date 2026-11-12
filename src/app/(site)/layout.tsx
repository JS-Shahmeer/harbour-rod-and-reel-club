import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Pages read live club content from the database on each request.
export const dynamic = 'force-dynamic';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-offwhite">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
