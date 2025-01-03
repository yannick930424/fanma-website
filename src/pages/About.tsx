import React from 'react';
import AboutHero from '../components/about/AboutHero';
import VisionSection from '../components/about/VisionSection';
import ValuesSection from '../components/about/ValuesSection';
import WhyChooseSection from '../components/about/WhyChooseSection';
import MissionSection from '../components/about/MissionSection';

export default function About() {
  return (
    <div>
      <AboutHero />
      <VisionSection />
      <ValuesSection />
      <WhyChooseSection />
      <MissionSection />
    </div>
  );
}