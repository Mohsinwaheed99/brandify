import React from 'react';
import { SearchIcon, BellIcon, PlusIcon, MenuIcon } from '../../../components/ui/Icons.jsx';
import Button from '../../../components/ui/Button.jsx';
import { useSidebar } from '../context/SidebarContext.jsx';

export default function Topbar({ title, subtitle, action }) {
  const { openSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-10 flex min-h-topbar flex-wrap items-center justify-between gap-y-2 border-b border-line bg-paper px-4 py-5 sm:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-line bg-paper-raised text-ink-soft hover:text-ink lg:hidden"
          onClick={openSidebar}
          aria-label="Open menu"
        >
          <MenuIcon width={18} height={18} />
        </button>
        <div>
          <h1 className="text-[22px]">{title}</h1>
          {subtitle && <p className="mt-1 text-[13px] normal-case text-ink-soft">{subtitle}</p>}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-line bg-paper-raised px-3.5 py-[9px] text-ink-soft md:flex">
          <SearchIcon width={16} height={16} />
          <input className="w-[140px] border-none bg-none text-[13px] outline-none" placeholder="Search..." />
        </div>
        <button
          className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full border border-line bg-paper-raised text-ink-soft hover:text-ink"
          aria-label="Notifications"
        >
          <BellIcon width={18} height={18} />
        </button>
        {action && (
          <Button variant="primary" onClick={action.onClick}>
            <PlusIcon width={16} height={16} /> <span className="hidden sm:inline">{action.label}</span>
          </Button>
        )}
      </div>
    </header>
  );
}
