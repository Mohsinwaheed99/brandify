import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthFlowProvider } from '../features/auth/context/AuthFlowContext.jsx';

import HomePage from '../features/home/HomePage.jsx';
import Login from '../features/auth/pages/Login.jsx';
import SignUp from '../features/auth/pages/SignUp.jsx';

import DashboardLayout from '../features/dashboard/components/DashboardLayout.jsx';
import Overview from '../features/dashboard/pages/Overview.jsx';
import Launch from '../features/dashboard/pages/Launch.jsx';
import PR from '../features/dashboard/pages/PR.jsx';
import Collab from '../features/dashboard/pages/Collab.jsx';
import Deals from '../features/dashboard/pages/Deals.jsx';
import CreateLaunch from '../features/dashboard/pages/CreateLaunch.jsx';
import CreatePR from '../features/dashboard/pages/CreatePR.jsx';
import CreateCollab from '../features/dashboard/pages/CreateCollab.jsx';

import InfluencerFeedLayout from '../features/influencer-feed/components/InfluencerFeedLayout.jsx';
import InfluencerLaunches from '../features/influencer-feed/pages/Launches.jsx';
import InfluencerPR from '../features/influencer-feed/pages/PRs.jsx';
import InfluencerCollabs from '../features/influencer-feed/pages/Collabs.jsx';
import InfluencerDeals from '../features/influencer-feed/pages/Deals.jsx';
import InfluencerProfile from '../features/influencer-feed/pages/Profile.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/signup"
        element={
          <AuthFlowProvider>
            <SignUp />
          </AuthFlowProvider>
        }
      />

      {/* Influencer feed */}
      <Route path="/feed" element={<InfluencerFeedLayout />}>
        <Route index element={<Navigate to="launch" replace />} />
        <Route path="launch" element={<InfluencerLaunches />} />
        <Route path="pr" element={<InfluencerPR />} />
        <Route path="collab" element={<InfluencerCollabs />} />
        <Route path="deals" element={<InfluencerDeals />} />
        <Route path="profile" element={<InfluencerProfile />} />
      </Route>

      {/* Business owner dashboard */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="launch" element={<Launch />} />
        <Route path="pr" element={<PR />} />
        <Route path="collab" element={<Collab />} />
        <Route path="deals" element={<Deals />} />
        <Route path="create-launch" element={<CreateLaunch />} />
        <Route path="create-pr" element={<CreatePR />} />
        <Route path="create-collab" element={<CreateCollab />} />
      </Route>
    </Routes>
  );
}
