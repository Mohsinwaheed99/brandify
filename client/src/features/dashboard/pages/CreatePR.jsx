import React, { useRef, useState } from 'react';
import Topbar from '../components/Topbar.jsx';
import StampBadge from '../../../components/ui/StampBadge.jsx';

const PR_TYPES = [
  { key: 'menu', label: 'New Menu' },
  { key: 'outlet', label: 'New Outlet' },
  { key: 'event', label: 'Press Event' },
  { key: 'collab', label: 'Collaboration' },
];

const PLATFORMS = ['Instagram', 'TikTok', 'YouTube', 'X / Twitter'];

const FOLLOWER_TIERS = [
  { value: '1000', label: '1k+ followers' },
  { value: '5000', label: '5k+ followers' },
  { value: '10000', label: '10k+ followers' },
  { value: '50000', label: '50k+ followers' },
  { value: '100000', label: '100k+ followers' },
];

const COVERAGE_TYPES = ['Instagram Post', 'Instagram Story', 'Reel', 'Blog Review', 'YouTube Video'];

const COMPENSATION_TYPES = ['Complimentary meal', 'Paid', 'Paid + Meal', 'Gifted'];

const INVITE_TEMPLATES = [
  { key: 'coral', name: 'Coral Bloom', tone: 'coral' },
  { key: 'gold', name: 'Golden Hour', tone: 'gold' },
  { key: 'teal', name: 'Teal Wave', tone: 'teal' },
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

export default function CreatePR() {
  const [activeTab, setActiveTab] = useState('details');
  const fileInputRef = useRef(null);

  // PR details state
  const [title, setTitle] = useState('');
  const [prType, setPrType] = useState('menu');
  const [purpose, setPurpose] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  const [validFrom, setValidFrom] = useState('');
  const [validTo, setValidTo] = useState('');
  const [influencerCount, setInfluencerCount] = useState(5);
  const [followerTier, setFollowerTier] = useState('5000');
  const [platforms, setPlatforms] = useState(['Instagram']);
  const [coverageTypes, setCoverageTypes] = useState(['Instagram Post']);
  const [compensationType, setCompensationType] = useState('Complimentary meal');
  const [perCreatorBudget, setPerCreatorBudget] = useState('');
  const [notes, setNotes] = useState('');
  const [images, setImages] = useState([]); // { id, name, url }

  // Invite pass state
  const [template, setTemplate] = useState('coral');
  const [inviteVenue, setInviteVenue] = useState('');
  const [inviteTime, setInviteTime] = useState('');
  const [rsvpNote, setRsvpNote] = useState('Kindly confirm your attendance by replying to this invite.');
  const [perks, setPerks] = useState([emptyPerk(), emptyPerk()]);
  const [inviteCreated, setInviteCreated] = useState(false);

  const togglePlatform = (p) => {
    setPlatforms((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));
  };

  const toggleCoverage = (c) => {
    setCoverageTypes((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
  };

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

  const updatePerk = (id, text) =>
    setPerks((prev) => prev.map((p) => (p.id === id ? { ...p, text } : p)));

  const addPerk = () => setPerks((prev) => [...prev, emptyPerk()]);

  const removePerk = (id) => setPerks((prev) => prev.filter((p) => p.id !== id));

  const handleCreateInvite = () => {
    setInviteCreated(true);
  };

  const handlePublish = () => {
    // Wire this up to your create-PR API call.
    console.log('Publishing PR', {
      title,
      prType,
      purpose,
      businessName,
      location,
      budget,
      validFrom,
      validTo,
      influencerCount,
      followerTier,
      platforms,
      coverageTypes,
      compensationType,
      perCreatorBudget,
      notes,
      images,
      invite: { template, inviteVenue, inviteTime, rsvpNote, perks },
    });
  };

  const selectedTemplate = INVITE_TEMPLATES.find((t) => t.key === template);
  const templateGradient = {
    coral: 'from-white to-[#fdece3] border-[#f3c9b6]',
    gold: 'from-white to-[#faf1dc] border-[#ecd9a3]',
    teal: 'from-white to-[#e2f3ef] border-[#a9dccf]',
  }[selectedTemplate?.tone || 'coral'];
  const templateTextColor = {
    coral: 'text-coral-ink',
    gold: 'text-gold',
    teal: 'text-teal',
  };

  return (
    <>
      <Topbar
        title="Create PR"
        subtitle="Invite creators to cover your next press moment"
        action={{ label: 'Publish PR', onClick: handlePublish }}
      />
      <div className="dashboard-page">
        <div className="mb-5 flex gap-1 border-b border-line">
          <button
            type="button"
            className={`${TAB} ${activeTab === 'details' ? TAB_ACTIVE : ''}`}
            onClick={() => setActiveTab('details')}
          >
            PR details
          </button>
          <button
            type="button"
            className={`${TAB} ${activeTab === 'pass' ? TAB_ACTIVE : ''}`}
            onClick={() => setActiveTab('pass')}
          >
            Invite pass
          </button>
        </div>

        {activeTab === 'details' && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className={CARD}>
              <div className={CARD_TITLE}>Basics</div>

              <label className={FIELD}>
                <span className={FIELD_LABEL}>PR title</span>
                <input
                  className={CONTROL}
                  type="text"
                  placeholder="e.g. Summer Tasting Menu Launch"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>

              <div className={FIELD}>
                <span className={FIELD_LABEL}>PR type</span>
                <div className="flex flex-wrap gap-2">
                  {PR_TYPES.map((t) => (
                    <button
                      type="button"
                      key={t.key}
                      className={`${TOGGLE} ${prType === t.key ? TOGGLE_ACTIVE : ''}`}
                      onClick={() => setPrType(t.key)}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <label className={FIELD}>
                <span className={FIELD_LABEL}>Purpose</span>
                <textarea
                  className={`${CONTROL} resize-y`}
                  placeholder="What's this PR moment about? What should creators know?"
                  rows={4}
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                />
              </label>

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
                  <span className={FIELD_LABEL}>Location / address</span>
                  <input
                    className={CONTROL}
                    type="text"
                    placeholder="e.g. 245 Main St, Austin, TX"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <label className={FIELD}>
                  <span className={FIELD_LABEL}>Valid from</span>
                  <input
                    className={CONTROL}
                    type="date"
                    value={validFrom}
                    onChange={(e) => setValidFrom(e.target.value)}
                  />
                </label>
                <label className={FIELD}>
                  <span className={FIELD_LABEL}>Valid until</span>
                  <input
                    className={CONTROL}
                    type="date"
                    value={validTo}
                    onChange={(e) => setValidTo(e.target.value)}
                  />
                </label>
              </div>

              <label className={FIELD}>
                <span className={FIELD_LABEL}>Total PR budget ($)</span>
                <input
                  className={CONTROL}
                  type="number"
                  min={0}
                  placeholder="e.g. 2000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </label>
            </div>

            <div className={CARD}>
              <div className={CARD_TITLE}>Creator requirements</div>

              <label className={FIELD}>
                <span className={FIELD_LABEL}>Number of influencers needed</span>
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
                <span className={FIELD_LABEL}>Coverage expected</span>
                <div className="flex flex-wrap gap-2">
                  {COVERAGE_TYPES.map((c) => (
                    <button
                      type="button"
                      key={c}
                      className={`${CHIP} ${coverageTypes.includes(c) ? CHIP_ACTIVE : ''}`}
                      onClick={() => toggleCoverage(c)}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <label className={FIELD}>
                  <span className={FIELD_LABEL}>Compensation type</span>
                  <select
                    className={CONTROL}
                    value={compensationType}
                    onChange={(e) => setCompensationType(e.target.value)}
                  >
                    {COMPENSATION_TYPES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
                {(compensationType === 'Paid' || compensationType === 'Paid + Meal') && (
                  <label className={FIELD}>
                    <span className={FIELD_LABEL}>Budget per creator ($)</span>
                    <input
                      className={CONTROL}
                      type="number"
                      min={0}
                      placeholder="e.g. 150"
                      value={perCreatorBudget}
                      onChange={(e) => setPerCreatorBudget(e.target.value)}
                    />
                  </label>
                )}
              </div>

              <label className={FIELD}>
                <span className={FIELD_LABEL}>Additional notes / requirements</span>
                <textarea
                  className={`${CONTROL} resize-y`}
                  placeholder="Anything else creators should know before applying?"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </label>
            </div>

            <div className={`${CARD} md:col-span-2`}>
              <div className={CARD_TITLE}>Menu / venue photos</div>
              <div
                className="cursor-pointer rounded-xl border-[1.5px] border-dashed border-line p-8 text-center transition hover:border-coral-ink hover:bg-coral/5"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="mb-1.5 text-2xl text-ink-soft">＋</div>
                <div className="text-sm font-semibold text-ink">Click to upload dish, menu, or venue photos</div>
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
        )}

        {activeTab === 'pass' && (
          <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-[1.1fr_0.9fr]">
            <div className={CARD}>
              <div className={CARD_TITLE}>Choose a template</div>
              <div className="mb-2 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {INVITE_TEMPLATES.map((t) => (
                  <button
                    type="button"
                    key={t.key}
                    className={`flex flex-col items-center gap-2 rounded-xl border-[1.5px] border-line bg-paper-raised px-2.5 py-3.5 text-[13px] font-semibold transition ${
                      templateTextColor[t.tone]
                    } ${template === t.key ? 'border-current ring-[3px] ring-coral-ink/10' : ''}`}
                    onClick={() => setTemplate(t.key)}
                  >
                    <span>{t.name}</span>
                    {template === t.key && <StampBadge tone={t.tone}>Selected</StampBadge>}
                  </button>
                ))}
              </div>

              <div className={`${CARD_TITLE} mt-6`}>Invite details</div>

              <label className={FIELD}>
                <span className={FIELD_LABEL}>Event / feature name</span>
                <input
                  className={CONTROL}
                  type="text"
                  placeholder={title || 'e.g. Summer Tasting Menu Launch'}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <label className={FIELD}>
                  <span className={FIELD_LABEL}>Date</span>
                  <input
                    className={CONTROL}
                    type="date"
                    value={validFrom}
                    onChange={(e) => setValidFrom(e.target.value)}
                  />
                </label>
                <label className={FIELD}>
                  <span className={FIELD_LABEL}>Time</span>
                  <input
                    className={CONTROL}
                    type="time"
                    value={inviteTime}
                    onChange={(e) => setInviteTime(e.target.value)}
                  />
                </label>
              </div>

              <label className={FIELD}>
                <span className={FIELD_LABEL}>Venue</span>
                <input
                  className={CONTROL}
                  type="text"
                  placeholder={location || 'e.g. 245 Main St, Austin, TX'}
                  value={inviteVenue}
                  onChange={(e) => setInviteVenue(e.target.value)}
                />
              </label>

              <div className={FIELD}>
                <span className={FIELD_LABEL}>Perks & highlights</span>
                {perks.map((perk, i) => (
                  <div className="mb-2 flex items-center gap-2" key={perk.id}>
                    <input
                      className={`${CONTROL} flex-1`}
                      type="text"
                      placeholder="e.g. Complimentary tasting menu for two"
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

              <label className={FIELD}>
                <span className={FIELD_LABEL}>RSVP note</span>
                <textarea
                  className={`${CONTROL} resize-y`}
                  rows={2}
                  value={rsvpNote}
                  onChange={(e) => setRsvpNote(e.target.value)}
                />
              </label>

              <button
                type="button"
                className="mt-2 w-full rounded-[9px] border-none bg-ink py-[11px] text-sm font-bold text-paper transition hover:opacity-90"
                onClick={handleCreateInvite}
              >
                {inviteCreated ? 'Invite updated ✓' : 'Create invite'}
              </button>
            </div>

            <div className={`${CARD} sticky top-5 flex flex-col items-center`}>
              <div className={`${CARD_TITLE} self-start`}>Preview</div>
              <div className={`w-full rounded-[14px] border bg-gradient-to-br px-[22px] py-[26px] text-ink ${templateGradient}`}>
                <div className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.08em] opacity-65">You're invited</div>
                <div className="mb-3.5 text-xl font-extrabold">{title || businessName || 'Your PR feature'}</div>
                <div className="mb-1.5 flex items-center gap-2 text-[13.5px] opacity-85">
                  <span>📍</span>
                  <span>{inviteVenue || location || 'Venue to be announced'}</span>
                </div>
                <div className="mb-1.5 flex items-center gap-2 text-[13.5px] opacity-85">
                  <span>🗓️</span>
                  <span>
                    {validFrom || 'Date TBA'}
                    {inviteTime ? ` · ${inviteTime}` : ''}
                  </span>
                </div>
                {perks.filter((p) => p.text.trim()).length > 0 && (
                  <ul className="mt-3.5 list-disc pl-[18px] text-[13px]">
                    {perks
                      .filter((p) => p.text.trim())
                      .map((p) => (
                        <li className="mb-1" key={p.id}>{p.text}</li>
                      ))}
                  </ul>
                )}
                <div className="mt-4 border-t border-dashed border-ink/20 pt-3.5 text-[12.5px] italic opacity-75">{rsvpNote}</div>
              </div>
              {inviteCreated && (
                <div className="mt-4 flex w-full items-center gap-2.5">
                  <StampBadge tone={selectedTemplate?.tone || 'coral'}>Ready to send</StampBadge>
                  <span className="text-[12.5px] text-ink-soft">
                    Creators can now apply once the PR is published.
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
