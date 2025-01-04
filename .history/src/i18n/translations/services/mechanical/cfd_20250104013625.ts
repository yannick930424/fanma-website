// i18n/services/mechanical/cfd.ts

export const cfdTranslations = {
    fr: {
      section: {
        title: 'Analyses CFD',
        cfd1: {
          title: 'Analyse de l\'écoulement dans un moule',
          introduction: 'Ce projet a pour objectif d\'analyser les écoulements dans un moule, en mettant l\'accent sur l\'optimisation du refroidissement et du chauffage à l\'aide de l\'eau comme fluide caloporteur. Les conditions d\'opération incluent une température de 20°C pour le refroidissement et de 90°C pour le chauffage.',
          modeling: {
            title: 'Modélisation et méthodologie',
            geometry: {
              title: 'Géométrie',
              description: 'Un modèle CFD a été utilisé pour simuler les conditions d\'écoulement et de transfert thermique. Le modèle de turbulence k-ε a été adopté pour représenter les écoulements complexes.'
            },
            mesh: {
              title: 'Maillage',
              description: 'La convergence du maillage a été assurée pour garantir l\'indépendance des résultats par rapport à la résolution du maillage. Un maillage adapté a permis une précision optimale des simulations.'
            }
          },
          results: {
            title: 'Résultats de la simulation CFD',
            streamlines: 'Lignes de courant',
            velocityField: 'Champ de vitesse'
          },
          conclusion: 'Les résultats montrent une optimisation efficace des écoulements dans le moule, répondant pleinement aux objectifs de performance thermique. Ces analyses offrent une base solide pour améliorer la conception des moules dans des applications similaires.',
          backToServices: 'Retour aux services mécaniques'
        },
        cfd2: {
          title: 'Analyse du transfert thermique du moule',
          introduction: 'Dans le cadre de l\'analyse thermique des moules en aluminium, une étude CFD (Computational Fluid Dynamics) a été réalisée pour modéliser et comprendre les échanges de chaleur entre le fluide (eau) et le solide (moule). Cette analyse permet de définir les paramètres critiques influençant les performances thermiques et de proposer des améliorations pour l\'efficacité du transfert thermique.',
          modeling: {
            title: 'Modélisation numérique',
            domains: {
              title: 'Domaines',
              fluid: 'Domaine fluide : représentant le flux d\'eau',
              solid: 'Domaine solide : représentant le moule en aluminium'
            },
            mesh: {
              title: 'Maillage',
              description: 'Un maillage continu a été développé pour assurer la cohésion à l\'interface entre les deux domaines. Le maillage précis garantit une simulation fiable et minimise les erreurs numériques.'
            }
          },
          results: {
            title: 'Résultats de la simulation CFD',
            turbulence: {
              title: 'Modèle de turbulence k-ε',
              description: 'Le modèle de turbulence k-ε a été utilisé pour capturer les écoulements complexes dans le domaine fluide. Ce modèle est adapté aux études de transfert thermique et permet d\'obtenir des prédictions précises des champs de température et des écoulements.'
            }
          },
          conclusion: 'Cette étude CFD permet de mieux comprendre les interactions thermiques entre le fluide et le solide dans un moule en aluminium. Les résultats obtenus offrent une base solide pour améliorer la conception et les performances thermiques des moules.',
          backToServices: 'Retour aux services mécaniques'
        }
      }
    },
    en: {
      section: {
        title: 'CFD Analysis',
        cfd1: {
          title: 'Mold Flow Analysis',
          introduction: 'This project aims to analyze flows in a mold, focusing on optimizing cooling and heating using water as the heat transfer fluid. Operating conditions include a temperature of 20°C for cooling and 90°C for heating.',
          modeling: {
            title: 'Modeling and Methodology',
            geometry: {
              title: 'Geometry',
              description: 'A CFD model was used to simulate flow and heat transfer conditions. The k-ε turbulence model was adopted to represent complex flows.'
            },
            mesh: {
              title: 'Meshing',
              description: 'Mesh convergence was ensured to guarantee the independence of results from mesh resolution. An adapted mesh allowed for optimal simulation accuracy.'
            }
          },
          results: {
            title: 'CFD Simulation Results',
            streamlines: 'Streamlines',
            velocityField: 'Velocity Field'
          },
          conclusion: 'The results show efficient flow optimization in the mold, fully meeting thermal performance objectives. These analyses provide a solid foundation for improving mold design in similar applications.',
          backToServices: 'Back to mechanical services'
        },
        cfd2: {
          title: 'Mold Heat Transfer Analysis',
          introduction: 'As part of the thermal analysis of aluminum molds, a CFD (Computational Fluid Dynamics) study was conducted to model and understand heat exchanges between the fluid (water) and solid (mold). This analysis helps define critical parameters influencing thermal performance and propose improvements for heat transfer efficiency.',
          modeling: {
            title: 'Numerical Modeling',
            domains: {
              title: 'Domains',
              fluid: 'Fluid domain: representing water flow',
              solid: 'Solid domain: representing the aluminum mold'
            },
            mesh: {
              title: 'Meshing',
              description: 'A continuous mesh was developed to ensure cohesion at the interface between the two domains. The precise mesh ensures reliable simulation and minimizes numerical errors.'
            }
          },
          results: {
            title: 'CFD Simulation Results',
            turbulence: {
              title: 'k-ε Turbulence Model',
              description: 'The k-ε turbulence model was used to capture complex flows in the fluid domain. This model is suitable for heat transfer studies and provides accurate predictions of temperature fields and flows.'
            }
          },
          conclusion: 'This CFD study provides better understanding of thermal interactions between fluid and solid in an aluminum mold. The results provide a solid foundation for improving mold design and thermal performance.',
          backToServices: 'Back to mechanical services'
        }
      }
    }
  };