import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

export default function CFD2Analysis() {
  const { language } = useLanguage();
  const t = translations[language].services.mechanical.section.cfd2;

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

          {/* Modélisation numérique */}
          <h4 className="text-2xl font-bold">{t.modeling.title}</h4>
          
          {/* Géométrie */}
          <h5 className="text-xl font-semibold mt-6">{t.modeling.geometry.title}</h5>
          <p className="mt-4">{t.modeling.geometry.content}</p>
          <ul className="list-disc pl-6 my-4">
            {t.modeling.geometry.domains.map((domain, index) => (
              <li key={index}>{domain}</li>
            ))}
          </ul>

          <figure className="my-8">
            <img 
              src="https://fanma.ca/images/model_numerique.png" 
              alt={t.modeling.geometry.caption}
              className="rounded-lg shadow-lg w-full"
            />
            <figcaption className="text-sm text-gray-600 mt-2 text-center">
              {t.modeling.geometry.caption}
            </figcaption>
          </figure>
          <p className="mt-4">{t.modeling.geometry.content2}</p>
          {/* Maillage */}
          <h5 className="text-xl font-semibold mt-6">{t.modeling.mesh.title}</h5>
          <p className="mt-4">{t.modeling.mesh.content}</p>
          
          <figure className="my-8">
            <img 
              src="https://fanma.ca/images/maillage moule.png" 
              alt={t.modeling.mesh.caption}
              className="rounded-lg shadow-lg w-full"
            />
            <figcaption className="text-sm text-gray-600 mt-2 text-center">
              {t.modeling.mesh.caption}
            </figcaption>
          </figure>

          {/* Résultats */}
          <h4 className="text-2xl font-bold mt-8">{t.results.title}</h4>
          
          {/* Modèle de turbulence */}
          <h5 className="text-xl font-semibold mt-6">{t.results.turbulence.title}</h5>
          <p className="mt-4">{t.results.turbulence.content}</p>

          <h5 className="text-xl font-semibold mt-6">{t.results.temperature.title}</h5>
          <p className="mt-4">{t.results.temperature.content}</p>

          {/* Champ de température et lignes de courant */}
          <div className="grid grid-cols-1 gap-8 my-8">
            <figure>
              <img 
                src="https://fanma.ca/images/champ_temp.png" 
                alt={t.results.temperature.title}
                className="rounded-lg shadow-lg w-full"
              />
              <figcaption className="text-sm text-gray-600 mt-2 text-center">
                {t.results.temperature.titleCaption}
              </figcaption>
            </figure>

            <h5 className="text-xl font-semibold mt-6">{t.results.streamlines.title}</h5>
            <p className="mt-4">{t.results.streamlines.content}</p>            

            <figure>
              <img 
                src="https://fanma.ca/images/champ_temp_ligne_courant.png" 
                alt={t.results.streamlines.title}
                className="rounded-lg shadow-lg w-full"
              />
              <figcaption className="text-sm text-gray-600 mt-2 text-center">
                {t.results.streamlines.titleCaption}
              </figcaption>
            </figure>
            <p className="mt-2">{t.results.streamlines.content}</p>
          </div>

          {/* Conclusion */}
          <h4 className="text-2xl font-bold mt-8">{t.conclusion.title}</h4>
          <p className="mt-4">{t.conclusion.content}</p>
        </div>
      </div>
    </div>
  );
}