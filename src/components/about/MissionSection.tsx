import React from 'react';
import { Target } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

export default function MissionSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="py-16 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Target className="w-16 h-16 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-8">{t.about.mission.title}</h2>
        <p className="text-xl leading-relaxed">
          {t.about.mission.description}
        </p>
      </div>
    </div>
  );
}