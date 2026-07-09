import React from 'react';
import Topbar from '../components/Topbar.jsx';
import StampBadge from '../../../components/ui/StampBadge.jsx';

const COLUMNS = [
  {
    title: 'Invited',
    tone: 'gold',
    items: [
      { name: 'Priya Nair', niche: 'Beauty & Wellness', followers: '82K' },
      { name: 'Leo Martins', niche: 'Fitness', followers: '54K' },
    ],
  },
  {
    title: 'Negotiating',
    tone: 'coral',
    items: [
      { name: 'Jordan Lee', niche: 'Lifestyle', followers: '120K' },
    ],
  },
  {
    title: 'Signed',
    tone: 'success',
    items: [
      { name: 'Maya Chen', niche: 'Fashion & Beauty', followers: '210K' },
      { name: 'Sofia Reyes', niche: 'Food & Cooking', followers: '98K' },
      { name: 'Amara Diallo', niche: 'Travel', followers: '76K' },
    ],
  },
];

export default function Collab() {
  return (
    <>
      <Topbar
        title="Collab"
        subtitle="Move creator relationships from invite to signed"
        action={{ label: 'Invite creator', onClick: () => {} }}
      />
      <div className="dashboard-page">
        <div className="grid grid-cols-1 items-start gap-[18px] md:grid-cols-3">
          {COLUMNS.map((col) => (
            <div className="rounded-lg border border-dashed border-line bg-paper p-4" key={col.title}>
              <div className="mb-3.5 flex justify-between font-mono text-xs uppercase tracking-[0.06em] text-ink-soft">
                <span>{col.title}</span>
                <span>{col.items.length}</span>
              </div>
              {col.items.map((creator) => (
                <div className="mb-3 rounded-md border border-line bg-paper-raised p-3.5 shadow-card" key={creator.name}>
                  <div className="text-sm font-bold">{creator.name}</div>
                  <div className="my-1 mb-2.5 text-xs text-ink-soft">{creator.niche}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ink-soft">{creator.followers} followers</span>
                    <StampBadge tone={col.tone}>{col.title}</StampBadge>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
