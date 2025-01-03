import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';
import { Wrench } from 'lucide-react';

export default function ServicesHero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Wrench className="w-16 h-16 text-blue-600 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {t.services.title}
        </h1>
        <p className="text-xl text-gray-700">
          {t.services.subtitle}
        </p>
      </div>
    </div>
  );
}