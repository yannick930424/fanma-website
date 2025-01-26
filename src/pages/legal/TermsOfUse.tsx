import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';
import type { DataItem, Section } from '../../types/legal';

export default function TermsOfUse() {
  const { language } = useLanguage();
  const { terms } = translations[language];

  const hasContent = (section: Section): section is (Section & { content: string }) => {
    return 'content' in section;
  };

  const hasItems = (section: Section): section is (Section & { items: Array<string | DataItem> }) => {
    return 'items' in section;
  };

  const isDataItem = (item: string | DataItem): item is DataItem => {
    return typeof item === 'object' && 'title' in item;
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          {terms.title}
        </h1>
        <p className="text-gray-600 mb-8">{terms.lastUpdated}</p>

        {Object.entries(terms.sections).map(([key, section]) => (
          <section key={key} className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {section.title}
            </h2>
            
            {hasContent(section) && (
              <p className="text-gray-700 mb-6">{section.content}</p>
            )}

            {hasItems(section) && (
              <ul className="space-y-4">
                {section.items.map((item, index) => (
                  <li key={index} className={isDataItem(item) ? 'bg-gray-50 p-4 rounded list-none' : 'list-disc ml-4 text-gray-700'}>
                    {isDataItem(item) ? (
                      <>
                        <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.content}</p>
                      </>
                    ) : (
                      item
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