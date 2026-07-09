import React from 'react';

const TONE_CLASSES = {
  coral: 'text-coral-ink',
  teal: 'text-teal',
  gold: 'text-gold',
  success: 'text-success',
};

/**
 * The platform's recurring visual signature: a rotated, stamp-like
 * badge used anywhere something has been confirmed, matched, or signed —
 * echoing the "deal/contract" metaphor of brand x creator collabs.
 *
 * tone: 'coral' | 'teal' | 'gold' | 'success'
 */
export default function StampBadge({ children, tone = 'coral', className = '' }) {
  return <span className={`stamp ${TONE_CLASSES[tone]} ${className}`}>{children}</span>;
}
