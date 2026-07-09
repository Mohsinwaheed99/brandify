import React from 'react';
import StampBadge from '../../../components/ui/StampBadge.jsx';

/**
 * Shared opportunity card used by every influencer feed page (Launches,
 * PRs, Collabs, Deals) — the four feeds only differ in the data shown and
 * the wording/behavior of the primary action button.
 */
export default function OpportunityCard({
  title,
  meta,
  badgeTone = 'coral',
  badgeText,
  tags = [],
  compensationText,
  actionLabel,
  actionDoneLabel,
  done = false,
  onAction,
}) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-line bg-paper-raised p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-display text-base uppercase">{title}</div>
          <div className="mt-0.5 text-xs text-ink-soft">{meta}</div>
        </div>
        <StampBadge tone={badgeTone}>{badgeText}</StampBadge>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line bg-paper px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.04em] text-ink-soft"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-1 flex items-center justify-between border-t border-line pt-3">
        <span className="text-sm font-semibold text-ink">{compensationText}</span>
        <button
          type="button"
          className={`rounded-sm px-4 py-2 text-sm font-semibold transition duration-150 ease-out ${
            done ? 'cursor-default bg-teal text-paper' : 'bg-ink text-paper hover:bg-coral-ink'
          }`}
          onClick={onAction}
          disabled={done}
        >
          {done ? actionDoneLabel : actionLabel}
        </button>
      </div>
    </div>
  );
}
