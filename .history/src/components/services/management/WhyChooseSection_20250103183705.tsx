import React from 'react';
import { Award, Workflow, Target } from 'lucide-react';

export default function WhyChooseSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Pourquoi Choisir FanMa ?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <Award className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Expertise certifiée et réputée</h3>
            <p className="text-gray-700">
              Avec des professionnels certifiés PMP et une expérience cumulée de plusieurs décennies, 
              FanMa est reconnu comme un partenaire de confiance pour les projets de toute envergure.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <Workflow className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Flexibilité et adaptabilité</h3>
            <p className="text-gray-700">
              Contrairement à une approche rigide, nous adaptons nos stratégies à vos besoins spécifiques, 
              garantissant une réponse agile aux imprévus.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <Target className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Orientation résultats</h3>
            <p className="text-gray-700">
              Notre mission est de dépasser vos attentes. Chaque projet est exécuté avec une attention 
              particulière sur la délivrance de valeur tangible et mesurable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}