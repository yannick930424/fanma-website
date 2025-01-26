import React from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../../i18n/translations';

export default function ProcessSection() {
  const { language } = useLanguage();
  const t = translations[language].services.mechanical.process;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{t.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {t.steps.map(step => (
            <div key={step.title} className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-600">{step.title}</h3>
              {step.description && (
                <p className="text-gray-700">{step.description}</p>
              )}
              {step.features && (
                <ul className="space-y-2 text-gray-700">
                  {step.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}