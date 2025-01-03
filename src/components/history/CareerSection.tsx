import React from 'react';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

export default function CareerSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">{t.history.career.title}</h2>
        </div>
        <div className="grid gap-8">
          {t.history.career.positions.map((position) => (
            <div 
              key={position.title}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {position.title}
              </h3>
              <div className="text-blue-600 font-medium mb-3">{position.sector}</div>
              <p className="text-gray-600">{position.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}