
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { AppraisalBoard } from './pages/AppraisalBoard';
import { AICopilot } from './pages/AICopilot';
import { PolicySimulation } from './pages/PolicySimulation';
import { OCRIntake } from './pages/OCRIntake';
import { SemanticSearch } from './pages/SemanticSearch';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ai-copilot" element={<AICopilot />} />
          <Route path="ocr-intake" element={<OCRIntake />} />
          <Route path="appraisal-board" element={<AppraisalBoard />} />
          <Route path="policy-simulation" element={<PolicySimulation />} />
          <Route path="semantic-search" element={<SemanticSearch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
