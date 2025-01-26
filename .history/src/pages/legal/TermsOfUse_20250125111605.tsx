import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

export default function TermsOfUse() {
  const { language } = useLanguage();
  const { terms } = translations[language];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{terms.title}</h1>
        <p className="text-gray-600 mb-8">{terms.lastUpdated}</p>

        {Object.entries(terms.sections).map(([key, section]) => (
          <section key={key} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {section.title}
            </h2>
            {section.content && (
              <p className="text-gray-700 mb-6">{section.content}</p>
            )}
            {section.items && (
              <ul className="list-disc list-inside space-y-2">
                {section.items.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}