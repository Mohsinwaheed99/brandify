import React, { useRef, useState } from 'react';
import StampBadge from '../../../components/ui/StampBadge.jsx';

const NICHES = ['Food & Dining', 'Lifestyle', 'Beauty', 'Fitness', 'Travel', 'Family', 'Nightlife'];

const PLATFORM_FIELDS = [
  { key: 'instagram', label: 'Instagram', placeholder: '@handle' },
  { key: 'tiktok', label: 'TikTok', placeholder: '@handle' },
  { key: 'youtube', label: 'YouTube', placeholder: 'Channel name' },
  { key: 'twitter', label: 'X / Twitter', placeholder: '@handle' },
];

const CARD = 'rounded-[14px] border border-line bg-paper-raised p-[22px] shadow-card';
const CARD_TITLE = 'mb-4 text-[15px] font-bold text-ink';
const FIELD = 'mb-4 flex flex-col gap-1.5';
const FIELD_LABEL = 'text-[12.5px] font-semibold text-ink-soft';
const CONTROL = 'rounded-[9px] border border-line bg-paper-raised px-3 py-2.5 text-sm text-ink outline-none transition focus:border-coral-ink focus:ring-[3px] focus:ring-coral-ink/10';
const CHIP = 'appearance-none rounded-lg border border-line bg-paper-raised px-3 py-[7px] text-[13px] font-semibold text-ink-soft transition';
const CHIP_ACTIVE = 'border-coral-ink bg-coral/10 text-coral-ink';

function emptyPortfolioItem() {
  return { id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random()), url: '', label: '' };
}

export default function InfluencerProfile() {
  const fileInputRef = useRef(null);

  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState('Maya Chen');
  const [tagline, setTagline] = useState('Food & lifestyle creator based in Austin, TX');
  const [bio, setBio] = useState(
    "I create bite-sized restaurant reviews and lifestyle content for a foodie audience that trusts my recommendations."
  );
  const [location, setLocation] = useState('Austin, TX');

  const [socials, setSocials] = useState({
    instagram: { handle: '@mayaeats', followers: 42000 },
    tiktok: { handle: '@mayaeats', followers: 18500 },
    youtube: { handle: '', followers: 0 },
    twitter: { handle: '', followers: 0 },
  });

  const [engagementRate, setEngagementRate] = useState(4.8);
  const [avgViews, setAvgViews] = useState(12000);
  const [niches, setNiches] = useState(['Food & Dining', 'Lifestyle']);
  const [portfolio, setPortfolio] = useState([emptyPortfolioItem()]);
  const [saved, setSaved] = useState(false);

  const totalFollowers = Object.values(socials).reduce((sum, s) => sum + (Number(s.followers) || 0), 0);

  const updateSocial = (key, field, value) => {
    setSocials((prev) => ({ ...prev, [key]: { ...prev[key], [field]: value } }));
  };

  const toggleNiche = (n) => {
    setNiches((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));
  };

  const updatePortfolioItem = (id, field, value) => {
    setPortfolio((prev) => prev.map((p) => (p.id === id ? { ...p, [field]: value } : p)));
  };

  const addPortfolioItem = () => setPortfolio((prev) => [...prev, emptyPortfolioItem()]);

  const removePortfolioItem = (id) => setPortfolio((prev) => prev.filter((p) => p.id !== id));

  const handleAvatarSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    // Wire this up to your save-profile API call.
    console.log('Saving profile', {
      name,
      tagline,
      bio,
      location,
      socials,
      engagementRate,
      avgViews,
      niches,
      portfolio,
      avatar,
    });
    setSaved(true);
  };

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const formatFollowers = (n) => {
    if (!n) return '0';
    if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k`;
    return String(n);
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl uppercase">My Profile</h1>
          <p className="mt-1 text-sm text-ink-soft">This is what brands see when you apply</p>
        </div>
        <button
          type="button"
          className="flex-shrink-0 rounded-sm bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition duration-150 ease-out hover:bg-coral-ink"
          onClick={handleSave}
        >
          {saved ? 'Saved ✓' : 'Save profile'}
        </button>
      </div>
      <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-[1.3fr_0.7fr]">
          <div className="flex flex-col gap-5">
            <div className={CARD}>
              <div className={CARD_TITLE}>Basics</div>

              <div className="mb-5 flex items-center gap-4">
                <div
                  className="group relative h-20 w-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-full border-2 border-line bg-paper"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {avatar ? (
                    <img className="h-full w-full object-cover" src={avatar} alt="Avatar" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center font-display text-xl uppercase text-ink-soft">
                      {initials}
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-ink/70 py-1 text-center text-[10px] text-paper opacity-0 transition group-hover:opacity-100">
                    Edit
                  </div>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleAvatarSelect}
                />
                <div className="text-xs text-ink-soft">Click the avatar to upload a profile photo</div>
              </div>

              <label className={FIELD}>
                <span className={FIELD_LABEL}>Name</span>
                <input className={CONTROL} type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>

              <label className={FIELD}>
                <span className={FIELD_LABEL}>Tagline</span>
                <input
                  className={CONTROL}
                  type="text"
                  placeholder="e.g. Food & lifestyle creator based in Austin, TX"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                />
              </label>

              <label className={FIELD}>
                <span className={FIELD_LABEL}>Location</span>
                <input className={CONTROL} type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
              </label>

              <label className={FIELD}>
                <span className={FIELD_LABEL}>Bio</span>
                <textarea
                  className={`${CONTROL} resize-y`}
                  rows={4}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </label>
            </div>

            <div className={CARD}>
              <div className={CARD_TITLE}>Social accounts</div>
              {PLATFORM_FIELDS.map((p) => (
                <div className="mb-3 flex items-center gap-2.5" key={p.key}>
                  <span className="w-[90px] flex-shrink-0 text-[13px] font-semibold text-ink-soft">{p.label}</span>
                  <input
                    className={`${CONTROL} flex-1`}
                    type="text"
                    placeholder={p.placeholder}
                    value={socials[p.key].handle}
                    onChange={(e) => updateSocial(p.key, 'handle', e.target.value)}
                  />
                  <input
                    className={`${CONTROL} w-[110px] flex-shrink-0`}
                    type="number"
                    min={0}
                    placeholder="Followers"
                    value={socials[p.key].followers || ''}
                    onChange={(e) => updateSocial(p.key, 'followers', Number(e.target.value))}
                  />
                </div>
              ))}
            </div>

            <div className={CARD}>
              <div className={CARD_TITLE}>Performance</div>
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <label className={FIELD}>
                  <span className={FIELD_LABEL}>Engagement rate (%)</span>
                  <input
                    className={CONTROL}
                    type="number"
                    step="0.1"
                    min={0}
                    value={engagementRate}
                    onChange={(e) => setEngagementRate(Number(e.target.value))}
                  />
                </label>
                <label className={FIELD}>
                  <span className={FIELD_LABEL}>Average views</span>
                  <input
                    className={CONTROL}
                    type="number"
                    min={0}
                    value={avgViews}
                    onChange={(e) => setAvgViews(Number(e.target.value))}
                  />
                </label>
              </div>

              <div className={FIELD}>
                <span className={FIELD_LABEL}>Niches</span>
                <div className="flex flex-wrap gap-2">
                  {NICHES.map((n) => (
                    <button
                      type="button"
                      key={n}
                      className={`${CHIP} ${niches.includes(n) ? CHIP_ACTIVE : ''}`}
                      onClick={() => toggleNiche(n)}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className={CARD}>
              <div className={CARD_TITLE}>Portfolio</div>
              {portfolio.map((item, i) => (
                <div className="mb-2 flex items-center gap-2" key={item.id}>
                  <input
                    className={`${CONTROL} flex-1`}
                    type="text"
                    placeholder="Label, e.g. Basil & Vine feature"
                    value={item.label}
                    onChange={(e) => updatePortfolioItem(item.id, 'label', e.target.value)}
                  />
                  <input
                    className={`${CONTROL} flex-1`}
                    type="text"
                    placeholder="https://instagram.com/p/..."
                    value={item.url}
                    onChange={(e) => updatePortfolioItem(item.id, 'url', e.target.value)}
                  />
                  {portfolio.length > 1 && (
                    <button
                      type="button"
                      className="h-6 w-6 border-none bg-none text-base text-ink-soft"
                      onClick={() => removePortfolioItem(item.id)}
                      aria-label={`Remove portfolio item ${i + 1}`}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
              <button type="button" className="py-1 text-[13px] font-semibold text-coral-ink" onClick={addPortfolioItem}>
                + Add portfolio link
              </button>
            </div>
          </div>

          <div className="sticky top-5">
            <div className={`${CARD} flex flex-col items-center`}>
              <div className={`${CARD_TITLE} self-start`}>Preview</div>
              <div className="w-full text-center">
                <div className="mx-auto mb-3 h-20 w-20 overflow-hidden rounded-full border-2 border-line bg-paper">
                  {avatar ? (
                    <img className="h-full w-full object-cover" src={avatar} alt="Avatar" />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center font-display text-xl uppercase text-ink-soft">
                      {initials}
                    </span>
                  )}
                </div>
                <div className="font-display text-lg uppercase">{name || 'Your name'}</div>
                <div className="mt-1 text-sm text-ink-soft">{tagline || 'Add a tagline'}</div>
                <div className="mt-1 text-xs text-ink-soft">📍 {location || 'Location'}</div>

                <div className="my-4 grid grid-cols-3 gap-2 border-y border-line py-4">
                  <div className="text-center">
                    <div className="font-display text-lg">{formatFollowers(totalFollowers)}</div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wide text-ink-soft">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-lg">{engagementRate}%</div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wide text-ink-soft">Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-lg">{formatFollowers(avgViews)}</div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wide text-ink-soft">Avg views</div>
                  </div>
                </div>

                {niches.length > 0 && (
                  <div className="mb-4 flex flex-wrap justify-center gap-1.5">
                    {niches.map((n) => (
                      <StampBadge tone="gold" key={n}>
                        {n}
                      </StampBadge>
                    ))}
                  </div>
                )}

                <div className="text-left text-sm leading-relaxed text-ink-soft">{bio}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}


