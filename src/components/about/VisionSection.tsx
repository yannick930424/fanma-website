import React from 'react';
import { Lightbulb } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

export default function VisionSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Lightbulb className="w-12 h-12 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-8">{t.about.vision.title}</h2>
        <div className="space-y-6 text-gray-700">
          <p className="leading-relaxed">{t.about.vision.description1}</p>
          <p className="leading-relaxed">{t.about.vision.description2}</p>
        </div>
      </div>
    </div>
  );
}