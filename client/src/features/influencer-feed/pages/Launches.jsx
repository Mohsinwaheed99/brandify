import React, { useState } from 'react';
import OpportunityCard from '../components/OpportunityCard.jsx';

const LAUNCH_OPPS = [
  {
    id: 'l1',
    title: 'Summer Glow Serum',
    business: 'Lumière Skincare',
    date: 'Launches Jul 24',
    tone: 'coral',
    followerReq: '5k+',
    platforms: ['Instagram', 'TikTok'],
    compensation: 'Paid · $250',
    slotsLeft: 2,
  },
  {
    id: 'l2',
    title: 'Rewards App v2',
    business: 'Looply',
    date: 'Launches Aug 3',
    tone: 'gold',
    followerReq: '10k+',
    platforms: ['Instagram', 'YouTube'],
    compensation: 'Paid · $400',
    slotsLeft: 5,
  },
  {
    id: 'l3',
    title: 'Refill Subscription',
    business: 'Lumière Skincare',
    date: 'Launches Sep 1',
    tone: 'gold',
    followerReq: '1k+',
    platforms: ['Instagram'],
    compensation: 'Gifted',
    slotsLeft: 8,
  },
];

export default function InfluencerLaunches() {
  const [applied, setApplied] = useState({}); // id -> true

  const handleApply = (id) => setApplied((prev) => ({ ...prev, [id]: true }));

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-6">
        <h1 className="font-display text-2xl uppercase">Launches</h1>
        <p className="mt-1 text-sm text-ink-soft">Apply to upcoming product and campaign launches</p>
      </div>

      <div className="flex flex-col gap-4">
        {LAUNCH_OPPS.map((o) => (
          <OpportunityCard
            key={o.id}
            title={o.title}
            meta={`${o.business} · ${o.date}`}
            badgeTone={o.tone}
            badgeText={`${o.slotsLeft} slots left`}
            tags={[`${o.followerReq} followers`, ...o.platforms]}
            compensationText={o.compensation}
            actionLabel="Apply"
            actionDoneLabel="Applied ✓"
            done={!!applied[o.id]}
            onAction={() => handleApply(o.id)}
          />
        ))}
      </div>

      {LAUNCH_OPPS.length === 0 && (
        <div className="rounded-lg border border-dashed border-line py-16 text-center text-sm text-ink-soft">
          No open launches right now — check back soon.
        </div>
      )}
    </div>
  );
}
