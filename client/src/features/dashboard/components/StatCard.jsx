import React from 'react';

const DELTA_TONE_CLASSES = {
  success: 'text-success',
  danger: 'text-danger',
  ink: 'text-ink-soft',
};

export default function StatCard({ label, value, delta, tone = 'ink' }) {
  return (
    <div className="flex flex-col gap-1.5 rounded-md border border-line bg-paper-raised p-5">
      <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-ink-soft">{label}</span>
      <strong className="font-display text-[32px]">{value}</strong>
      {delta && (
        <span className={`text-xs font-semibold ${DELTA_TONE_CLASSES[tone]}`}>{delta}</span>
      )}
    </div>
  );
}
