import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function ApproachSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Une approche basée sur les meilleures pratiques</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Planification et Démarrage de Projet</h3>
              <p className="text-gray-700 mb-4">
                Dès le début, nous collaborons avec vos équipes pour définir des objectifs clairs, 
                des indicateurs de performance (KPI) et un calendrier réaliste.
              </p>
              <ul className="space-y-3">
                {[
                  'Établissement d\'un plan de projet solide incluant les étapes, les budgets et les risques.',
                  'Constitution d\'une équipe projet multidisciplinaire et d\'une matrice des responsabilités.',
                  'Mise en place d\'un processus de gouvernance clair, aligné sur les standards PMI.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Gestion des risques et opportunités</h3>
              <p className="text-gray-700 mb-4">
                Nos experts identifient et analysent systématiquement les risques susceptibles d'affecter vos projets.
              </p>
              <ul className="space-y-3">
                {[
                  'Minimiser les risques potentiels.',
                  'Exploiter les opportunités qui créent de la valeur ajoutée.',
                  'Établir un plan de contingence clair.'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}