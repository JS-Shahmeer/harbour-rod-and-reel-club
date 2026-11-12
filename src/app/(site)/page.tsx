import Hero from '@/components/home/Hero';
import HeritageStrip from '@/components/home/HeritageStrip';
import IntroSection from '@/components/home/IntroSection';
import WhyJoin from '@/components/home/WhyJoin';
import MembershipCTA from '@/components/home/MembershipCTA';
import EventsSection from '@/components/home/EventsSection';
import TournamentSpotlight from '@/components/home/TournamentSpotlight';
import OnTheWater from '@/components/home/OnTheWater';
import HopeSection from '@/components/home/HopeSection';
import HistoryTimeline from '@/components/home/HistoryTimeline';
import GalleryPreview from '@/components/home/GalleryPreview';
import NewsSection from '@/components/home/NewsSection';
import FacebookSection from '@/components/home/FacebookSection';
import MembersDock from '@/components/home/MembersDock';

export default function Home() {
  return (
    <>
      <Hero />
      <HeritageStrip />
      <IntroSection />
      <WhyJoin />
      <MembershipCTA />
      <EventsSection />
      <TournamentSpotlight />
      <OnTheWater />
      <HopeSection />
      <HistoryTimeline />
      <GalleryPreview />
      <NewsSection />
      <FacebookSection />
      <MembersDock />
      <MembershipCTA />
    </>
  );
}
