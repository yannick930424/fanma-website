import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

export default function CFD1Analysis() {
  const { language } = useLanguage();
  const t = translations[language].services.mechanical.section.cfd1;

  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          to="/services/mechanical" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="mr-2" />
          {t.backToServices}
        </Link>

        <h1 className="text-4xl font-bold mb-8">{t.title}</h1>
        
        <div className="prose max-w-none">
          <h4>{t.modeling.title}</h4>
          <h5>{t.modeling.geometry.title}</h5>
          <p>{t.modeling.geometry.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <figure>
              <img 
                src="https://fanma.ca/images/moule.png" 
                alt={t.modeling.geometry.title}
                className="rounded-lg shadow-lg"
              />
              <figcaption className="text-sm text-gray-600 mt-2 text-center">
                {t.modeling.geometry.title}
              </figcaption>
            </figure>
            <figure>
              <img 
                src="https://fanma.ca/images/sys_refroi.png" 
                alt="Système de refroidissement"
                className="rounded-lg shadow-lg"
              />
              <figcaption className="text-sm text-gray-600 mt-2 text-center">
                {language === 'fr' ? 'Système de refroidissement' : 'Cooling system'}
              </figcaption>
            </figure>
          </div>

          <h5>{t.modeling.mesh.title}</h5>
          <p>{t.modeling.mesh.description}</p>

          <figure className="my-8">
            <img 
              src="https://fanma.ca/images/maillage.png" 
              alt={t.modeling.mesh.title}
              className="rounded-lg shadow-lg"
            />
            <figcaption className="text-sm text-gray-600 mt-2 text-center">
              {t.modeling.mesh.title}
            </figcaption>
          </figure>

          <h4>{t.results.title}</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <figure>
              <img 
                src="https://fanma.ca/images/lignes_courant.png" 
                alt={t.results.streamlines}
                className="rounded-lg shadow-lg"
              />
              <figcaption className="text-sm text-gray-600 mt-2 text-center">
                {t.results.streamlines}
              </figcaption>
            </figure>
            <figure>
              <img 
                src="https://fanma.ca/images/champs_vitesse.png" 
                alt={t.results.velocityField}
                className="rounded-lg shadow-lg"
              />
              <figcaption className="text-sm text-gray-600 mt-2 text-center">
                {t.results.velocityField}
              </figcaption>
            </figure>
          </div>

          <h4>Conclusion</h4>
          <p>{t.conclusion}</p>
        </div>
      </div>
    </div>
  );
}