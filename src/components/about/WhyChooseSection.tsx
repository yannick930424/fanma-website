import React from 'react';
import { Target, Award, Globe } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: 'Expertise variée',
    description: 'Nous combinons des compétences en génie mécanique, gestion de projet, et conformité réglementaire pour répondre aux besoins des secteurs les plus exigeants, notamment l\'aéronautique, l\'industrie énergétique et la construction.'
  },
  {
    icon: Award,
    title: 'Expérience avérée',
    description: 'Nos projets passés incluent des systèmes mécaniques complexes, des outils industriels innovants et des solutions adaptées aux normes les plus strictes.'
  },
  {
    icon: Globe,
    title: 'Engagement local et international',
    description: 'Implantés au Québec, nous comprenons les spécificités du marché local tout en ayant une vision internationale grâce à notre expérience mondiale.'
  }
];

export default function WhyChooseSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir FanMa ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="p-6">
              <reason.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}