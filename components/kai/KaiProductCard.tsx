'use client';

import type { KaiProductCard as Card } from '@/lib/kai';

/**
 * One Boattime product suggested by Kai, rendered in our own design system.
 * This is the reason we build a custom widget rather than embedding Kai's default one.
 *
 * The card itself is not a link. Making the whole thing clickable was ambiguous: the price line
 * ("Share your date for pricing") reads as an instruction, so a click was as likely to mean
 * "pick this one" as "open the page". Both intentions now have their own labelled button.
 */
export default function KaiProductCard({
  card,
  disabled,
  onSelect,
}: {
  card: Card;
  disabled: boolean;
  onSelect: (title: string) => void;
}) {
  const priceLine = card.priceLabel
    ? card.priceLabel
    : card.dateChecked
      ? 'Not available on this date'
      : 'Share your date for pricing';

  const unavailable = !card.priceLabel && card.dateChecked === true;

  return (
    <div className="kai-card">
      <p className="kai-card-title">{card.title}</p>
      <p className="kai-card-desc">{card.description}</p>
      <p className={`kai-card-price${unavailable ? ' kai-card-price--muted' : ''}`}>{priceLine}</p>

      <div className="kai-card-actions">
        <button
          type="button"
          className="kai-card-btn kai-card-btn--primary"
          onClick={() => onSelect(card.title)}
          disabled={disabled}
        >
          Choose this
        </button>

        {card.productUrl && (
          <a
            className="kai-card-btn kai-card-btn--ghost"
            href={card.productUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View page
          </a>
        )}
      </div>
    </div>
  );
}
