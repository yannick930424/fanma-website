import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AnalyticsProvider from './components/analytics/AnalyticsProvider';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import History from './pages/History';
import Services from './pages/Services';
import CodesService from './pages/services/CodesService';
import ManagementService from './pages/services/ManagementService';
import MechanicalService from './pages/services/MechanicalService';

function App() {
  return (
    <AnalyticsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="history" element={<History />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="services/codes" element={<CodesService />} />
            <Route path="services/management" element={<ManagementService />} />
            <Route path="services/mechanical" element={<MechanicalService />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AnalyticsProvider>
  );
}

export default App;