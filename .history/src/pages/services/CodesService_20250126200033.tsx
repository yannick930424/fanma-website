import React from 'react';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceNavigation from '../../components/services/ServiceNavigation';
import ApplicableCodesSection from '../../components/services/codes/ApplicableCodesSection';
import ServicesSection from '../../components/services/codes/ServicesSection';
import ApplicationsSection from '../../components/services/codes/ApplicationsSection';
import WhyChooseSection from '../../components/services/codes/WhyChooseSection';
import VideoPlayer from '../../components/VideoPlayer';

export default function CodesService() {
  return (
    <div>
      <ServiceHero serviceKey="codes" />

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4">
          <VideoPlayer 
            src="https://fanma.ca/videos/code_norme.mp4"
            title="Expertise en codes et normes"
            loop={true}
            autoPlay={true}
          />
        </div>
      </section>

      <ApplicableCodesSection />
      <ServicesSection />
      <ApplicationsSection />
      <WhyChooseSection />
      <ServiceNavigation currentService="codes" />
    </div>
  );
}