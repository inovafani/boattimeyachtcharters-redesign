import type { Metadata } from 'next';
import CharterPagePrivate from '@/components/CharterPagePrivate';

export const metadata: Metadata = {
  title: 'Private Yacht Charter Gold Coast — Boattime Yacht Charters',
  description:
    'Experience the best private yacht charter in Gold Coast. Intimate gatherings or large events — tailored luxury experiences on the Broadwater. Up to 150 guests.',
};

export default function Page() {
  return <CharterPagePrivate />;
}
