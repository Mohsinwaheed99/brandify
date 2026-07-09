import React from 'react';
import Topbar from '../components/Topbar.jsx';
import StatCard from '../components/StatCard.jsx';
import StampBadge from '../../../components/ui/StampBadge.jsx';
import { RocketIcon, MegaphoneIcon, HandshakeIcon, TagIcon } from '../../../components/ui/Icons.jsx';

// Mirrors the section grouping used across the Create Launch / PR / Collab
// forms (Basics, Requirements, Compensation) so the dashboard reads like a
// rollup of everything captured in those forms.
const BASICS_STATS = [
  { label: 'Active launches', value: '4', delta: '1 launching this week', tone: 'success' },
  { label: 'Open PR mentions', value: '4', delta: '2 pending reply', tone: 'ink' },
  { label: 'Active collabs', value: '14', delta: '+3 this week', tone: 'success' },
  { label: 'Total reach', value: '482K', delta: '+18% vs last month', tone: 'success' },
];

const REQUIREMENTS_STATS = [
  { label: 'Open creator slots', value: '22', delta: 'across 5 live campaigns', tone: 'ink' },
  { label: 'Top follower tier', value: '10k+', delta: 'most requested', tone: 'ink' },
  { label: 'Top platform', value: 'Instagram', delta: '+TikTok, YouTube', tone: 'ink' },
  { label: 'Applications to review', value: '6', delta: '2 awaiting response', tone: 'success' },
];

const COMPENSATION_STATS = [
  { label: 'Budget committed', value: '$18,400', delta: '+$2,100 this month', tone: 'success' },
  { label: 'Paid to creators', value: '$6,900', delta: '12 payouts', tone: 'ink' },
  { label: 'Awaiting signature', value: '2', delta: 'deals ready to sign', tone: 'ink' },
  { label: 'Avg. per creator', value: '$310', delta: 'across active collabs', tone: 'ink' },
];

const ACTIVITY = [
  { icon: HandshakeIcon, title: 'Maya Chen accepted your collab invite', meta: 'Collab · 2 hours ago', value: '@mayacreates' },
  { icon: TagIcon, title: 'Deal signed with Jordan Lee', meta: 'Deals · Today', value: '$1,200' },
  { icon: MegaphoneIcon, title: 'PR feature published on StyleDaily', meta: 'PR · Yesterday', value: '48.2k reach' },
  { icon: RocketIcon, title: 'Summer Glow launch is 62% funded by creator reach', meta: 'Launch · 2 days ago', value: '62%' },
];

function StatSection({ title, stats }) {
  return (
    <section>
      <div className="mb-4 mt-9 flex items-center justify-between">
        <h2 className="text-lg">{title}</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} delta={s.delta} tone={s.tone} />
        ))}
      </div>
    </section>
  );
}

export default function Overview() {
  return (
    <>
      <Topbar
        title="Dashboard"
        subtitle="Welcome back, Nova Skincare Co."
        action={{ label: 'New launch', onClick: () => {} }}
      />
      <div className="dashboard-page">
        <StatSection title="Basics" stats={BASICS_STATS} />
        <StatSection title="Requirements" stats={REQUIREMENTS_STATS} />
        <StatSection title="Compensation" stats={COMPENSATION_STATS} />

        <div className="my-9 mb-4 flex items-center justify-between">
          <h2 className="text-lg">Recent activity</h2>
          <StampBadge tone="teal">Live</StampBadge>
        </div>
        <div className="overflow-hidden rounded-lg border border-line bg-paper-raised">
          {ACTIVITY.map((item, i) => (
            <div
              className={`flex items-center gap-4 px-5 py-4 ${i === ACTIVITY.length - 1 ? '' : 'border-b border-line'}`}
              key={item.title}
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-teal-tint text-teal">
                <item.icon width={18} height={18} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold">{item.title}</div>
                <div className="mt-0.5 text-xs text-ink-soft">{item.meta}</div>
              </div>
              <span className="flex-shrink-0 font-mono text-[13px] text-ink-soft">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
