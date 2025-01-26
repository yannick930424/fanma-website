import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

export default function Privacy() {
  const { language } = useLanguage();
  const t = translations[language].privacy;

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          {t.title}
        </h1>
        <p className="text-gray-600 mb-8">{t.lastUpdated}</p>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.sections.introduction.title}</h2>
          <p className="text-gray-700 leading-relaxed">
            {t.sections.introduction.content}
          </p>
        </section>

        {/* Données collectées */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.sections.dataCollection.title}</h2>
          <p className="text-gray-700 mb-4">{t.sections.dataCollection.content}</p>
          <div className="space-y-4">
            {t.sections.dataCollection.items.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded">
                <h3 className="font-medium text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Utilisation des données */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.sections.dataUse.title}</h2>
          <p className="text-gray-700 mb-4">{t.sections.dataUse.content}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {t.sections.dataUse.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Cookies */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.sections.cookies.title}</h2>
          <p className="text-gray-700 mb-4">{t.sections.cookies.content}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {t.sections.cookies.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Sécurité */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.sections.security.title}</h2>
          <p className="text-gray-700 leading-relaxed">
            {t.sections.security.content}
          </p>
        </section>

        {/* Droits */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.sections.rights.title}</h2>
          <p className="text-gray-700 mb-4">{t.sections.rights.content}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {t.sections.rights.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">{t.sections.contact.title}</h2>
          <p className="text-gray-700 mb-4">{t.sections.contact.content}</p>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-gray-700">FanMa Expert-conseil</p>
            <p className="text-gray-700">13450 Rue Simetin</p>
            <p className="text-gray-700">Mirabel, QC J7N 0Z8</p>
            <p className="text-gray-700">Email: info@fanma.ca</p>
            <p className="text-gray-700">Tél: (514) 577-8578</p>
          </div>
        </section>
      </div>
    </div>
  );
}