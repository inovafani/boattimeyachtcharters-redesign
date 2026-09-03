'use client';

type PricedOption = {
  label: string;
  unitPriceCents: number;
};

function formatPrice(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

/**
 * Shared by ticket-option and extras prompts - both are "pick option N, priced, one tap to send".
 * Clicking sends "option N" (1-indexed by array position), the same phrasing Kai's own reply text
 * already teaches ("You can say 'option 2'..."), so this is guaranteed to parse the same way a
 * typed reply would. Splitting guests across multiple ticket types, or adding more than one extra,
 * still needs the text box - this only covers the single-choice case, which is the common one and
 * the one a mistyped reply used to send back through the same prompt.
 */
export default function KaiPricedOptions({
  options,
  disabled,
  onSelect,
  /** Extras only - ticket selection has no "skip" equivalent, since every booking needs at least
   * one ticket. The button always sends the literal phrase "no extras". */
  offerNone,
}: {
  options: PricedOption[];
  disabled: boolean;
  onSelect: (text: string) => void;
  offerNone?: boolean;
}) {
  return (
    <div className="kai-options">
      {options.map((option, index) => (
        <button
          key={`${option.label}-${index}`}
          type="button"
          className="kai-option-btn"
          disabled={disabled}
          onClick={() => onSelect(`option ${index + 1}`)}
        >
          <span>{option.label}</span>
          <span className="kai-option-btn__price">{formatPrice(option.unitPriceCents)}</span>
        </button>
      ))}
      {offerNone && (
        <button
          type="button"
          className="kai-option-btn kai-option-btn--secondary"
          disabled={disabled}
          onClick={() => onSelect('no extras')}
        >
          <span>No extras</span>
        </button>
      )}
    </div>
  );
}
