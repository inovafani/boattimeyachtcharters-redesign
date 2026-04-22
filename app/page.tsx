import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Cruises from '@/components/Cruises';
import Fleet from '@/components/Fleet';
import Charters from '@/components/Charters';
import Reviews from '@/components/Reviews';
import CtaBand from '@/components/CtaBand';
import Destinations from '@/components/Destinations';
import Faq from '@/components/Faq';
import Inquiry from '@/components/Inquiry';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Cruises />
        <Fleet />
        <Charters />
        <Reviews />
        <CtaBand />
        <Destinations />
        <Faq />
        <Inquiry />
      </main>
      <Footer />
    </>
  );
}
