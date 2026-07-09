import React from 'react';

const MARKER_STATE_CLASSES = {
  pending: 'border-line bg-paper-raised text-ink-soft',
  active: 'border-coral-ink bg-paper text-coral-ink',
  done: 'border-teal bg-teal text-paper',
};

const LABEL_STATE_CLASSES = {
  pending: 'text-ink-soft',
  active: 'text-ink',
  done: 'text-ink',
};

/**
 * steps: [{ label: 'Details' }, { label: 'Connect' }, { label: 'Review' }]
 * currentStep: 1-indexed
 */
export default function StepIndicator({ steps, currentStep }) {
  return (
    <ol className="mb-10 flex list-none items-center p-0" aria-label="Sign up progress">
      {steps.map((step, i) => {
        const stepNum = i + 1;
        const state =
          stepNum < currentStep ? 'done' : stepNum === currentStep ? 'active' : 'pending';
        const isLast = stepNum === steps.length;
        return (
          <li
            key={step.label}
            className={`flex items-center gap-2.5 ${isLast ? 'flex-none' : 'flex-1'}`}
          >
            <span
              className={`flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full border-[1.5px] font-mono text-xs ${MARKER_STATE_CLASSES[state]}`}
            >
              {state === 'done' ? '✓' : String(stepNum).padStart(2, '0')}
            </span>
            <span
              className={`whitespace-nowrap font-mono text-xs uppercase tracking-[0.06em] ${LABEL_STATE_CLASSES[state]}`}
            >
              {step.label}
            </span>
            {!isLast && (
              <span
                aria-hidden="true"
                className={`mr-2.5 h-[1.5px] flex-1 ${state === 'done' ? 'bg-teal' : 'bg-line'}`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
