import React from 'react';
import ServiceCard from './ServiceCard';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

export default function ServicesList() {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      title: t.services.codes.title,
      description: t.services.codes.description,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
      link: '/services/codes',
      features: [
        'Analyse de conformité et interprétation des codes',
        'Demandes de mesures différentes ou équivalentes',
        'Gestion des non-conformités',
        'Modélisation et analyse prédictive'
      ]
    },
    {
      title: t.services.management.title,
      description: t.services.management.description,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      link: '/services/management',
      features: [
        'Planification et démarrage de projet',
        'Gestion des risques et opportunités',
        'Suivi et contrôle des projets',
        'Coordination multi-projets'
      ]
    },
    {
      title: t.services.mechanical.title,
      description: t.services.mechanical.description,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
      link: '/services/mechanical',
      features: [
        'Conception et optimisation de systèmes',
        'Prototypage rapide et tests',
        'Solutions sur mesure par secteur',
        'Simulation numérique avancée'
      ]
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              isDetailed={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}