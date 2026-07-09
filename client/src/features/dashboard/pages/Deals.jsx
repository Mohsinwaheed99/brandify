import React from 'react';
import Topbar from '../components/Topbar.jsx';
import StampBadge from '../../../components/ui/StampBadge.jsx';

const DEALS = [
  { creator: 'Maya Chen', campaign: 'Summer Glow Serum', amount: '$1,800', status: 'Paid', tone: 'success' },
  { creator: 'Jordan Lee', campaign: 'Holiday Gift Set', amount: '$1,200', status: 'Signed', tone: 'teal' },
  { creator: 'Sofia Reyes', campaign: 'Refill Subscription', amount: '$950', status: 'Awaiting signature', tone: 'gold' },
  { creator: 'Amara Diallo', campaign: 'Summer Glow Serum', amount: '$1,400', status: 'Paid', tone: 'success' },
  { creator: 'Priya Nair', campaign: 'Rewards App v2', amount: '$700', status: 'Draft', tone: 'ink' },
];

export default function Deals() {
  return (
    <>
      <Topbar
        title="Deals"
        subtitle="Every collab agreement, signed and unsigned"
        action={{ label: 'New deal', onClick: () => {} }}
      />
      <div className="dashboard-page">
        <div className="overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[560px] border-collapse bg-paper-raised">
            <thead>
              <tr>
                <th className="border-b border-line bg-paper px-5 py-3.5 text-left font-mono text-[11px] uppercase tracking-[0.06em] text-ink-soft">Creator</th>
                <th className="border-b border-line bg-paper px-5 py-3.5 text-left font-mono text-[11px] uppercase tracking-[0.06em] text-ink-soft">Campaign</th>
                <th className="border-b border-line bg-paper px-5 py-3.5 text-left font-mono text-[11px] uppercase tracking-[0.06em] text-ink-soft">Value</th>
                <th className="border-b border-line bg-paper px-5 py-3.5 text-left font-mono text-[11px] uppercase tracking-[0.06em] text-ink-soft">Status</th>
              </tr>
            </thead>
            <tbody>
              {DEALS.map((d, i) => {
                const borderClass = i === DEALS.length - 1 ? '' : 'border-b border-line';
                return (
                  <tr key={`${d.creator}-${d.campaign}`}>
                    <td className={`px-5 py-4 text-sm ${borderClass}`}>{d.creator}</td>
                    <td className={`px-5 py-4 text-sm ${borderClass}`}>{d.campaign}</td>
                    <td className={`px-5 py-4 text-sm font-mono font-semibold ${borderClass}`}>{d.amount}</td>
                    <td className={`px-5 py-4 text-sm ${borderClass}`}>
                      <StampBadge tone={d.tone}>{d.status}</StampBadge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
