import React from 'react';

export default function ExpertiseSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Notre expertise clé en conception Mécanique</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-600">Conception et optimisation de systèmes mécaniques</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="font-semibold mr-2">Machines industrielles :</span>
                Conception complète, de la modélisation à la fabrication, pour des performances maximales.
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Composants spécialisés :</span>
                Calculs avancés pour garantir la résistance des matériaux et l'optimisation structurelle.
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Systèmes thermiques :</span>
                Intégration de solutions innovantes pour les systèmes de refroidissement et de chauffage.
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Structure des bâtiments :</span>
                Conception des plans pour construction ainsi que l'analyse de la résistance des structures.
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Prototypage rapide et tests de performance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Réduction des cycles de développement grâce à des itérations rapides.</li>
                <li>Simulation numérique pour prévoir les comportements réels des composants.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}