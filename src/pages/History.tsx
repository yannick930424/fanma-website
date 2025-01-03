import React from 'react';
import FounderHero from '../components/history/FounderHero';
import EducationSection from '../components/history/EducationSection';
import CareerSection from '../components/history/CareerSection';

export default function History() {
  return (
    <div>
      <FounderHero />
      <EducationSection />
      <CareerSection />
    </div>
  );
}