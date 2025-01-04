// i18n/services/mechanical/cfd.ts

export const cfdTranslations = {
  fr: {
    section: {
      title: 'Analyses CFD',
      cfd1: {
        title: 'Analyse de l\'écoulement dans un moule',
        introduction: {
          title: 'Introduction',
          content: 'Ce projet a pour objectif d\'analyser les écoulements dans un moule, en mettant l\'accent sur l\'optimisation du refroidissement et du chauffage à l\'aide de l\'eau comme fluide caloporteur. Les conditions d\'opération incluent une température de 20°C pour le refroidissement et de 90°C pour le chauffage.'
        },
        modeling: {
          title: 'Modélisation et méthodologie',
          geometry: {
            title: 'Géométrie',
            content: 'Un modèle CFD a été utilisé pour simuler les conditions d\'écoulement et de transfert thermique. Le modèle de turbulence k-ε a été adopté pour représenter les écoulements complexes.',
            content2: 'Pour cette analyse, seul le domaine fluide a été considéré. La conception du canal de passage pour l\'écoulement a été réalisée dans un bloc d\'aluminium à l\'aide d\'un outil de perçage.',
            captions: {
              isometric: 'Vue isométrique du moule',
              cooling: 'Système de refroidissement'
            }
          },
          mesh: {
            title: 'Maillage',
            content: 'La convergence du maillage a été assurée pour garantir l\'indépendance des résultats par rapport à la résolution du maillage. Un maillage adapté a permis une précision optimale des simulations.',
            caption: 'Visualisation du maillage'
          }
        },
        results: {
          title: 'Résultats de la simulation CFD',
          streamlines: {
            title: 'Lignes de courant',
            description: 'Les lignes de courant mettent en évidence les trajectoires du fluide dans le canal, offrant une compréhension visuelle des écoulements.'
          },
          velocityField: {
            title: 'Champ de vitesse',
            description: 'Le champ de vitesse illustre la distribution des vitesses du fluide à travers le domaine, permettant d\'identifier les zones d\'accélération ou de stagnation.'
          }
        },
        conclusion: {
          title: 'Conclusion',
          content: 'Les résultats montrent une optimisation efficace des écoulements dans le moule, répondant pleinement aux objectifs de performance thermique. Ces analyses offrent une base solide pour améliorer la conception des moules dans des applications similaires.'
        },
        backToServices: 'Retour aux services mécaniques'
      },
      cfd2: {
        title: 'Analyse du transfert thermique du moule',
        introduction: {
          title: 'Introduction',
          content: 'Dans le cadre de l\'analyse thermique des moules en aluminium, une étude CFD (Computational Fluid Dynamics) a été réalisée pour modéliser et comprendre les échanges de chaleur entre le fluide (eau) et le solide (moule). Cette analyse permet de définir les paramètres critiques influençant les performances thermiques et de proposer des améliorations pour l\'efficacité du transfert thermique.'
        },
        modeling: {
          title: 'Modélisation numérique',
          geometry: {
            title: 'Géométrie',
            content: 'La géométrie inclut 2 domaines principaux :',
            domains: [
              'Domaine fluide : représentant le flux d\'eau',
              'Domaine solide : représentant le moule en aluminium'
            ],
            caption: 'Géométrie pour la modélisation numérique'
          },
          mesh: {
            title: 'Maillage',
            content: 'Un maillage continu a été développé pour assurer la cohésion à l\'interface entre les deux domaines. Le maillage précis garantit une simulation fiable et minimise les erreurs numériques.',
            caption: 'Maillage du moule et du domaine fluide'
          }
        },
        results: {
          title: 'Résultats de la simulation CFD',
          turbulence: {
            title: 'Modèle de turbulence k-ε',
            content: 'Le modèle de turbulence k-ε a été utilisé pour capturer les écoulements complexes dans le domaine fluide. Ce modèle est adapté aux études de transfert thermique et permet d\'obtenir des prédictions précises des champs de température et des écoulements.'
          },
          temperature: {
            title: 'Champ de température',
            content: 'Une vue de coupe du moule montre les variations de température à travers le matériau, mettant en évidence les zones critiques où les transferts de chaleur sont maximaux ou minimaux.'
          },
          streamlines: {
            title: 'Lignes de courant et champ de température',
            content: 'Les lignes de courant représentent les écoulements dans le domaine fluide, tandis que le champ de température met en évidence la distribution thermique. Ces données sont essentielles pour optimiser les conditions d\'écoulement et améliorer le refroidissement.'
          }
        },
        conclusion: {
          title: 'Conclusion',
          content: 'Cette étude CFD permet de mieux comprendre les interactions thermiques entre le fluide et le solide dans un moule en aluminium. Les résultats obtenus offrent une base solide pour améliorer la conception et les performances thermiques des moules. Pour plus d\'informations ou pour une consultation sur des projets similaires, contactez notre équipe spécialisée.'
        },
        backToServices: 'Retour aux services mécaniques'
      }
    }
  },
  en: {
    section: {
      title: 'CFD Analysis',
      cfd1: {
        title: 'Mold Flow Analysis',
        introduction: {
          title: 'Introduction',
          content: 'This project aims to analyze flows in a mold, focusing on optimizing cooling and heating using water as the heat transfer fluid. Operating conditions include a temperature of 20°C for cooling and 90°C for heating.'
        },
        modeling: {
          title: 'Modeling and Methodology',
          geometry: {
            title: 'Geometry',
            content: 'A CFD model was used to simulate flow and heat transfer conditions. The k-ε turbulence model was adopted to represent complex flows.',
            captions: {
              isometric: 'Isometric view of the mold',
              cooling: 'Cooling system'
            }
          },
          mesh: {
            title: 'Meshing',
            content: 'Mesh convergence was ensured to guarantee the independence of results from mesh resolution. An adapted mesh allowed for optimal simulation accuracy.',
            caption: 'Mesh visualization'
          }
        },
        results: {
          title: 'CFD Simulation Results',
          streamlines: {
            title: 'Streamlines',
            description: 'The streamlines highlight the fluid trajectories in the channel, providing a visual understanding of the flows.'
          },
          velocityField: {
            title: 'Velocity Field',
            description: 'The velocity field illustrates the distribution of fluid velocities across the domain, allowing identification of acceleration or stagnation zones.'
          }
        },
        conclusion: {
          title: 'Conclusion',
          content: 'The results show efficient flow optimization in the mold, fully meeting thermal performance objectives. These analyses provide a solid foundation for improving mold design in similar applications.'
        },
        backToServices: 'Back to mechanical services'
      },
      cfd2: {
        title: 'Mold Heat Transfer Analysis',
        introduction: {
          title: 'Introduction',
          content: 'As part of the thermal analysis of aluminum molds, a CFD (Computational Fluid Dynamics) study was conducted to model and understand heat exchanges between the fluid (water) and solid (mold). This analysis helps define critical parameters influencing thermal performance and propose improvements for heat transfer efficiency.'
        },
        modeling: {
          title: 'Numerical Modeling',
          geometry: {
            title: 'Geometry',
            content: 'The geometry includes 2 main domains:',
            domains: [
              'Fluid domain: representing water flow',
              'Solid domain: representing the aluminum mold'
            ],
            caption: 'Geometry for numerical modeling'
          },
          mesh: {
            title: 'Meshing',
            content: 'A continuous mesh was developed to ensure cohesion at the interface between the two domains. The precise mesh ensures reliable simulation and minimizes numerical errors.',
            caption: 'Mesh of the mold and fluid domain'
          }
        },
        results: {
          title: 'CFD Simulation Results',
          turbulence: {
            title: 'k-ε Turbulence Model',
            content: 'The k-ε turbulence model was used to capture complex flows in the fluid domain. This model is suitable for heat transfer studies and provides accurate predictions of temperature fields and flows.'
          },
          temperature: {
            title: 'Temperature Field',
            content: 'A cross-sectional view of the mold shows temperature variations through the material, highlighting critical zones where heat transfers are maximum or minimum.'
          },
          streamlines: {
            title: 'Streamlines and Temperature Field',
            content: 'Streamlines represent flows in the fluid domain, while the temperature field highlights thermal distribution. This data is essential for optimizing flow conditions and improving cooling.'
          }
        },
        conclusion: {
          title: 'Conclusion',
          content: 'This CFD study provides better understanding of thermal interactions between fluid and solid in an aluminum mold. The results provide a solid foundation for improving mold design and thermal performance. For more information or consultation on similar projects, contact our specialized team.'
        },
        backToServices: 'Back to mechanical services'
      }
    }
  }
  };