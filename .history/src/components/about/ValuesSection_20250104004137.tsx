import React from 'react';
import { Award, Lightbulb, Users } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

const icons = {
  Excellence: Award,
  Innovation: Lightbulb,
  Collaboration: Users
};

export default function ValuesSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.about.values[0].title1}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.about.values.map((value) => {
            const Icon = icons[value.title as keyof typeof icons];
            return (
              <div key={value.title} className="bg-white p-6 rounded-lg shadow-lg">
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}