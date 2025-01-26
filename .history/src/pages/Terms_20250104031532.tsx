import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

export default function Terms() {
  const { language } = useLanguage();
  const t = translations[language].terms;

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

        {/* Services */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.sections.services.title}</h2>
          <div className="prose text-gray-700">
            <p className="whitespace-pre-line mb-4">{t.sections.services.content}</p>
            <p className="text-sm text-gray-600 italic">{t.sections.services.disclaimer}</p>
          </div>
        </section>

        {/* Propriété intellectuelle */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.sections.intellectualProperty.title}</h2>
          <p className="text-gray-700 leading-relaxed">
            {t.sections.intellectualProperty.content}
          </p>
        </section>

        {/* Obligations des utilisateurs */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.sections.userObligations.title}</h2>
          <p className="text-gray-700 mb-4">{t.sections.userObligations.content}</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
            {t.sections.userObligations.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Limitation de responsabilité */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.sections.liability.title}</h2>
          <p className="text-gray-700 leading-relaxed">
            {t.sections.liability.content}
          </p>
        </section>

        {/* Confidentialité */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.sections.confidentiality.title}</h2>
          <p className="text-gray-700 leading-relaxed">
            {t.sections.confidentiality.content}
          </p>
        </section>

        {/* Modifications des conditions */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.sections.modifications.title}</h2>
          <p className="text-gray-700 leading-relaxed">
            {t.sections.modifications.content}
          </p>
        </section>

        {/* Droit applicable */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">{t.sections.applicable.title}</h2>
          <p className="text-gray-700 leading-relaxed">
            {t.sections.applicable.content}
          </p>
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