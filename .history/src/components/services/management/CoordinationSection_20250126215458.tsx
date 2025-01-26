import React from 'react';
import { LayoutGrid } from 'lucide-react';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../../i18n/translations';

export default function CoordinationSection() {
  const { language } = useLanguage();
  const t = translations[language].services.management.coordination;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <LayoutGrid className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">{t.title}</h2>
          <p className="text-gray-700 mt-4">{t.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {t.features.map((feature) => (
            <div key={feature.title} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}