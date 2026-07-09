import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../components/ui/Input.jsx';
import Button from '../../../components/ui/Button.jsx';

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState('business'); // 'business' | 'influencer'
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // UI-only for now — wire up to real auth later.
    navigate(role === 'influencer' ? '/feed' : '/dashboard');
  };

  return (
    <div className="flex min-h-full flex-col">
      <div className="flex items-center justify-between px-8 py-7">
        <Link to="/" className="font-display text-[22px] uppercase">
          Collab<span className="text-coral">Hub</span>
        </Link>
        <Button as={Link} to="/signup" variant="ghost">Need an account?</Button>
      </div>

      <div className="flex flex-1 items-start justify-center px-6 pb-20 pt-6">
        <div className="w-full max-w-[460px] rounded-lg border border-line bg-paper-raised px-5 py-7 shadow-card sm:p-10">
          <p className="eyebrow">Welcome back</p>
          <h1 className="mb-2 text-[28px]">Log in</h1>
          <p className="mb-7 text-sm text-ink-soft">Pick up your deals right where you left off.</p>

          <div className="mb-6 flex gap-1 rounded-full border border-line bg-paper p-1" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={role === 'influencer'}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition duration-150 ease-out ${
                role === 'influencer' ? 'bg-ink text-paper' : 'text-ink-soft hover:text-ink'
              }`}
              onClick={() => setRole('influencer')}
            >
              Influencer
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={role === 'business'}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition duration-150 ease-out ${
                role === 'business' ? 'bg-ink text-paper' : 'text-ink-soft hover:text-ink'
              }`}
              onClick={() => setRole('business')}
            >
              Business owner
            </button>
          </div>

          <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit}>
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="you@brand.com"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
            <div className="mt-2 flex items-center justify-between">
              <label className="flex gap-2 text-[13px] text-ink-soft">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="text-[13px] font-semibold text-coral-ink">
                Forgot password?
              </a>
            </div>
            <Button type="submit" variant="primary">Log in</Button>
          </form>

          <p className="mt-6 text-center text-sm text-ink-soft">
            New to CollabHub? <Link className="font-semibold text-coral-ink" to="/signup">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
