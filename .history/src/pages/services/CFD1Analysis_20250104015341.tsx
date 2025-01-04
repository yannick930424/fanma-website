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

        <h1 className="text-4xl font-bold mb-12">{t.title}</h1>
        
        <div className="prose max-w-none">
          {/* Introduction */}
          <h4 className="text-2xl font-bold">{t.introduction.title}</h4>
          <p className="mt-4 mb-8">{t.introduction.content}</p>

          {/* Modélisation et méthodologie */}
          <h4 className="text-2xl font-bold">{t.modeling.title}</h4>
          
          {/* Géométrie */}
          <h5 className="text-xl font-semibold mt-6">{t.modeling.geometry.title}</h5>
          <p className="mt-4">{t.modeling.geometry.content}</p>
          
          <div className="grid grid-cols-1 gap-8 my-8">
            <figure>
              <img 
                src="https://fanma.ca/images/moule.png" 
                alt={t.modeling.geometry.captions.isometric}
                className="rounded-lg shadow-lg w-full"
              />
              <figcaption className="text-sm text-gray-600 mt-2 text-center">
                {t.modeling.geometry.captions.isometric}
              </figcaption>
            </figure>

            <figure>
              <img 
                src="https://fanma.ca/images/sys_refroi.png" 
                alt={t.modeling.geometry.captions.cooling}
                className="rounded-lg shadow-lg w-full"
              />
              <figcaption className="text-sm text-gray-600 mt-2 text-center">
                {t.modeling.geometry.captions.cooling}
              </figcaption>
            </figure>
          </div>

          {/* Maillage */}
          <h5 className="text-xl font-semibold mt-6">{t.modeling.mesh.title}</h5>
          <p className="mt-4">{t.modeling.mesh.content}</p>
          
          <figure className="my-8">
            <img 
              src="https://fanma.ca/images/maillage.png" 
              alt={t.modeling.mesh.caption}
              className="rounded-lg shadow-lg w-full"
            />
            <figcaption className="text-sm text-gray-600 mt-2 text-center">
              {t.modeling.mesh.caption}
            </figcaption>
          </figure>

          {/* Résultats */}
          <h4 className="text-2xl font-bold mt-8">{t.results.title}</h4>
          
          <figure className="my-8">
            <img 
              src="https://fanma.ca/images/lignes_courant.png" 
              alt={t.results.streamlines.title}
              className="rounded-lg shadow-lg w-full"
            />
            <figcaption className="text-sm text-gray-600 mt-2 text-center">
              {t.results.streamlines.title}
            </figcaption>
          </figure>
          <p className="mt-4">{t.results.streamlines.description}</p>

          <figure className="my-8">
            <img 
              src="https://fanma.ca/images/champs_vitesse.png" 
              alt={t.results.velocityField.title}
              className="rounded-lg shadow-lg w-full"
            />
            <figcaption className="text-sm text-gray-600 mt-2 text-center">
              {t.results.velocityField.title}
            </figcaption>
          </figure>
          <p className="mt-4">{t.results.velocityField.description}</p>

          {/* Conclusion */}
          <h4 className="text-2xl font-bold mt-8">{t.conclusion.title}</h4>
          <p className="mt-4">{t.conclusion.content}</p>
        </div>
      </div>
    </div>
  );
}