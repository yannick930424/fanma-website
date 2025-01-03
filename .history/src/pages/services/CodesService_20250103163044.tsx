import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceNavigation from '../../components/services/ServiceNavigation';
import ApplicableCodesSection from '../../components/services/codes/ApplicableCodesSection';
import ServicesSection from '../../components/services/codes/ServicesSection';
import ApplicationsSection from '../../components/services/codes/ApplicationsSection';

export default function CodesService() {
  return (
    <div>
      <ServiceHero serviceKey="codes" />
      <ApplicableCodesSection />
      <ServicesSection />
      <ApplicationsSection />
      <ServiceNavigation currentService="codes" />
    </div>
  );
}