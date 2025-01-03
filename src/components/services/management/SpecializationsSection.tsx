import React from 'react';
import { Plane, Factory } from 'lucide-react';

export default function SpecializationsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Des Spécialisations adaptées au marché québécois et canadien</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Plane className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-600">Secteur Aéronautique</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Gestion de projets de conception et certification :</span>
                {' '}Coordination des équipes multidisciplinaires pour respecter les normes strictes de l'industrie aéronautique.
              </li>
              <li>
                <span className="font-semibold">Optimisation des processus industriels :</span>
                {' '}Mise en place de solutions Lean pour améliorer la productivité et réduire les cycles de production.
              </li>
              <li>
                <span className="font-semibold">Intégration technologique :</span>
                {' '}Développement de systèmes mécaniques innovants pour les équipements aéronautiques.
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Factory className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-600">Projets industriels</h3>
            </div>
            <p className="text-gray-700">
              Nos compétences couvrent l'optimisation de la production, la conception et l'implantation 
              de systèmes industriels innovants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}