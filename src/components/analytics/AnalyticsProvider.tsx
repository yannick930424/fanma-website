import React, { useEffect } from 'react';
import { initGA4, initGTM, initGoogleAds } from '../../services/analytics';

export default function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize all analytics services
    initGTM();
    initGA4();
    initGoogleAds();
  }, []);

  return <>{children}</>;
}