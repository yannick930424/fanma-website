import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceNavigation from '../../components/services/ServiceNavigation';
import ApproachSection from '../../components/services/management/ApproachSection';
import MonitoringSection from '../../components/services/management/MonitoringSection';
import CoordinationSection from '../../components/services/management/CoordinationSection';
import SpecializationsSection from '../../components/services/management/SpecializationsSection';
import WhyChooseSection from '../../components/services/management/WhyChooseSection';

export default function ManagementService() {
  return (
    <div>
      <ServiceHero serviceKey="management" />
      <ApproachSection />
      <MonitoringSection />
      <CoordinationSection />
      <SpecializationsSection />
      <WhyChooseSection />
      <ServiceNavigation currentService="management" />
    </div>
  );
}