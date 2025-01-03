import React from 'react';

export default function ProcessSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Notre processus de conception</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-600">Analyse des besoins et faisabilité</h3>
            <p className="text-gray-700">
              Collaboration avec vos équipes pour définir les spécifications techniques et les contraintes du projet.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-600">Modélisation et simulation</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Utilisation des outils comme SolidWorks et AutoCAD pour créer des modèles 3D précis.</li>
              <li>Simulation des performances avec des logiciels d'analyse tels que l'analyse par éléments finis (FEA) 
                  et l'étude CFD (Computational Fluid Dynamics).</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-600">Prototypage et validation</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Fabrication des prototypes pour tester les concepts dans des conditions réelles.</li>
              <li>Ajustements pour atteindre les performances optimales.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}