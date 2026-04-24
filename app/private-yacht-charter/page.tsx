import type { Metadata } from 'next';
import PrivateCharterPage from '@/components/CharterPagePrivate';

export const metadata: Metadata = {
  title: 'Private Yacht Charter Gold Coast · Boattime Yacht Charters',
  description:
    'Private yacht charter on the Gold Coast Broadwater. Intimate gatherings to large events — tailored packages, gourmet catering, and two world-class vessels. Up to 135 guests.',
};

export default function Page() {
  return <PrivateCharterPage />;
}
