import React, { useState } from 'react';
import OpportunityCard from '../components/OpportunityCard.jsx';

const PR_OPPS = [
  {
    id: 'p1',
    title: 'Summer Tasting Menu Launch',
    business: 'Basil & Vine',
    date: 'Jul 18 · Austin, TX',
    tone: 'coral',
    followerReq: '10k+',
    coverage: ['Instagram Post', 'Reel'],
    compensation: 'Complimentary meal + $150',
    slotsLeft: 4,
  },
  {
    id: 'p2',
    title: 'New Rooftop Bar Opening',
    business: 'Basil & Vine',
    date: 'Jul 30 · Austin, TX',
    tone: 'gold',
    followerReq: '25k+',
    coverage: ['Instagram Story', 'Blog Review'],
    compensation: 'Paid · $300',
    slotsLeft: 3,
  },
];

export default function InfluencerPR() {
  const [applied, setApplied] = useState({}); // id -> true

  const handleApply = (id) => setApplied((prev) => ({ ...prev, [id]: true }));

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-6">
        <h1 className="font-display text-2xl uppercase">PR</h1>
        <p className="mt-1 text-sm text-ink-soft">Apply to press features and media opportunities</p>
      </div>

      <div className="flex flex-col gap-4">
        {PR_OPPS.map((o) => (
          <OpportunityCard
            key={o.id}
            title={o.title}
            meta={`${o.business} · ${o.date}`}
            badgeTone={o.tone}
            badgeText={`${o.slotsLeft} slots left`}
            tags={[`${o.followerReq} followers`, ...o.coverage]}
            compensationText={o.compensation}
            actionLabel="Apply"
            actionDoneLabel="Applied ✓"
            done={!!applied[o.id]}
            onAction={() => handleApply(o.id)}
          />
        ))}
      </div>

      {PR_OPPS.length === 0 && (
        <div className="rounded-lg border border-dashed border-line py-16 text-center text-sm text-ink-soft">
          No open PR opportunities right now — check back soon.
        </div>
      )}
    </div>
  );
}
