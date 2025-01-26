import React from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../../i18n/translations';

export default function IndustriesSection() {
  const { language } = useLanguage();
  const t = translations[language].services.mechanical.industries;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{t.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {t.sectors.map(sector => (
            <div key={sector.title} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">{sector.title}</h3>
              <p className="text-gray-700">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}