import React from 'react';
import { Award, Workflow, Target } from 'lucide-react';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../../i18n/translations';

export default function WhyChooseSection() {
  const { language } = useLanguage();
  const t = translations[language].services.management.whyChoose;

  const icons = [Award, Workflow, Target];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{t.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {t.reasons.map((reason, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-700">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">{t.projects.title}</h3>
          <ul className="space-y-4 text-gray-700">
            {t.projects.examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}