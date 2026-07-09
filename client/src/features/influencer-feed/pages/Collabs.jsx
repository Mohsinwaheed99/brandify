import React, { useState } from 'react';
import OpportunityCard from '../components/OpportunityCard.jsx';

const COLLAB_OPPS = [
  {
    id: 'c1',
    title: 'Q3 Brand Ambassador',
    business: 'Lumière Skincare',
    type: 'Brand Ambassador',
    duration: '3 months',
    tone: 'coral',
    compensation: '$1,500/mo retainer',
    followerReq: '10k+',
  },
  {
    id: 'c2',
    title: 'Social Media Manager',
    business: 'Basil & Vine',
    type: 'Marketing Manager',
    duration: 'Ongoing',
    tone: 'teal',
    compensation: '$2,000/mo retainer',
    followerReq: '25k+',
  },
];

export default function InfluencerCollabs() {
  const [applied, setApplied] = useState({}); // id -> true

  const handleApply = (id) => setApplied((prev) => ({ ...prev, [id]: true }));

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-6">
        <h1 className="font-display text-2xl uppercase">Collabs</h1>
        <p className="mt-1 text-sm text-ink-soft">Apply for long-term ambassador and marketing roles</p>
      </div>

      <div className="flex flex-col gap-4">
        {COLLAB_OPPS.map((o) => (
          <OpportunityCard
            key={o.id}
            title={o.title}
            meta={`${o.business} · ${o.type}`}
            badgeTone={o.tone}
            badgeText={o.duration}
            tags={[`${o.followerReq} followers`, o.type]}
            compensationText={o.compensation}
            actionLabel="Apply"
            actionDoneLabel="Applied ✓"
            done={!!applied[o.id]}
            onAction={() => handleApply(o.id)}
          />
        ))}
      </div>

      {COLLAB_OPPS.length === 0 && (
        <div className="rounded-lg border border-dashed border-line py-16 text-center text-sm text-ink-soft">
          No open collabs right now — check back soon.
        </div>
      )}
    </div>
  );
}
