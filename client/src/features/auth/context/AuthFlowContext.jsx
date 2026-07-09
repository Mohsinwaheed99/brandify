import React, { createContext, useContext, useState, useMemo } from 'react';

const AuthFlowContext = createContext(null);

const initialInfluencerData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  niche: '',
  instagramConnected: false,
};

const initialBusinessData = {
  brandName: '',
  email: '',
  phone: '',
  businessType: '',
  instagramConnected: false,
};

/**
 * Wrap the /signup route tree with this provider so every step
 * (details -> connect -> review) can read and update the same
 * in-progress application without prop-drilling.
 */
export function AuthFlowProvider({ children }) {
  const [role, setRole] = useState(null); // 'influencer' | 'business'
  const [influencerData, setInfluencerData] = useState(initialInfluencerData);
  const [businessData, setBusinessData] = useState(initialBusinessData);

  const updateInfluencerData = (patch) =>
    setInfluencerData((prev) => ({ ...prev, ...patch }));

  const updateBusinessData = (patch) =>
    setBusinessData((prev) => ({ ...prev, ...patch }));

  const resetFlow = () => {
    setRole(null);
    setInfluencerData(initialInfluencerData);
    setBusinessData(initialBusinessData);
  };

  const value = useMemo(
    () => ({
      role,
      setRole,
      influencerData,
      updateInfluencerData,
      businessData,
      updateBusinessData,
      resetFlow,
    }),
    [role, influencerData, businessData]
  );

  return (
    <AuthFlowContext.Provider value={value}>{children}</AuthFlowContext.Provider>
  );
}

export function useAuthFlow() {
  const ctx = useContext(AuthFlowContext);
  if (!ctx) throw new Error('useAuthFlow must be used inside AuthFlowProvider');
  return ctx;
}
