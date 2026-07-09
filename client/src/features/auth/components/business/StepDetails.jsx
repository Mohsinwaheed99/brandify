import React from 'react';
import Input from '../../../../components/ui/Input.jsx';
import Button from '../../../../components/ui/Button.jsx';
import { useAuthFlow } from '../../context/AuthFlowContext.jsx';

const BUSINESS_TYPES = [
  'DTC / E-commerce', 'Restaurant / Local business', 'SaaS / Tech',
  'Beauty & Wellness', 'Fashion & Apparel', 'Agency', 'Other',
];

export default function BusinessStepDetails({ onNext }) {
  const { businessData, updateBusinessData } = useAuthFlow();

  const handleChange = (e) =>
    updateBusinessData({ [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit}>
      <Input
        label="Brand name"
        name="brandName"
        placeholder="Nova Skincare Co."
        value={businessData.brandName}
        onChange={handleChange}
        required
      />
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="hello@novaskincare.com"
        value={businessData.email}
        onChange={handleChange}
        required
      />
      <Input
        label="Phone number"
        type="tel"
        name="phone"
        placeholder="+1 (555) 000-0000"
        value={businessData.phone}
        onChange={handleChange}
        required
      />
      <Input
        label="Business type"
        as="select"
        name="businessType"
        options={BUSINESS_TYPES}
        value={businessData.businessType}
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
