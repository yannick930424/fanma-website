import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const { privacy } = translations[language];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{privacy.title}</h1>
        <p className="text-gray-600 mb-8">{privacy.lastUpdated}</p>

        {Object.entries(privacy.sections).map(([key, section]) => (
          <section key={key} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {section.title}
            </h2>
            {section.content && (
              <p className="text-gray-700 mb-6">{section.content}</p>
            )}
            {section.items && (
              <ul className="space-y-4">
                {section.items.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {typeof item === 'string' ? (
                      item
                    ) : (
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p>{item.content}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}