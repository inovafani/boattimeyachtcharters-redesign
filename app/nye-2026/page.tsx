import type { Metadata } from 'next';
import NyePage from '@/components/CruisePageNYE';

export const metadata: Metadata = {
  title: "NYE 2026 — New Year's Eve on the Gold Coast Broadwater · Boattime Yacht Charters",
  description:
    "Welcome 2026 aboard the Mermaid Spirit tri-deck catamaran. Champagne, gourmet canapés, fireworks. 31 December 2025 · 18+ · $169 pp.",
};

export default function Page() {
  return <NyePage />;
}
