import React from 'react';
import { Plane, Factory } from 'lucide-react';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../../i18n/translations';

export default function SpecializationsSection() {
  const { language } = useLanguage();
  const t = translations[language].services.management.specializations;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{t.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Plane className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-600">
                {t.sectors.aerospace.title}
              </h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              {t.sectors.aerospace.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Factory className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-600">
                {t.sectors.industrial.title}
              </h3>
            </div>
            <p className="text-gray-700">
              {t.sectors.industrial.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}