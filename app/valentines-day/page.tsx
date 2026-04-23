import type { Metadata } from 'next';
import ValentinesPage from '@/components/CruisePageValentines';

export const metadata: Metadata = {
  title: "Valentine's Day Cruise Gold Coast 2026 — Boattime Yacht Charters",
  description:
    "An evening of refined indulgence aboard Sun Goddess. Champagne, gourmet dining, complimentary photography. 14 February 2026 · 2 for $269.",
};

export default function Page() {
  return <ValentinesPage />;
}
