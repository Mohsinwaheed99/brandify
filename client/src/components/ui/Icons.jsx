import React from 'react';

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const GridIcon = (p) => (
  <svg {...base} {...p}><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>
);

export const RocketIcon = (p) => (
  <svg {...base} {...p}><path d="M12 2c3 2 5 6 5 10-1 1-2 2-5 2s-4-1-5-2c0-4 2-8 5-10Z"/><circle cx="12" cy="9" r="1.5"/><path d="M9 15l-3 5 5-3M15 15l3 5-5-3"/></svg>
);

export const MegaphoneIcon = (p) => (
  <svg {...base} {...p}><path d="M3 10v4a1 1 0 0 0 1 1h2l7 4V5L6 9H4a1 1 0 0 0-1 1Z"/><path d="M17 9a4 4 0 0 1 0 6M20 6a8 8 0 0 1 0 12"/></svg>
);

export const HandshakeIcon = (p) => (
  <svg {...base} {...p}><path d="M2 12l4-3 4 3 3-3 3 3 3-3 3 3"/><path d="M8 12l3 4 3-1 3 1"/></svg>
);

export const TagIcon = (p) => (
  <svg {...base} {...p}><path d="M3 11V5a2 2 0 0 1 2-2h6l10 10-8 8L3 11Z"/><circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none"/></svg>
);

export const InstagramIcon = (p) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>
);

export const BellIcon = (p) => (
  <svg {...base} {...p}><path d="M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>
);

export const ChevronDownIcon = (p) => (
  <svg {...base} {...p}><path d="M6 9l6 6 6-6"/></svg>
);

export const ArrowRightIcon = (p) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
);

export const CheckCircleIcon = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9"/></svg>
);

export const SearchIcon = (p) => (
  <svg {...base} {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
);

export const PlusIcon = (p) => (
  <svg {...base} {...p}><path d="M12 5v14M5 12h14"/></svg>
);

export const UserIcon = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.5-6 8-6s8 2 8 6"/></svg>
);

export const MenuIcon = (p) => (
  <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16"/></svg>
);

export const CloseIcon = (p) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6L6 18"/></svg>
);
