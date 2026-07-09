import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
import { SidebarProvider, useSidebar } from '../context/SidebarContext.jsx';

function MobileBackdrop() {
  const { open, closeSidebar } = useSidebar();
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
      onClick={closeSidebar}
      aria-hidden="true"
    />
  );
}

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <MobileBackdrop />
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
}
