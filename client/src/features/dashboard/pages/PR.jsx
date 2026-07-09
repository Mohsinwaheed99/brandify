import React from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar from '../components/Topbar.jsx';
import StampBadge from '../../../components/ui/StampBadge.jsx';
import { MegaphoneIcon } from '../../../components/ui/Icons.jsx';

const MENTIONS = [
  { title: 'StyleDaily features Summer Glow Serum in "5 Products to Watch"', meta: 'StyleDaily · Jun 28', value: '48.2K reach', status: 'Published', tone: 'success' },
  { title: 'Interview request from Byrdie about clean beauty trends', meta: 'Byrdie · Jul 2', value: 'Awaiting reply', status: 'Pending', tone: 'gold' },
  { title: 'Feature draft under review for TechCrunch Commerce', meta: 'TechCrunch · Jul 5', value: 'In review', status: 'Pending', tone: 'gold' },
  { title: 'Podcast mention on "The Founder\'s Desk"', meta: 'Founder\'s Desk · Jun 14', value: '12.4K listens', status: 'Published', tone: 'success' },
];

export default function PR() {
  const navigate = useNavigate();

  return (
    <>
      <Topbar
        title="PR"
        subtitle="Track press coverage and media requests"
        action={{ label: 'Log mention', onClick: () => navigate('/dashboard/create-pr') }}
      />
      <div className="dashboard-page">
        <div className="overflow-hidden rounded-lg border border-line bg-paper-raised">
          {MENTIONS.map((m, i) => (
            <div
              className={`flex items-center gap-4 px-5 py-4 ${i === MENTIONS.length - 1 ? '' : 'border-b border-line'}`}
              key={m.title}
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-teal-tint text-teal">
                <MegaphoneIcon width={18} height={18} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold">{m.title}</div>
                <div className="mt-0.5 text-xs text-ink-soft">{m.meta}</div>
              </div>
              <span className="flex-shrink-0 font-mono text-[13px] text-ink-soft">{m.value}</span>
              <StampBadge tone={m.tone}>{m.status}</StampBadge>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
