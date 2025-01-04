import { cfdTranslations } from "./mechanical/cfd";


export const mechanicalTranslations = {
  fr: {
    title: 'Conception Mécanique',
    description: 'Expertise approfondie en conception mécanique complexe',
    expertise: {
      title: 'Notre expertise clé en conception Mécanique',
      systems: {
        title: 'Conception et optimisation de systèmes mécaniques',
        items: [
          {
            title: 'Machines industrielles',
            description: 'Conception complète, de la modélisation à la fabrication, pour des performances maximales.'
          },
          {
            title: 'Composants spécialisés',
            description: 'Calculs avancés pour garantir la résistance des matériaux et l\'optimisation structurelle.'
          },
          {
            title: 'Systèmes thermiques',
            description: 'Intégration de solutions innovantes pour les systèmes de refroidissement et de chauffage.'
          },
          {
            title: 'Structure des bâtiments',
            description: 'Conception des plans pour construction ainsi que l\'analyse de la résistance des structures.'
          }
        ]
        
      },
      prototyping: {
        title: 'Prototypage rapide et tests de performance',
        features: [
          'Réduction des cycles de développement grâce à des itérations rapides',
          'Simulation numérique pour prévoir les comportements réels des composants'
        ]
      }
    },
    industries: {
      title: 'Ingénierie pour secteurs spécifiques',
      sectors: [
        {
          title: 'Aéronautique',
          description: 'Conception de systèmes légers et résistants, gestion de la certification selon les normes internationales, et collaboration avec des équipes pluridisciplinaires pour des projets complexes.'
        },
        {
          title: 'Production énergétique',
          description: 'Développement de solutions innovantes comme les éoliennes.'
        },
        {
          title: 'Pétrole et gaz',
          description: 'Conception d\'outils robustes et faciles à entretenir pour les environnements extrêmes.'
        }
      ]
    },
    process: {
      title: 'Notre processus de conception',
      steps: [
        {
          title: 'Analyse des besoins et faisabilité',
          description: 'Collaboration avec vos équipes pour définir les spécifications techniques et les contraintes du projet.'
        },
        {
          title: 'Modélisation et simulation',
          features: [
            'Utilisation des outils comme SolidWorks et AutoCAD pour créer des modèles 3D précis',
            'Simulation des performances avec des logiciels d\'analyse tels que l\'analyse par éléments finis (FEA) et l\'étude CFD (Computational Fluid Dynamics)'
          ]
        },
        {
          title: 'Prototypage et validation',
          features: [
            'Fabrication des prototypes pour tester les concepts dans des conditions réelles',
            'Ajustements pour atteindre les performances optimales'
          ]
        }
      ]
    },
    whyChoose: {
      title: 'Pourquoi Choisir FanMa pour la Conception Mécanique ?',
      reasons: [
        {
          title: 'Expertise Multidisciplinaire',
          description: 'Nos compétences couvrent plusieurs secteurs, nous permettant de résoudre des problèmes complexes avec des approches novatrices.'
        },
        {
          title: 'Expérience pratique et leadership',
          description: 'Avec une expérience de direction de projets majeurs dans des entreprises internationales, FanMa garantit une gestion efficace des projets, des échéanciers respectés et des résultats exceptionnels.'
        }
      ],
      projects: {
        title: 'Projets Réalisés',
        examples: [
          'Conception de systèmes de forage innovants, réduisant les coûts et augmentant la fiabilité pour l\'industrie pétrolière',
          'Développement de mécanismes d\'éoliennes à axe vertical, économisant des centaines de milliers de dollars sur chaque nouveau produit',
          'Planification et fabrication de machines industrielles prêtes à l\'emploi, réduisant les délais d\'installation pour les clients'
        ]
      }
    },
    ...cfdTranslations.fr
  },
  en: {
    title: 'Mechanical Design',
    description: 'Deep expertise in complex mechanical design',
    expertise: {
      title: 'Our Key Expertise in Mechanical Design',
      systems: {
        title: 'Design and Optimization of Mechanical Systems',
        items: [
          {
            title: 'Industrial Machines',
            description: 'Complete design, from modeling to manufacturing, for maximum performance.'
          },
          {
            title: 'Specialized Components',
            description: 'Advanced calculations to ensure material strength and structural optimization.'
          },
          {
            title: 'Thermal Systems',
            description: 'Integration of innovative solutions for cooling and heating systems.'
          },
          {
            title: 'Building Structures',
            description: 'Design of construction plans and structural strength analysis.'
          }
        ]
      },
      prototyping: {
        title: 'Rapid Prototyping and Performance Testing',
        features: [
          'Reduced development cycles through rapid iterations',
          'Numerical simulation to predict real component behavior'
        ]
      }
    },
    industries: {
      title: 'Engineering for Specific Sectors',
      sectors: [
        {
          title: 'Aerospace',
          description: 'Design of lightweight and durable systems, certification management according to international standards, and collaboration with multidisciplinary teams for complex projects.'
        },
        {
          title: 'Energy Production',
          description: 'Development of innovative solutions such as wind turbines.'
        },
        {
          title: 'Oil and Gas',
          description: 'Design of robust and easy-to-maintain tools for extreme environments.'
        }
      ]
    },
    process: {
      title: 'Our Design Process',
      steps: [
        {
          title: 'Needs Analysis and Feasibility',
          description: 'Collaboration with your teams to define technical specifications and project constraints.'
        },
        {
          title: 'Modeling and Simulation',
          features: [
            'Use of tools like SolidWorks and AutoCAD to create precise 3D models',
            'Performance simulation with analysis software such as Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD)'
          ]
        },
        {
          title: 'Prototyping and Validation',
          features: [
            'Prototype manufacturing to test concepts in real conditions',
            'Adjustments to achieve optimal performance'
          ]
        }
      ]
    },
    whyChoose: {
      title: 'Why Choose FanMa for Mechanical Design?',
      reasons: [
        {
          title: 'Multidisciplinary Expertise',
          description: 'Our skills cover multiple sectors, allowing us to solve complex problems with innovative approaches.'
        },
        {
          title: 'Practical Experience and Leadership',
          description: 'With experience in managing major projects in international companies, FanMa ensures effective project management, respected schedules, and exceptional results.'
        }
      ],
      projects: {
        title: 'Completed Projects',
        examples: [
          'Design of innovative drilling systems, reducing costs and increasing reliability for the oil industry',
          'Development of vertical axis wind turbine mechanisms, saving hundreds of thousands of dollars on each new product',
          'Planning and manufacturing of ready-to-use industrial machines, reducing installation time for clients'
        ]
      }
    },
    ...cfdTranslations.en
  }
};