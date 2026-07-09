import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button.jsx';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="container flex h-[76px] items-center justify-between">
        <Link to="/" className="font-display text-2xl font-bold uppercase tracking-[0.5px]">
          Collab<span className="text-coral">Hub</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          <a className="text-sm font-semibold text-ink-soft hover:text-ink" href="#how-it-works">
            How it works
          </a>
          <a className="text-sm font-semibold text-ink-soft hover:text-ink" href="#for-brands">
            For brands
          </a>
          <a className="text-sm font-semibold text-ink-soft hover:text-ink" href="#for-creators">
            For creators
          </a>
        </nav>
        <div className="flex items-center gap-2.5">
          <Button as={Link} to="/login" variant="ghost">Log in</Button>
          <Button as={Link} to="/signup" variant="primary">Sign up</Button>
        </div>
      </div>
    </header>
  );
}
