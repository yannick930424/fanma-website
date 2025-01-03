import React from 'react';
import { Shield, Building, Lightbulb, FileCheck, GitPullRequest } from 'lucide-react';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceNavigation from '../../components/services/ServiceNavigation';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

export default function CodesService() {
  const { language } = useLanguage();
  const t = translations[language].services.codes;

  return (
    <div>
      <ServiceHero serviceKey="codes" />
      
      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{t.services.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.services.items.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg shadow-lg">
                {service.title.includes('conformité') || service.title.includes('Compliance') ? (
                  <FileCheck className="w-12 h-12 text-blue-600 mb-4" />
                ) : (
                  <GitPullRequest className="w-12 h-12 text-blue-600 mb-4" />
                )}
                <h3 className="text-xl font-semibold text-blue-600 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{t.applications.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {t.applications.fireSafety.title}
              </h3>
              <p className="text-gray-700">{t.applications.fireSafety.description}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Building className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {t.applications.complexBuildings.title}
              </h3>
              <p className="text-gray-700">{t.applications.complexBuildings.description}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Lightbulb className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {t.applications.innovations.title}
              </h3>
              <p className="text-gray-700">{t.applications.innovations.description}</p>
            </div>
          </div>
        </div>
      </section>

      <ServiceNavigation currentService="codes" />
    </div>
  );
}