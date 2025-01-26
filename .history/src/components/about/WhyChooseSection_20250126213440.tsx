import React from 'react';
import { Target, Award, Globe } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

const icons = [Target, Award, Globe];

export default function WhyChooseSection() {
  const { language } = useLanguage();
  const t = translations[language].about.whyChoose;

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.reasons.map((reason, index) => {
            const Icon = icons[index];
            return (
              <div key={reason.title} className="p-6">
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}