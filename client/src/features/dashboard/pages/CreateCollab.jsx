import React, { useRef, useState } from 'react';
import Topbar from '../components/Topbar.jsx';
import StampBadge from '../../../components/ui/StampBadge.jsx';

const COLLAB_TYPES = [
  { key: 'ambassador', label: 'Brand Ambassador' },
  { key: 'manager', label: 'Marketing Manager' },
  { key: 'partner', label: 'Content Partner' },
];

const DURATIONS = [
  { key: 'one-time', label: 'One-time' },
  { key: 'monthly', label: 'Monthly' },
  { key: '3-month', label: '3 months' },
  { key: '6-month', label: '6 months' },
  { key: 'ongoing', label: 'Ongoing' },
];

const NICHES = ['Food & Dining', 'Lifestyle', 'Beauty', 'Fitness', 'Travel', 'Family', 'Nightlife'];

const PLATFORMS = ['Instagram', 'TikTok', 'YouTube', 'X / Twitter'];

const FOLLOWER_TIERS = [
  { value: '1000', label: '1k+ followers' },
  { value: '5000', label: '5k+ followers' },
  { value: '10000', label: '10k+ followers' },
  { value: '50000', label: '50k+ followers' },
  { value: '100000', label: '100k+ followers' },
];

const COMPENSATION_TYPES = [
  { key: 'retainer', label: 'Monthly retainer' },
  { key: 'per-post', label: 'Per-post rate' },
  { key: 'product', label: 'Product & meals' },
  { key: 'revenue', label: 'Revenue share' },
  { key: 'hybrid', label: 'Hybrid' },
];

const TAB = 'appearance-none border-none bg-none px-[18px] py-2.5 text-sm font-semibold text-ink-soft border-b-2 border-transparent transition-colors duration-150 hover:text-ink';
const TAB_ACTIVE = 'text-ink border-b-coral-ink';
const CARD = 'rounded-[14px] border border-line bg-paper-raised p-[22px] shadow-card';
const CARD_TITLE = 'mb-4 text-[15px] font-bold text-ink';
const FIELD = 'mb-4 flex flex-col gap-1.5';
const FIELD_LABEL = 'text-[12.5px] font-semibold text-ink-soft';
const CONTROL = 'rounded-[9px] border border-line bg-paper-raised px-3 py-2.5 text-sm text-ink outline-none transition focus:border-coral-ink focus:ring-[3px] focus:ring-coral-ink/10';
const TOGGLE = 'appearance-none rounded-full border border-line bg-paper-raised px-4 py-2 text-[13px] font-semibold text-ink-soft transition';
const TOGGLE_ACTIVE = 'border-ink bg-ink text-paper';
const CHIP = 'appearance-none rounded-lg border border-line bg-paper-raised px-3 py-[7px] text-[13px] font-semibold text-ink-soft transition';
const CHIP_ACTIVE = 'border-coral-ink bg-coral/10 text-coral-ink';

function emptyPerk() {
  return { id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random()), text: '' };
}

export default function CreateCollab() {
  const [activeTab, setActiveTab] = useState('details');
  const fileInputRef = useRef(null);

  // Role details
  const [title, setTitle] = useState('');
  const [collabType, setCollabType] = useState('ambassador');
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [duration, setDuration] = useState('3-month');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [postsPerMonth, setPostsPerMonth] = useState(4);
  const [storiesPerMonth, setStoriesPerMonth] = useState(8);
  const [reelsPerMonth, setReelsPerMonth] = useState(2);
  const [niches, setNiches] = useState(['Food & Dining']);
  const [influencerCount, setInfluencerCount] = useState(1);
  const [followerTier, setFollowerTier] = useState('10000');
  const [platforms, setPlatforms] = useState(['Instagram']);
  const [notes, setNotes] = useState('');

  // Compensation & perks
  const [compensationType, setCompensationType] = useState('retainer');
  const [amount, setAmount] = useState('');
  const [revenueSharePct, setRevenueSharePct] = useState('');
  const [perks, setPerks] = useState([emptyPerk(), emptyPerk()]);
  const [exclusive, setExclusive] = useState(true);
  const [noticeDays, setNoticeDays] = useState(14);
  const [images, setImages] = useState([]); // { id, name, url }

  const toggleNiche = (n) => {
    setNiches((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));
  };

  const togglePlatform = (p) => {
    setPlatforms((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));
  };

  const updatePerk = (id, text) =>
    setPerks((prev) => prev.map((p) => (p.id === id ? { ...p, text } : p)));

  const addPerk = () => setPerks((prev) => [...prev, emptyPerk()]);

  const removePerk = (id) => setPerks((prev) => prev.filter((p) => p.id !== id));

  const handleImageSelect = (e) => {
    const files = Array.from(e.target.files || []);
    const readers = files.map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () =>
            resolve({ id: `${file.name}-${file.lastModified}`, name: file.name, url: reader.result });
          reader.readAsDataURL(file);
        })
    );
    Promise.all(readers).then((loaded) => setImages((prev) => [...prev, ...loaded]));
  };

  const removeImage = (id) => setImages((prev) => prev.filter((img) => img.id !== id));

  const handlePublish = () => {
    // Wire this up to your create-collab API call.
    console.log('Publishing collab', {
      title,
      collabType,
      businessName,
      location,
      responsibilities,
      duration,
      startDate,
      endDate,
      postsPerMonth,
      storiesPerMonth,
      reelsPerMonth,
      niches,
      influencerCount,
      followerTier,
      platforms,
      notes,
      compensationType,
      amount,
      revenueSharePct,
      perks,
      exclusive,
      noticeDays,
      images,
    });
  };

  const collabLabel = COLLAB_TYPES.find((c) => c.key === collabType)?.label;

  return (
    <>
      <Topbar
        title="Create Collab"
        subtitle="Bring a creator on as a long-term marketing partner or brand ambassador"
        action={{ label: 'Publish collab', onClick: handlePublish }}
      />
      <div className="dashboard-page">
        <div className="mb-5 flex gap-1 border-b border-line">
          <button
            type="button"
            className={`${TAB} ${activeTab === 'details' ? TAB_ACTIVE : ''}`}
            onClick={() => setActiveTab('details')}
          >
            Role details
          </button>
          <button
            type="button"
            className={`${TAB} ${activeTab === 'terms' ? TAB_ACTIVE : ''}`}
            onClick={() => setActiveTab('terms')}
          >
            Compensation & perks
          </button>
        </div>

        {activeTab === 'details' && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className={CARD}>
              <div className={CARD_TITLE}>Basics</div>

              <label className={FIELD}>
                <span className={FIELD_LABEL}>Role title</span>
                <input
                  className={CONTROL}
                  type="text"
                  placeholder="e.g. Q3 Brand Ambassador"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>

              <div className={FIELD}>
                <span className={FIELD_LABEL}>Collab type</span>
                <div className="flex flex-wrap gap-2">
                  {COLLAB_TYPES.map((t) => (
                    <button
                      type="button"
                      key={t.key}
                      className={`${TOGGLE} ${collabType === t.key ? TOGGLE_ACTIVE : ''}`}
                      onClick={() => setCollabType(t.key)}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <label className={FIELD}>
                  <span className={FIELD_LABEL}>Restaurant / business name</span>
                  <input
                    className={CONTROL}
                    type="text"
                    placeholder="e.g. Basil & Vine"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                  />
                </label>
                <label className={FIELD}>
                  <span className={FIELD_LABEL}>Location</span>
                  <input
                    className={CONTROL}
                    type="text"
                    placeholder="e.g. Austin, TX"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </label>
              </div>

              <label className={FIELD}>
                <span className={FIELD_LABEL}>Responsibilities</span>
                <textarea
                  className={`${CONTROL} resize-y`}
                  rows={4}
                  placeholder="What will this creator own — content calendar, in-store events, community management?"
                  value={responsibilities}
                  onChange={(e) => setResponsibilities(e.target.value)}
                />
              </label>
            </div>

            <div className={CARD}>
              <div className={CARD_TITLE}>Engagement</div>

              <div className={FIELD}>
                <span className={FIELD_LABEL}>Duration</span>
                <div className="flex flex-wrap gap-2">
                  {DURATIONS.map((d) => (
                    <button
                      type="button"
                      key={d.key}
                      className={`${TOGGLE} ${duration === d.key ? TOGGLE_ACTIVE : ''}`}
                      onClick={() => setDuration(d.key)}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <label className={FIELD}>
                  <span className={FIELD_LABEL}>Start date</span>
                  <input
                    className={CONTROL}
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </label>
                {duration !== 'ongoing' && (
                  <label className={FIELD}>
                    <span className={FIELD_LABEL}>End date</span>
                    <input
                      className={CONTROL}
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </label>
                )}
              </div>

              <span className={`${FIELD_LABEL} mb-2 block`}>Monthly deliverables</span>
              <div className="mb-1 grid grid-cols-3 gap-3">
                <label className={FIELD}>
                  <span className={FIELD_LABEL}>Posts</span>
                  <input
                    className={CONTROL}
                    type="number"
                    min={0}
                    value={postsPerMonth}
                    onChange={(e) => setPostsPerMonth(Number(e.target.value))}
                  />
                </label>
                <label className={FIELD}>
                  <span className={FIELD_LABEL}>Stories</span>
                  <input
                    className={CONTROL}
                    type="number"
                    min={0}
                    value={storiesPerMonth}
                    onChange={(e) => setStoriesPerMonth(Number(e.target.value))}
                  />
                </label>
                <label className={FIELD}>
                  <span className={FIELD_LABEL}>Reels</span>
                  <input
                    className={CONTROL}
                    type="number"
                    min={0}
                    value={reelsPerMonth}
                    onChange={(e) => setReelsPerMonth(Number(e.target.value))}
                  />
                </label>
              </div>
            </div>

            <div className={`${CARD} md:col-span-2`}>
              <div className={CARD_TITLE}>Creator requirements</div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <label className={FIELD}>
                  <span className={FIELD_LABEL}>Creators needed</span>
                  <input
                    className={CONTROL}
                    type="number"
                    min={1}
                    value={influencerCount}
                    onChange={(e) => setInfluencerCount(Number(e.target.value))}
                  />
                </label>
                <label className={FIELD}>
                  <span className={FIELD_LABEL}>Minimum follower count</span>
                  <select
                    className={CONTROL}
                    value={followerTier}
                    onChange={(e) => setFollowerTier(e.target.value)}
                  >
                    {FOLLOWER_TIERS.map((tier) => (
                      <option key={tier.value} value={tier.value}>
                        {tier.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className={FIELD}>
                <span className={FIELD_LABEL}>Platforms</span>
                <div className="flex flex-wrap gap-2">
                  {PLATFORMS.map((p) => (
                    <button
                      type="button"
                      key={p}
                      className={`${CHIP} ${platforms.includes(p) ? CHIP_ACTIVE : ''}`}
                      onClick={() => togglePlatform(p)}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className={FIELD}>
                <span className={FIELD_LABEL}>Niche / audience</span>
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

              <label className={FIELD}>
                <span className={FIELD_LABEL}>Additional notes</span>
                <textarea
                  className={`${CONTROL} resize-y`}
                  rows={3}
                  placeholder="Anything else creators should know before applying?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </label>
            </div>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-[1.3fr_0.7fr]">
            <div className="flex flex-col gap-5">
              <div className={CARD}>
                <div className={CARD_TITLE}>Compensation</div>

                <div className={FIELD}>
                  <span className={FIELD_LABEL}>Compensation type</span>
                  <div className="flex flex-wrap gap-2">
                    {COMPENSATION_TYPES.map((c) => (
                      <button
                        type="button"
                        key={c.key}
                        className={`${TOGGLE} ${compensationType === c.key ? TOGGLE_ACTIVE : ''}`}
                        onClick={() => setCompensationType(c.key)}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {(compensationType === 'retainer' ||
                  compensationType === 'per-post' ||
                  compensationType === 'hybrid') && (
                  <label className={FIELD}>
                    <span className={FIELD_LABEL}>
                      {compensationType === 'per-post' ? 'Rate per post ($)' : 'Amount ($)'}
                    </span>
                    <input
                      className={CONTROL}
                      type="number"
                      min={0}
                      placeholder="e.g. 1500"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </label>
                )}

                {(compensationType === 'revenue' || compensationType === 'hybrid') && (
                  <label className={FIELD}>
                    <span className={FIELD_LABEL}>Revenue share (%)</span>
                    <input
                      className={CONTROL}
                      type="number"
                      min={0}
                      max={100}
                      placeholder="e.g. 5"
                      value={revenueSharePct}
                      onChange={(e) => setRevenueSharePct(e.target.value)}
                    />
                  </label>
                )}
              </div>

              <div className={CARD}>
                <div className={CARD_TITLE}>Ambassador perks</div>
                {perks.map((perk, i) => (
                  <div className="mb-2 flex items-center gap-2" key={perk.id}>
                    <input
                      className={`${CONTROL} flex-1`}
                      type="text"
                      placeholder="e.g. Complimentary meal for two, monthly"
                      value={perk.text}
                      onChange={(e) => updatePerk(perk.id, e.target.value)}
                    />
                    {perks.length > 1 && (
                      <button
                        type="button"
                        className="h-6 w-6 border-none bg-none text-base text-ink-soft"
                        onClick={() => removePerk(perk.id)}
                        aria-label={`Remove perk ${i + 1}`}
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
                <button type="button" className="py-1 text-[13px] font-semibold text-coral-ink" onClick={addPerk}>
                  + Add perk
                </button>
              </div>

              <div className={CARD}>
                <div className={CARD_TITLE}>Contract terms</div>

                <label className="flex cursor-pointer items-center gap-2 text-[13.5px] font-semibold text-ink-soft">
                  <input
                    className="h-4 w-4 accent-coral-ink"
                    type="checkbox"
                    checked={exclusive}
                    onChange={(e) => setExclusive(e.target.checked)}
                  />
                  <span>Exclusive — creator can't collab with competing brands during this term</span>
                </label>

                <label className={`${FIELD} mt-1`}>
                  <span className={FIELD_LABEL}>Notice period to end collab (days)</span>
                  <input
                    className={CONTROL}
                    type="number"
                    min={0}
                    value={noticeDays}
                    onChange={(e) => setNoticeDays(Number(e.target.value))}
                  />
                </label>
              </div>

              <div className={CARD}>
                <div className={CARD_TITLE}>Brand guidelines / moodboard</div>
                <div
                  className="cursor-pointer rounded-xl border-[1.5px] border-dashed border-line p-8 text-center transition hover:border-coral-ink hover:bg-coral/5"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="mb-1.5 text-2xl text-ink-soft">＋</div>
                  <div className="text-sm font-semibold text-ink">Upload brand assets, moodboard, or reference photos</div>
                  <div className="mt-0.5 text-xs text-ink-soft">PNG, JPG up to 10MB each</div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    hidden
                    onChange={handleImageSelect}
                  />
                </div>

                {images.length > 0 && (
                  <div className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-3">
                    {images.map((img) => (
                      <div className="relative aspect-square overflow-hidden rounded-[10px] border border-line" key={img.id}>
                        <img className="block h-full w-full object-cover" src={img.url} alt={img.name} />
                        <button
                          type="button"
                          className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full border-none bg-ink/65 text-[13px] leading-none text-paper"
                          onClick={() => removeImage(img.id)}
                          aria-label={`Remove ${img.name}`}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="sticky top-5">
              <div className={`${CARD} flex flex-col items-center`}>
                <div className={`${CARD_TITLE} self-start`}>ID card preview</div>
                <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-ink to-[#14120e] p-[22px] text-paper">
                  <span className="absolute -right-10 -top-10 h-[140px] w-[140px] rounded-full bg-coral/[0.18]" aria-hidden="true" />
                  <div className="relative mb-3.5 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-[0.08em] opacity-70">{collabLabel}</span>
                    <StampBadge tone="gold">{duration === 'ongoing' ? 'Ongoing' : duration}</StampBadge>
                  </div>
                  <div className="relative text-[19px] font-extrabold">{title || 'Untitled role'}</div>
                  <div className="relative mt-0.5 text-[13px] opacity-75">{businessName || 'Your business'}</div>
                  <div className="relative my-4 h-px bg-paper/15" />
                  <div className="relative mb-2 flex justify-between text-[12.5px]">
                    <span className="opacity-60">Deliverables / mo</span>
                    <span>
                      {postsPerMonth}p · {storiesPerMonth}s · {reelsPerMonth}r
                    </span>
                  </div>
                  <div className="relative mb-2 flex justify-between text-[12.5px]">
                    <span className="opacity-60">Compensation</span>
                    <span>
                      {compensationType === 'retainer' && (amount ? `$${amount}/mo` : 'Retainer')}
                      {compensationType === 'per-post' && (amount ? `$${amount}/post` : 'Per post')}
                      {compensationType === 'product' && 'Product & meals'}
                      {compensationType === 'revenue' && (revenueSharePct ? `${revenueSharePct}% rev share` : 'Revenue share')}
                      {compensationType === 'hybrid' && 'Hybrid'}
                    </span>
                  </div>
                  {exclusive && (
                    <div className="relative mt-2.5 inline-block rounded-full bg-coral/[0.22] px-2.5 py-[5px] text-[11px] font-bold tracking-[0.04em] text-[#f0a585]">
                      Exclusive partnership
                    </div>
                  )}
                  {perks.filter((p) => p.text.trim()).length > 0 && (
                    <ul className="relative mt-3.5 list-disc pl-[18px] text-[12.5px] opacity-85">
                      {perks
                        .filter((p) => p.text.trim())
                        .map((p) => (
                          <li className="mb-1" key={p.id}>{p.text}</li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
