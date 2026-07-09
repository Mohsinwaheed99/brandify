import React from 'react';
import Button from '../../../components/ui/Button.jsx';
import { InstagramIcon, CheckCircleIcon } from '../../../components/ui/Icons.jsx';
import { useAuthFlow } from '../context/AuthFlowContext.jsx';

/**
 * UI-only Instagram connect step, shared by both the influencer and
 * business signup flows (role determines which piece of context state
 * gets the `instagramConnected` flag).
 */
export default function ConnectInstagramStep({ role, onNext, onBack }) {
  const { influencerData, updateInfluencerData, businessData, updateBusinessData } =
    useAuthFlow();

  const connected =
    role === 'influencer' ? influencerData.instagramConnected : businessData.instagramConnected;

  const setConnected = (val) =>
    role === 'influencer'
      ? updateInfluencerData({ instagramConnected: val })
      : updateBusinessData({ instagramConnected: val });

  return (
    <div>
      <div className="pb-2 pt-6 text-center">
        <div className="mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-gradient-to-br from-coral to-gold text-paper">
          <InstagramIcon width={34} height={34} />
        </div>
        <h2 className="mb-2 text-[22px]">Connect Instagram</h2>
        <p className="mx-auto mb-7 max-w-[340px] text-sm text-ink-soft">
          Link your Instagram so {role === 'influencer' ? 'brands can see your audience' : 'you can share your storefront'}.
          This is a placeholder connection for now — no real account is linked.
        </p>

        {connected ? (
          <div className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-success">
            <CheckCircleIcon width={18} height={18} /> Instagram connected
          </div>
        ) : (
          <Button type="button" variant="primary" onClick={() => setConnected(true)}>
            <InstagramIcon width={16} height={16} /> Connect Instagram
          </Button>
        )}

        <div>
          <button
            type="button"
            className="mt-3 border-none bg-none text-[13px] text-ink-soft underline"
            onClick={onNext}
          >
            {connected ? 'Continue' : "I'll do this later"}
          </button>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <Button type="button" variant="ghost" onClick={onBack}>Back</Button>
        <Button type="button" variant="primary" onClick={onNext}>Continue</Button>
      </div>
    </div>
  );
}
