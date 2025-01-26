import React from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../../i18n/translations';

export default function ExpertiseSection() {
  const { language } = useLanguage();
  const t = translations[language].services.mechanical.expertise;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{t.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-600">{t.systems.title}</h3>
            <ul className="space-y-4 text-gray-700">
              {t.systems.items.map(item => (
                <li key={item.title} className="flex items-start">
                  <span className="font-semibold mr-2">{item.title}:</span>
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t.prototyping.title}</h3>
              <ul className="space-y-2 text-gray-700">
                {t.prototyping.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}