import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line py-8">
      <div className="container flex items-center justify-between text-[13px] text-ink-soft">
        <span className="font-display text-base uppercase">
          Collab<span className="text-coral">Hub</span>
        </span>
        <p>© {new Date().getFullYear()} CollabHub. All deals signed here.</p>
      </div>
    </footer>
  );
}
