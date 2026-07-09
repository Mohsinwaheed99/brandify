import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { RocketIcon, MegaphoneIcon, HandshakeIcon, TagIcon, UserIcon } from '../../../components/ui/Icons.jsx';

const NAV_ITEMS = [
  { to: '/feed/launch', label: 'Launch', icon: RocketIcon },
  { to: '/feed/pr', label: 'PR', icon: MegaphoneIcon },
  { to: '/feed/collab', label: 'Collab', icon: HandshakeIcon },
  { to: '/feed/deals', label: 'Deals', icon: TagIcon },
];

/**
 * Shared shell for the influencer side of the app — an Instagram-style
 * feed with a centered top nav (section icons in the middle, profile
 * on the right) and a single narrow content column underneath.
 */
export default function InfluencerFeedLayout() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="sticky top-0 z-50 border-b border-line bg-paper">
        <div className="relative mx-auto flex h-16 max-w-3xl items-center justify-center px-4">
          <Link to="/" className="absolute left-4 font-display text-lg uppercase">
            Collab<span className="text-coral">Hub</span>
          </Link>

          <nav className="flex items-center gap-8">
            {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-0.5 transition ${
                    isActive ? 'text-coral-ink' : 'text-ink-soft hover:text-ink'
                  }`
                }
              >
                <Icon width={20} height={20} />
                <span className="text-[10px] font-semibold uppercase tracking-wide">{label}</span>
              </NavLink>
            ))}
          </nav>

          <Link
            to="/feed/profile"
            className="absolute right-4 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper-raised text-ink-soft transition hover:text-ink"
            aria-label="Profile"
          >
            <UserIcon width={18} height={18} />
          </Link>
        </div>
      </header>

      <main className="px-4 py-8 sm:px-6">
        <Outlet />
      </main>
    </div>
  );
}
