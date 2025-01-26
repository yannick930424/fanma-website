import React from 'react';

export default function WhyChooseSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Pourquoi Choisir FanMa pour la Conception Mécanique ?</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Expertise Multidisciplinaire</h3>
            <p className="text-gray-700">
              Nos compétences couvrent plusieurs secteurs, nous permettant de résoudre des problèmes complexes 
              avec des approches novatrices.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Expérience pratique et leadership</h3>
            <p className="text-gray-700">
              Avec une expérience de direction de projets majeurs dans des entreprises internationales, 
              FanMa garantit une gestion efficace des projets, des échéanciers respectés et des résultats exceptionnels.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Projets Réalisés</h3>
          <ul className="space-y-4 text-gray-700">
            <li>Conception de systèmes de forage innovants, réduisant les coûts et augmentant la fiabilité 
                pour l'industrie pétrolière.</li>
            <li>Développement de mécanismes d'éoliennes à axe vertical, économisant des centaines de milliers 
                de dollars sur chaque nouveau produit.</li>
            <li>Planification et fabrication de machines industrielles prêtes à l'emploi, réduisant les délais 
                d'installation pour les clients.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}