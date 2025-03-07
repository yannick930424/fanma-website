import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../../i18n/translations';

export default function CFDSection() {
  const { language } = useLanguage();
  const t = translations[language].services.mechanical.section;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{t.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Link to="/services/mechanical/cfd1" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://fanma.ca/images/champs_vitesse.png" 
                alt={t.cfd1.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center px-6">
                  {t.cfd1.title}
                </h3>
              </div>
            </div>
          </Link>

          <Link to="/services/mechanical/cfd2" className="group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://fanma.ca/images/champ_temp_ligne_courant.png" 
                alt={t.cfd2.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center px-6">
                  {t.cfd2.title}
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}