import Nav from '@/components/Nav';
import HashScroll from '@/components/HashScroll';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Fleet from '@/components/Fleet';
import WhaleSection from '@/components/WhaleSection';
import LiveStream from '@/components/LiveStream';
import Cruises from '@/components/Cruises';
import YachtChartersSection from '@/components/YachtChartersSection';
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
import GoogleAdsTag from '@/components/GoogleAdsTag';
import JsonLd from '@/components/JsonLd';
import { FAQS } from '@/lib/faqs';
import { faqSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.boattimeyachtcharters.com' },
};

export default function HomePage() {
  return (
    <>
      <GoogleAdsTag />
      <JsonLd schemas={[faqSchema(FAQS)]} />
      <Nav />
      <HashScroll />
      <main>
        <Hero />
        <StatsBar />
        <Fleet />
        <WhaleSection />
        {/* <LiveStream /> */}
        <Cruises />
        <YachtChartersSection />
        {/* <DayTimeline /> */}
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
