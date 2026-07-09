import React from 'react';
import { NavLink } from 'react-router-dom';
import { GridIcon, RocketIcon, MegaphoneIcon, HandshakeIcon, TagIcon, PlusIcon, CloseIcon } from '../../../components/ui/Icons.jsx';
import { useSidebar } from '../context/SidebarContext.jsx';

const NAV_ITEMS = [
  { to: '/dashboard', label: 'Dashboard', icon: GridIcon, end: true },
  { to: '/dashboard/launch', label: 'Launch', icon: RocketIcon },
  { to: '/dashboard/pr', label: 'PR', icon: MegaphoneIcon },
  { to: '/dashboard/collab', label: 'Collab', icon: HandshakeIcon },
  { to: '/dashboard/deals', label: 'Deals', icon: TagIcon },
];

const CREATE_ITEMS = [
  { to: '/dashboard/create-launch', label: 'Create Launch' },
  { to: '/dashboard/create-pr', label: 'Create PR' },
  { to: '/dashboard/create-collab', label: 'Create Collab' },
];

export default function Sidebar() {
  const { open, closeSidebar } = useSidebar();

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 flex h-screen w-sidebar flex-shrink-0 flex-col bg-ink px-4 py-6 text-paper transition-transform duration-200 ease-out lg:sticky lg:top-0 lg:z-auto lg:translate-x-0 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="mb-8 flex items-center justify-between px-2.5">
        <div className="font-display text-xl uppercase">
          Collab<span className="text-coral">Hub</span>
        </div>
        <button
          type="button"
          className="text-paper/65 hover:text-paper lg:hidden"
          onClick={closeSidebar}
          aria-label="Close menu"
        >
          <CloseIcon width={20} height={20} />
        </button>
      </div>

      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-sm px-3.5 py-3 text-sm font-semibold transition duration-150 ease-out ${
                isActive ? 'bg-coral text-ink' : 'text-paper/65 hover:bg-paper/[0.06] hover:text-paper'
              }`
            }
          >
            <Icon width={18} height={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-6 flex flex-col gap-1 border-t border-paper/10 pt-4">
        <span className="px-3.5 pb-1 font-mono text-[11px] uppercase tracking-[0.06em] text-paper/50">Create</span>
        {CREATE_ITEMS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-sm px-3.5 py-2.5 text-sm font-semibold transition duration-150 ease-out ${
                isActive ? 'bg-coral text-ink' : 'text-paper/65 hover:bg-paper/[0.06] hover:text-paper'
              }`
            }
          >
            <PlusIcon width={16} height={16} />
            {label}
          </NavLink>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-1 border-t border-paper/10 px-2.5 pb-1 pt-4">
        <span className="eyebrow">Signed in as</span>
        <strong className="text-sm">Nova Skincare Co.</strong>
        <span className="stamp mt-2 text-teal">Business owner</span>
      </div>
    </aside>
  );
}
