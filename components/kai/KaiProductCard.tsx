'use client';

import type { KaiProductCard as Card } from '@/lib/kai';

/**
 * One Boattime product suggested by Kai, rendered in our own design system.
 * This is the reason we build a custom widget rather than embedding Kai's default one.
 */
export default function KaiProductCard({ card }: { card: Card }) {
  const priceLine = card.priceLabel
    ? card.priceLabel
    : card.dateChecked
      ? 'Not available on this date'
      : 'Share your date for pricing';

  const unavailable = !card.priceLabel && card.dateChecked === true;

  const inner = (
    <>
      <p className="kai-card-title">{card.title}</p>
      <p className="kai-card-desc">{card.description}</p>
      <p className={`kai-card-price${unavailable ? ' kai-card-price--muted' : ''}`}>{priceLine}</p>
    </>
  );

  if (card.productUrl) {
    return (
      <a
        className="kai-card kai-card--link"
        href={card.productUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  return <div className="kai-card">{inner}</div>;
}
