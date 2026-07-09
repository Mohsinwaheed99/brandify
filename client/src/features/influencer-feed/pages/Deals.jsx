import React, { useState } from 'react';
import OpportunityCard from '../components/OpportunityCard.jsx';

const DEAL_OPPS = [
  {
    id: 'd1',
    title: 'Share our Summer Glow launch',
    business: 'Lumière Skincare',
    campaign: 'Summer Glow Serum',
    tone: 'gold',
    reward: '+100 pts',
    followerReq: '5k+',
    platform: 'Instagram Story',
    claimsLeft: 12,
  },
  {
    id: 'd2',
    title: 'Post your Basil & Vine visit',
    business: 'Basil & Vine',
    campaign: 'Summer Tasting Menu',
    tone: 'teal',
    reward: '10% commission',
    followerReq: '1k+',
    platform: 'Instagram Post',
    claimsLeft: 20,
  },
];

export default function InfluencerDeals() {
  const [claimed, setClaimed] = useState({}); // id -> true

  const handleClaim = (id) => setClaimed((prev) => ({ ...prev, [id]: true }));

  return (
    <div className="mx-auto max-w-xl">
      <div className="mb-6">
        <h1 className="font-display text-2xl uppercase">Deals</h1>
        <p className="mt-1 text-sm text-ink-soft">Claim deals and earn points or commission for sharing</p>
      </div>

      <div className="flex flex-col gap-4">
        {DEAL_OPPS.map((o) => (
          <OpportunityCard
            key={o.id}
            title={o.title}
            meta={`${o.business} · ${o.campaign}`}
            badgeTone={o.tone}
            badgeText={o.reward}
            tags={[`${o.followerReq} followers`, o.platform, `${o.claimsLeft} claims left`]}
            compensationText={`Share to earn ${o.reward}`}
            actionLabel="Claim deal"
            actionDoneLabel="Claimed ✓"
            done={!!claimed[o.id]}
            onAction={() => handleClaim(o.id)}
          />
        ))}
      </div>

      {DEAL_OPPS.length === 0 && (
        <div className="rounded-lg border border-dashed border-line py-16 text-center text-sm text-ink-soft">
          No open deals right now — check back soon.
        </div>
      )}
    </div>
  );
}
