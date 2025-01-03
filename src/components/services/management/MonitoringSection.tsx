import React from 'react';
import { LineChart, Users, CheckSquare } from 'lucide-react';

export default function MonitoringSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Suivi et contrôle des projets</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <LineChart className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Contrôle des Coûts</h3>
            <p className="text-gray-700">
              Utilisation d'outils d'analyse de la valeur acquise (EVM) pour suivre le budget.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Gestion des Parties Prenantes</h3>
            <p className="text-gray-700">
              Coordination efficace pour garantir l'engagement des parties prenantes internes et externes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <CheckSquare className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Qualité</h3>
            <p className="text-gray-700">
              Mise en œuvre des plans d'assurance qualité basés sur les exigences spécifiques de chaque projet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}