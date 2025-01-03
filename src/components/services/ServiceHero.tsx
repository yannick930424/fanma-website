import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';
import { BookOpen, Target, Wrench } from 'lucide-react';

const serviceIcons = {
  codes: BookOpen,
  management: Target,
  mechanical: Wrench,
};

interface ServiceHeroProps {
  serviceKey: keyof typeof serviceIcons;
}

export default function ServiceHero({ serviceKey }: ServiceHeroProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const Icon = serviceIcons[serviceKey];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Icon className="w-16 h-16 text-blue-600 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {t.services[serviceKey].title}
        </h1>
        <p className="text-xl text-gray-700">
          {t.services[serviceKey].description}
        </p>
      </div>
    </div>
  );
}