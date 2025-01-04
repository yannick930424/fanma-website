import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceNavigation from '../../components/services/ServiceNavigation';
import ExpertiseSection from '../../components/services/mechanical/ExpertiseSection';
import IndustriesSection from '../../components/services/mechanical/IndustriesSection';
import ProcessSection from '../../components/services/mechanical/ProcessSection';
import WhyChooseSection from '../../components/services/mechanical/WhyChooseSection';
import CFDSection from '../../components/services/mechanical/CFDSection';

export default function MechanicalService() {
  return (
    <div>
      <ServiceHero serviceKey="mechanical" />
      <ExpertiseSection />
      <CFDSection />
      <IndustriesSection />
      <ProcessSection />
      <WhyChooseSection />
      <ServiceNavigation currentService="mechanical" />
    </div>
  );
}