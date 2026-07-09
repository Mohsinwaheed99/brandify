import React, { useState } from 'react';
import Button from '../../../../components/ui/Button.jsx';
import { useAuthFlow } from '../../context/AuthFlowContext.jsx';

export default function BusinessStepReview({ onBack, onSubmit }) {
  const { businessData } = useAuthFlow();
  const [agreed, setAgreed] = useState(false);

  const rows = [
    ['Brand name', businessData.brandName],
    ['Email', businessData.email],
    ['Phone', businessData.phone],
    ['Business type', businessData.businessType],
    ['Instagram', businessData.instagramConnected ? 'Connected' : 'Not connected'],
  ];

  return (
    <div>
      <div className="mb-2 border-t border-line">
        {rows.map(([label, value]) => (
          <div className="flex justify-between gap-4 border-b border-line py-3.5 text-sm" key={label}>
            <span className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.06em] text-ink-soft">{label}</span>
            <span className="text-right font-semibold">{value || '—'}</span>
          </div>
        ))}
      </div>

      <label className="my-[22px] mb-1 flex items-start gap-2.5 text-[13px] text-ink-soft">
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
        I agree to CollabHub's Terms of Service and Brand Partner Guidelines.
      </label>

      <div className="mt-8 flex items-center justify-between">
        <Button type="button" variant="ghost" onClick={onBack}>Back</Button>
        <Button type="button" variant="primary" disabled={!agreed} onClick={onSubmit}>
          Sign up
        </Button>
      </div>
    </div>
  );
}
