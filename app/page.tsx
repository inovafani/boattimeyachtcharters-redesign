import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Fleet from '@/components/Fleet';
import WhaleSection from '@/components/WhaleSection';
import LiveStream from '@/components/LiveStream';
import Cruises from '@/components/Cruises';
import DayTimeline from '@/components/DayTimeline';
import Reviews from '@/components/Reviews';
import CtaBand from '@/components/CtaBand';
import FinalCta from '@/components/FinalCta';
import Destinations from '@/components/Destinations';
import AboutOwners from '@/components/AboutOwners';
import Faq from '@/components/Faq';
import Inquiry from '@/components/Inquiry';
import Footer from '@/components/Footer';
import TickerBar from '@/components/TickerBar';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Fleet />
        <WhaleSection />
        <LiveStream />
        <Cruises />
        <DayTimeline />
        <Reviews />
        <CtaBand />
        <Destinations />
        <Inquiry />
        <AboutOwners />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
      <TickerBar />
    </>
  );
}
