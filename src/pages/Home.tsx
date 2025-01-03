import React from 'react';
import VideoHero from '../components/VideoHero';
import ServicesSection from '../components/services/ServicesSection';
import AboutPreview from '../components/home/AboutPreview';

export default function Home() {
  return (
    <div>
      <VideoHero />
      <ServicesSection />
      <AboutPreview />
    </div>
  );
}