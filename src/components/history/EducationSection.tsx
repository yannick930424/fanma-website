import React from 'react';
import { BookOpen } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

const education = [
  {
    degree: 'MBA',
    school: 'HEC Montréal',
    location: 'Canada',
    status: '(2024)'
  },
  {
    degree: 'Maîtrise en génie aérospatial',
    school: 'Université de Sherbrooke',
    location: 'Canada'
  },
  {
    degree: 'Maîtrise en gestion des risques financiers',
    school: 'Université Saint-Louis',
    location: 'Belgique'
  },
  {
    degree: 'Maîtrise en gestion des transports',
    school: 'Université libre de Bruxelles',
    location: 'Belgique'
  },
  {
    degree: 'Maîtrise en génie mécanique',
    school: 'Université de Mons',
    location: 'Belgique'
  }
];

export default function EducationSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">{t.history.education.title}</h2>
        </div>
        <div className="space-y-6">
          {education.map((edu) => (
            <div 
              key={edu.degree}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {edu.degree} {edu.status && <span className="text-blue-600">{edu.status}</span>}
              </h3>
              <p className="text-gray-600">
                {edu.school}, {edu.location}
              </p>
            </div>
          ))}
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm mt-6">
            <h3 className="text-xl font-semibold text-blue-900">{t.history.education.certification}</h3>
            <p className="text-blue-700">{t.history.education.pmp}</p>
          </div>
        </div>
      </div>
    </div>
  );
}