import { applicationsTranslations } from './applications';

export const codesTranslations = {
  fr: {
    title: 'Codes et Normes',
    description: 'Expertise en conformité réglementaire et demandes de mesures équivalentes',
    applications: {
      title: 'Applications',
      ...applicationsTranslations.fr
    },
    services: {
      title: 'Nos services',
      items: [
        {
          title: 'Analyse de conformité',
          description: 'Évaluation approfondie et recommandations',
          features: [
            'Revue de conception',
            'Identification des non-conformités',
            'Solutions correctives'
          ]
        },
        {
          title: 'Mesures différentes',
          description: 'Demandes de solutions alternatives',
          features: [
            'Analyse des options',
            'Documentation technique',
            'Suivi avec les autorités'
          ]
        }
      ]
    }
  },
  en: {
    title: 'Codes and Standards',
    description: 'Expertise in regulatory compliance and equivalent measure requests',
    applications: {
      title: 'Applications',
      ...applicationsTranslations.en
    },
    services: {
      title: 'Our Services',
      items: [
        {
          title: 'Compliance Analysis',
          description: 'In-depth evaluation and recommendations',
          features: [
            'Design review',
            'Non-compliance identification',
            'Corrective solutions'
          ]
        },
        {
          title: 'Alternative Solutions',
          description: 'Requests for alternative measures',
          features: [
            'Options analysis',
            'Technical documentation',
            'Authority follow-up'
          ]
        }
      ]
    }
  }
};