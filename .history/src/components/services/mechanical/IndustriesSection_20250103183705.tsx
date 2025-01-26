import React from 'react';

export default function IndustriesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Ingénierie pour secteurs spécifiques</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Aéronautique</h3>
            <p className="text-gray-700">
              Conception de systèmes légers et résistants, gestion de la certification selon les normes internationales, 
              et collaboration avec des équipes pluridisciplinaires pour des projets complexes.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Production énergétique</h3>
            <p className="text-gray-700">
              Développement de solutions innovantes comme les éoliennes.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Pétrole et gaz</h3>
            <p className="text-gray-700">
              Conception d'outils robustes et faciles à entretenir pour les environnements extrêmes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}