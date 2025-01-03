import React from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../../i18n/translations';
import { ApplicationCard } from '../../common/cards/ApplicationCard';
import { SERVICE_ICONS } from '../../../constants/serviceIcons';

export default function ApplicationsSection() {
  const { language } = useLanguage();
  const t = translations[language].services.codes.applications;

  const applications = [
    {
      key: 'fireSafety',
      icon: SERVICE_ICONS.codes.applications.fireSafety,
      title: t.fireSafety.title,
      description: t.fireSafety.description
    },
    {
      key: 'complexBuildings',
      icon: SERVICE_ICONS.codes.applications.complexBuildings,
      title: t.complexBuildings.title,
      description: t.complexBuildings.description
    },
    {
      key: 'innovations',
      icon: SERVICE_ICONS.codes.applications.innovations,
      title: t.innovations.title,
      description: t.innovations.description
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{t.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {applications.map(({ key, icon, title, description }) => (
            <ApplicationCard
              key={key}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}