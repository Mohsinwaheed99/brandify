import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext(null);

/**
 * Tracks whether the mobile sidebar drawer is open. Sidebar reads it to
 * know whether to slide in; Topbar's hamburger button (rendered by each
 * dashboard page, not DashboardLayout) writes to it to open the drawer.
 */
export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(false);

  const value = {
    open,
    openSidebar: () => setOpen(true),
    closeSidebar: () => setOpen(false),
  };

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error('useSidebar must be used inside SidebarProvider');
  return ctx;
}
