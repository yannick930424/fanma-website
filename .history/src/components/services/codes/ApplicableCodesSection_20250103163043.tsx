import React from 'react';
import { Book } from 'lucide-react';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../../i18n/translations';

export default function ApplicableCodesSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">{t.services.codes.applicableCodes.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.codes.applicableCodes.items.map((code, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">{code.name}</h3>
              <p className="text-gray-700">{code.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}