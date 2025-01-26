import React from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../../i18n/translations';
import { ServiceCard } from '../../common/cards/ServiceCard';
import { SERVICE_ICONS } from '../../../constants/serviceIcons';
import { LucideIcon } from 'lucide-react';

type ServiceTitle = 'Analyse de conformité' | 'Compliance Analysis' | 'Mesures équivalentes ou différentes' | 'Equivalent or alternative Solutions';

const serviceIcons: Record<ServiceTitle, LucideIcon> = {
  'Analyse de conformité': SERVICE_ICONS.codes.services.compliance,
  'Compliance Analysis': SERVICE_ICONS.codes.services.compliance,
  'Mesures équivalentes ou différentes': SERVICE_ICONS.codes.services.alternative,
  'Equivalent or alternative Solutions': SERVICE_ICONS.codes.services.alternative,
};

export default function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language].services.codes.services;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{t.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {t.items.map((service) => (
            <ServiceCard
              key={service.title}
              icon={serviceIcons[service.title as ServiceTitle]}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}