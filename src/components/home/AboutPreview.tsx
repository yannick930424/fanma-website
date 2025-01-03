import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

export default function AboutPreview() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t.home.about.title}
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t.home.about.description}
            </p>
            <Link 
              to="/about"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              {t.home.about.cta} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
              alt="Engineering expertise"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}