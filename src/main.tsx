
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { AppraisalBoard } from './pages/AppraisalBoard';
import { AICopilot } from './pages/AICopilot';
import { PolicySimulation } from './pages/PolicySimulation';
import { OCRIntake } from './pages/OCRIntake';
import { SemanticSearch } from './pages/SemanticSearch';
import Profile from './pages/Profile';
import './i18n';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ai-copilot" element={<AICopilot />} />
          <Route path="ocr-intake" element={<OCRIntake />} />
          <Route path="appraisal-board" element={<AppraisalBoard />} />
          <Route path="policy-simulation" element={<PolicySimulation />} />
          <Route path="semantic-search" element={<SemanticSearch />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
