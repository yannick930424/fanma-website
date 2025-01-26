import React from 'react';
import { LineChart, Users, CheckSquare } from 'lucide-react';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../../i18n/translations';

export default function MonitoringSection() {
  const { language } = useLanguage();
  const t = translations[language].services.management.monitoring;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{t.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {t.sections.map((section, index) => {
            const Icon = index === 0 ? LineChart : 
                        index === 1 ? Users : CheckSquare;
            
            return (
              <div key={section.title} className="bg-white p-6 rounded-lg shadow-lg">
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-700">
                  {section.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}