import React from 'react';
import { LayoutGrid } from 'lucide-react';

export default function CoordinationSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <LayoutGrid className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Coordination multi-projets</h2>
          <p className="text-gray-700 mt-4">
            FanMa excelle dans la gestion de portefeuilles complexes. Grâce à notre maîtrise des environnements 
            PMO (Project Management Office), nous assurons une coordination fluide entre plusieurs projets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Priorisation des ressources</h3>
            <p className="text-gray-700">
              Optimisation de l'allocation des ressources entre les différents projets pour maximiser l'efficacité.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Optimisation des calendriers</h3>
            <p className="text-gray-700">
              Planification intelligente pour éviter les conflits et assurer une progression harmonieuse des projets.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Centralisation</h3>
            <p className="text-gray-700">
              Gestion centralisée de la communication et des décisions stratégiques pour une meilleure cohérence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}