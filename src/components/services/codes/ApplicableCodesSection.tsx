import React from 'react';
import { Book } from 'lucide-react';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../../i18n/translations';

export default function ApplicableCodesSection() {
  const { language } = useLanguage();
  const t = translations[language].services.codes.applicableCodes;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">{t.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((code, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700">{code}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}