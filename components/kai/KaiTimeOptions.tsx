'use client';

import type { KaiTimeOption } from '@/lib/kai';

/**
 * "Which time works best?" as tappable buttons instead of free text. Sends the option's own label
 * verbatim (e.g. "5:00 PM") - Kai's time parser already matches a reply against each option's own
 * label first, so this is guaranteed to land rather than needing its own new matching rule.
 */
export default function KaiTimeOptions({
  options,
  disabled,
  onSelect,
}: {
  options: KaiTimeOption[];
  disabled: boolean;
  onSelect: (label: string) => void;
}) {
  return (
    <div className="kai-options">
      {options.map((option) => (
        <button
          key={option.label}
          type="button"
          className="kai-option-btn"
          disabled={disabled}
          onClick={() => onSelect(option.label)}
        >
          <span>{option.label}</span>
        </button>
      ))}
    </div>
  );
}
