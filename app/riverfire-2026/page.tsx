import type { Metadata } from 'next';
import RiverPage from '@/components/CruisePageRiverfire';

export const metadata: Metadata = {
  title: 'Riverfire 2026 — Brisbane Fireworks Yacht Cruise · Boattime Yacht Charters',
  description:
    "Brisbane's iconic Riverfire fireworks from the best seat on the river. Mermaid Spirit · 5 September 2026 · 18+ · $249 pp.",
};

export default function Page() {
  return <RiverPage />;
}
