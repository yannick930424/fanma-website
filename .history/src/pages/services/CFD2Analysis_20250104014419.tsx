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

        <h1 className="text-4xl font-bold mb-8">{t.title}</h1>
        
        <div className="prose max-w-none">
          <h4>Introduction</h4>
          <p>{t.introduction}</p>

          <h4>{t.modeling.title}</h4>
          <p>
            <strong>{t.modeling.domains.title} :</strong>
          </p>
          <ul>
            <li>{t.modeling.domains.fluid}</li>
            <li>{t.modeling.domains.solid}</li>
          </ul>

          <figure className="my-8">
            <img 
              src="https://fanma.ca/images/model_numerique.png" 
              alt={t.modeling.title}
              className="rounded-lg shadow-lg"
            />
            <figcaption className="text-sm text-gray-600 mt-2 text-center">
              {t.modeling.title}
            </figcaption>
          </figure>

          <h4>{t.modeling.mesh.title}</h4>
          <p>{t.modeling.mesh.description}</p>

          <figure className="my-8">
            <img 
              src="https://fanma.ca/images/maillage moule.png" 
              alt={t.modeling.mesh.title}
              className="rounded-lg shadow-lg"
            />
            <figcaption className="text-sm text-gray-600 mt-2 text-center">
              {t.modeling.mesh.title}
            </figcaption>
          </figure>

          <h4>{t.results.title}</h4>
          
          <h5>{t.results.turbulence.title}</h5>
          <p>{t.results.turbulence.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <figure>
              <img 
                src="https://fanma.ca/images/champ_temp.png" 
                alt="Champ de température"
                className="rounded-lg shadow-lg"
              />
              <figcaption className="text-sm text-gray-600 mt-2 text-center">
                {language === 'fr' ? 'Champ de température' : 'Temperature field'}
              </figcaption>
            </figure>
            <figure>
              <img 
                src="https://fanma.ca/images/champ_temp_ligne_courant.png" 
                alt="Lignes de courant et champ de température"
                className="rounded-lg shadow-lg"
              />
              <figcaption className="text-sm text-gray-600 mt-2 text-center">
                {language === 'fr' ? 'Lignes de courant et champ de température' : 'Streamlines and temperature field'}
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