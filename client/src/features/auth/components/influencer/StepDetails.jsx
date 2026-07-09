import React from 'react';
import Input from '../../../../components/ui/Input.jsx';
import Button from '../../../../components/ui/Button.jsx';
import { useAuthFlow } from '../../context/AuthFlowContext.jsx';

const NICHES = [
  'Fashion & Beauty', 'Fitness & Health', 'Food & Cooking', 'Travel',
  'Tech & Gaming', 'Lifestyle', 'Finance', 'Parenting', 'Comedy', 'Other',
];

export default function InfluencerStepDetails({ onNext }) {
  const { influencerData, updateInfluencerData } = useAuthFlow();

  const handleChange = (e) =>
    updateInfluencerData({ [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <Input
          label="First name"
          name="firstName"
          placeholder="Amara"
          value={influencerData.firstName}
          onChange={handleChange}
          required
        />
        <Input
          label="Last name"
          name="lastName"
          placeholder="Diallo"
          value={influencerData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="amara@creator.com"
        value={influencerData.email}
        onChange={handleChange}
        required
      />
      <Input
        label="Phone number"
        type="tel"
        name="phone"
        placeholder="+1 (555) 000-0000"
        value={influencerData.phone}
        onChange={handleChange}
        required
      />
      <Input
        label="Niche"
        as="select"
        name="niche"
        options={NICHES}
        value={influencerData.niche}
        onChange={handleChange}
        required
      />

      <div className="mt-8 flex items-center justify-between">
        <span />
        <Button type="submit" variant="primary">Continue</Button>
      </div>
    </form>
  );
}
