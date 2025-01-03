import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';
import { Check } from 'lucide-react';

interface ServiceContentProps {
  serviceKey: 'codes' | 'management' | 'mechanical';
}

export default function ServiceContent({ serviceKey }: ServiceContentProps) {
  const { language } = useLanguage();
  const t = translations[language];

  // Contenu spécifique à chaque service
  const content = {
    codes: {
      features: [
        'Analyse de conformité et interprétation de la réglementation',
        'Demandes de mesures différentes ou équivalentes',
        'Gestion des non-conformités',
        'Modélisation avancée et analyse prédictive'
      ],
      description: `Chez FanMa, nous nous démarquons par notre expertise approfondie et notre engagement à fournir des solutions sur mesure en codes et normes. Notre objectif est de garantir la conformité réglementaire, la sécurité des occupants, et la qualité des constructions.`
    },
    management: {
      features: [
        'Planification et démarrage de projet',
        'Gestion des risques et opportunités',
        'Suivi et contrôle des projets',
        'Coordination multi-projets'
      ],
      description: `Notre approche de gestion de projet ne se limite pas à coordonner des étapes. Nous apportons une valeur ajoutée en appliquant les meilleures pratiques du Project Management Institute (PMI) et en adaptant nos services aux réalités du marché.`
    },
    mechanical: {
      features: [
        'Conception et optimisation de systèmes mécaniques',
        'Prototypage rapide et tests de performance',
        'Ingénierie pour secteurs spécifiques',
        'Simulation numérique avancée'
      ],
      description: `La conception mécanique est au cœur de nos compétences. Forts de plus de 15 ans d'expérience multidisciplinaire, nous offrons des solutions novatrices, adaptées aux besoins uniques de chaque client.`
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {content[serviceKey].description}
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Nos services incluent :</h3>
              <ul className="space-y-4">
                {content[serviceKey].features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <img
              src={`https://images.unsplash.com/photo-${
                serviceKey === 'codes' ? '1581094794329-c8112a89af12' :
                serviceKey === 'management' ? '1507207611509-ec012433ff52' :
                '1581092160607-7e8b0cb88e9a'
              }?q=80&w=2070&auto=format&fit=crop`}
              alt={t.services[serviceKey].title}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}