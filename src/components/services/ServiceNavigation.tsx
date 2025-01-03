import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

const services = ['codes', 'management', 'mechanical'] as const;
type ServiceType = typeof services[number];

interface ServiceNavigationProps {
  currentService: ServiceType;
}

export default function ServiceNavigation({ currentService }: ServiceNavigationProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const currentIndex = services.indexOf(currentService);
  const prevService = services[currentIndex - 1];
  const nextService = services[currentIndex + 1];

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {prevService ? (
            <Link
              to={`/services/${prevService}`}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>{t.services[prevService].title}</span>
            </Link>
          ) : (
            <div className="w-24" aria-hidden="true" />
          )}

          <Link
            to="/services"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            {t.services.title}
          </Link>

          {nextService ? (
            <Link
              to={`/services/${nextService}`}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <span>{t.services[nextService].title}</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          ) : (
            <div className="w-24" aria-hidden="true" />
          )}
        </div>
      </div>
    </div>
  );
}