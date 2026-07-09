import React from 'react';

const businessSteps = [
  ['01', 'Post what you need', 'Launch a brief for a product drop, PR push, or one-off collab.'],
  ['02', 'Review matches', 'See creators sorted by niche, reach, and past collab history.'],
  ['03', 'Sign & pay', 'Lock in terms and deliverables in one place — no email chains.'],
];

const creatorSteps = [
  ['01', 'Build your profile', 'Add your niche and connect Instagram so brands see your work.'],
  ['02', 'Get discovered', 'Brands reach out with briefs that fit your audience.'],
  ['03', 'Collab & get paid', 'Accept terms, deliver content, get paid on schedule.'],
];

const TRACK_BORDER_CLASSES = {
  teal: 'border-t-teal',
  coral: 'border-t-coral',
};

function Track({ title, steps, tone }) {
  return (
    <div className={`rounded-lg border border-line border-t-4 bg-paper-raised p-8 ${TRACK_BORDER_CLASSES[tone]}`}>
      <h3 className="mb-6 text-xl">{title}</h3>
      {steps.map(([num, title2, body], i) => (
        <div className={`flex gap-4 py-4 ${i === 0 ? '' : 'border-t border-line'}`} key={num}>
          <span className="pt-0.5 font-mono text-[13px] text-ink-soft">{num}</span>
          <div>
            <strong className="mb-1 block text-[15px]">{title2}</strong>
            <p className="text-sm leading-[1.5] text-ink-soft">{body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="px-0 pb-10 pt-16" id="how-it-works">
      <div className="relative h-0 border-t-2 border-dashed border-line" aria-hidden="true">
        <span className="absolute -left-2.5 -top-2.5 h-5 w-5 rounded-full border-2 border-line bg-paper" />
        <span className="absolute -right-2.5 -top-2.5 h-5 w-5 rounded-full border-2 border-line bg-paper" />
      </div>
      <div className="container pt-14 text-center">
        <p className="eyebrow">How it works</p>
        <h2 className="my-[14px] mb-12 text-[clamp(32px,4vw,48px)]">Two sides, one deal</h2>
        <div className="grid gap-8 text-left md:grid-cols-2">
          <Track title="For business owners" steps={businessSteps} tone="teal" />
          <Track title="For influencers" steps={creatorSteps} tone="coral" />
        </div>
      </div>
    </section>
  );
}
