import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NotFoundContent from '@/components/layout/NotFoundContent';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-offwhite">
      <Header />
      <main className="flex-1"><NotFoundContent /></main>
      <Footer />
    </div>
  );
}
