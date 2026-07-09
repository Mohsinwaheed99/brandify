import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button.jsx';
import StampBadge from '../../../components/ui/StampBadge.jsx';
import { ArrowRightIcon } from '../../../components/ui/Icons.jsx';

export default function Hero() {
  return (
    <section className="px-0 pb-16 pt-[88px] text-center">
      <div className="container">
        <p className="eyebrow">Brand × Creator agreements, made simple</p>
        <h1 className="mb-[22px] mt-[18px] text-[clamp(40px,6vw,76px)] leading-[0.98]">
          Every great collab
          <br />
          starts with two signatures
        </h1>
        <p className="mx-auto max-w-[560px] text-[17px] leading-[1.55] text-ink-soft">
          CollabHub is where business owners find creators worth backing, and
          creators find brands worth repping — from first message to signed deal.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <Button as={Link} to="/signup" variant="primary">
            Get started <ArrowRightIcon width={16} height={16} />
          </Button>
          <Button as={Link} to="/login" variant="secondary">
            I already have an account
          </Button>
        </div>

        <div
          className="mx-auto mt-[72px] grid max-w-[720px] items-center gap-6 md:grid-cols-[1fr_auto_1fr]"
          aria-hidden="true"
        >
          <div className="flex flex-col gap-2 rounded-lg border-[1.5px] border-line bg-paper-raised p-6 text-left md:-rotate-[1.5deg]">
            <span className="eyebrow">Party A</span>
            <strong className="font-display text-[22px] uppercase">Business owner</strong>
            <span className="mb-0.5 mt-2.5 h-[1.5px] bg-line" />
            <span className="font-display text-xl italic text-teal">signed</span>
          </div>

          <div className="flex justify-center">
            <StampBadge tone="coral">Deal matched</StampBadge>
          </div>

          <div className="flex flex-col gap-2 rounded-lg border-[1.5px] border-line bg-paper-raised p-6 text-left md:rotate-[1.5deg]">
            <span className="eyebrow">Party B</span>
            <strong className="font-display text-[22px] uppercase">Influencer</strong>
            <span className="mb-0.5 mt-2.5 h-[1.5px] bg-line" />
            <span className="font-display text-xl italic text-teal">signed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
