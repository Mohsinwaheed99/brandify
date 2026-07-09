import React from 'react';
import { MegaphoneIcon, HandshakeIcon } from '../../../components/ui/Icons.jsx';

/**
 * Tab-style role picker shown as the first screen of sign up.
 * Selecting a tab commits the role and advances the parent wizard to step 1.
 */
export default function RoleSelect({ onSelect }) {
  return (
    <div>
      <p className="eyebrow">Step 0 of 3</p>
      <h1 className="mb-2 text-[28px]">Who's signing up?</h1>
      <p className="mb-7 text-sm text-ink-soft">Choose the tab that fits — you can't switch later without starting over.</p>

      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2" role="tablist">
        <button
          type="button"
          role="tab"
          className="flex flex-col items-start gap-2.5 rounded-md border-[1.5px] border-line bg-paper p-6 text-left text-coral-ink transition duration-150 ease-out hover:-translate-y-0.5 hover:border-coral-ink hover:shadow-card"
          onClick={() => onSelect('influencer')}
        >
          <HandshakeIcon width={28} height={28} />
          <strong className="font-display text-lg uppercase">Influencer</strong>
          <span className="text-[13px] leading-[1.4] text-ink-soft">I create content and want brand deals</span>
        </button>

        <button
          type="button"
          role="tab"
          className="flex flex-col items-start gap-2.5 rounded-md border-[1.5px] border-line bg-paper p-6 text-left text-teal transition duration-150 ease-out hover:-translate-y-0.5 hover:border-teal hover:shadow-card"
          onClick={() => onSelect('business')}
        >
          <MegaphoneIcon width={28} height={28} />
          <strong className="font-display text-lg uppercase">Business owner</strong>
          <span className="text-[13px] leading-[1.4] text-ink-soft">I run a brand and want to work with creators</span>
        </button>
      </div>
    </div>
  );
}
