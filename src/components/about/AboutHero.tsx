import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

export default function AboutHero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {t.about.hero.title}
        </h1>
        <p className="text-2xl font-semibold text-blue-600 mb-8">
          {t.about.hero.subtitle}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          {t.about.hero.description}
        </p>
      </div>
    </div>
  );
}