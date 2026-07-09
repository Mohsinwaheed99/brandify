import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button.jsx';
import StepIndicator from '../../../components/ui/StepIndicator.jsx';
import RoleSelect from '../components/RoleSelect.jsx';
import ConnectInstagramStep from '../components/ConnectInstagramStep.jsx';
import InfluencerStepDetails from '../components/influencer/StepDetails.jsx';
import InfluencerStepReview from '../components/influencer/StepReview.jsx';
import BusinessStepDetails from '../components/business/StepDetails.jsx';
import BusinessStepReview from '../components/business/StepReview.jsx';
import { useAuthFlow } from '../context/AuthFlowContext.jsx';

const STEP_LABELS = [{ label: 'Details' }, { label: 'Connect' }, { label: 'Review' }];

export default function SignUp() {
  const navigate = useNavigate();
  const { role, setRole } = useAuthFlow();
  const [step, setStep] = useState(1);

  const handleRoleSelect = (chosenRole) => {
    setRole(chosenRole);
    setStep(1);
  };

  const goNext = () => setStep((s) => Math.min(s + 1, 3));
  const goBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    // UI-only for now — wire up to real signup API later.
    navigate(role === 'business' ? '/dashboard' : '/feed');
  };

  const isBusiness = role === 'business';

  return (
    <div className="flex min-h-full flex-col">
      <div className="flex items-center justify-between px-8 py-7">
        <Link to="/" className="font-display text-[22px] uppercase">
          Collab<span className="text-coral">Hub</span>
        </Link>
        <Button as={Link} to="/login" variant="ghost">Already have an account?</Button>
      </div>

      <div className="flex flex-1 items-start justify-center px-6 pb-20 pt-6">
        <div
          className={`w-full rounded-lg border border-line bg-paper-raised px-5 py-7 shadow-card sm:p-10 ${
            role ? 'max-w-[640px]' : 'max-w-[460px]'
          }`}
        >
          {!role && <RoleSelect onSelect={handleRoleSelect} />}

          {role && (
            <>
              <p className="eyebrow">{isBusiness ? 'Business owner sign up' : 'Influencer sign up'}</p>
              <h1 className="mb-2 text-[28px]">
                {step === 1 && 'Tell us about you'}
                {step === 2 && 'Connect Instagram'}
                {step === 3 && 'Review & confirm'}
              </h1>
              <p className="mb-7 text-sm text-ink-soft">
                {step === 1 && (isBusiness ? 'Basic info about your brand.' : 'Basic info about you as a creator.')}
                {step === 2 && 'Optional for now — you can always do this later.'}
                {step === 3 && 'Double check everything before you sign up.'}
              </p>

              <StepIndicator steps={STEP_LABELS} currentStep={step} />

              {step === 1 && !isBusiness && <InfluencerStepDetails onNext={goNext} />}
              {step === 1 && isBusiness && <BusinessStepDetails onNext={goNext} />}

              {step === 2 && (
                <ConnectInstagramStep role={role} onNext={goNext} onBack={goBack} />
              )}

              {step === 3 && !isBusiness && (
                <InfluencerStepReview onBack={goBack} onSubmit={handleSubmit} />
              )}
              {step === 3 && isBusiness && (
                <BusinessStepReview onBack={goBack} onSubmit={handleSubmit} />
              )}
            </>
          )}

          {!role && (
            <p className="mt-6 text-center text-sm text-ink-soft">
              Already have an account? <Link className="font-semibold text-coral-ink" to="/login">Log in</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
