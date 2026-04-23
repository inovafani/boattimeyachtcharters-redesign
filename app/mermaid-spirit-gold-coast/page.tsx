import type { Metadata } from 'next';
import MermaidSpiritPage from '@/components/YachtPageMermaidSpirit';

export const metadata: Metadata = {
  title: 'Mermaid Spirit — 100ft Tri-deck Catamaran Gold Coast · Boattime Yacht Charters',
  description:
    'Charter the Mermaid Spirit catamaran — 3 decks, 100 guests, jet skis, scuba, DJ, fireworks. Gold Coast Broadwater and Brisbane River.',
};

export default function Page() {
  return <MermaidSpiritPage />;
}
