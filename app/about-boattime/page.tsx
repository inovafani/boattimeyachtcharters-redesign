import type { Metadata } from 'next';
import AboutPage from '@/components/AboutPage';

export const metadata: Metadata = {
  title: 'About Boattime Yacht Charters · Gold Coast',
  description:
    'Meet the team behind Gold Coast\'s most trusted yacht charter company. Two world-class vessels, 12+ years operating, 5.0 stars on Facebook and 4.7 on Google.',
};

export default function Page() {
  return <AboutPage />;
}
