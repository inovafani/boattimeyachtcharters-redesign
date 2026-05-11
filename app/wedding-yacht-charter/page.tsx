import type { Metadata } from 'next';
import CharterPageWedding from '@/components/CharterPageWedding';

export const metadata: Metadata = {
  title: 'Yacht Wedding Gold Coast — Boattime Yacht Charters',
  description:
    "Say 'I Do' on a Boattime luxury yacht. The idyllic Gold Coast venue for wedding ceremonies and receptions — up to 150 guests, world-class catering, and breathtaking Broadwater views.",
};

export default function Page() {
  return <CharterPageWedding />;
}
