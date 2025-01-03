import React from 'react';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

export default function FounderHero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <GraduationCap className="w-16 h-16 text-blue-600 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {t.history.title}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          {t.history.founder.description}
        </p>
      </div>
    </div>
  );
}