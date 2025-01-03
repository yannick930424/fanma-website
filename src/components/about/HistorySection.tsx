import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';
import { History } from 'lucide-react';

export default function HistorySection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <History className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.history.title}</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?q=80&w=2070&auto=format&fit=crop"
            alt="Founder"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.history.founderTitle}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {t.history.description}
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t.history.credentials.title}
            </h3>
            <ul className="space-y-2">
              {t.history.credentials.items.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}