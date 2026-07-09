import React from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar from '../components/Topbar.jsx';
import StampBadge from '../../../components/ui/StampBadge.jsx';

const LAUNCHES = [
  { title: 'Summer Glow Serum', date: 'Launches Jul 24', progress: 62, creators: 5, tone: 'coral', status: 'In progress' },
  { title: 'Rewards App v2', date: 'Launches Aug 3', progress: 28, creators: 3, tone: 'gold', status: 'Planning' },
  { title: 'Holiday Gift Set', date: 'Launched Jun 10', progress: 100, creators: 8, tone: 'teal', status: 'Complete' },
  { title: 'Refill Subscription', date: 'Launches Sep 1', progress: 8, creators: 1, tone: 'gold', status: 'Planning' },
];

export default function Launch() {
  const navigate = useNavigate();

  return (
    <>
      <Topbar
        title="Launch"
        subtitle="Coordinate creators around product and campaign launches"
        action={{ label: 'New launch', onClick: () => navigate('/dashboard/create-launch') }}
      />
      <div className="dashboard-page">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[18px]">
          {LAUNCHES.map((l) => (
            <div className="flex flex-col gap-2.5 rounded-lg border border-line bg-paper-raised p-[22px]" key={l.title}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-display text-[17px] uppercase">{l.title}</div>
                  <div className="text-xs text-ink-soft">{l.date}</div>
                </div>
                <StampBadge tone={l.tone}>{l.status}</StampBadge>
              </div>

              <div className="mt-1 h-1.5 overflow-hidden rounded bg-line">
                <div className="h-full bg-coral" style={{ width: `${l.progress}%` }} />
              </div>

              <div className="mt-1 flex items-center justify-between text-xs text-ink-soft">
                <div className="flex">
                  {Array.from({ length: Math.min(l.creators, 4) }).map((_, i) => (
                    <span
                      className="-ml-2 flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-paper-raised bg-gold-tint text-[11px] font-bold text-gold first:ml-0"
                      key={i}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                  ))}
                </div>
                <span>{l.creators} creators attached</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
