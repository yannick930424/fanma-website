export type LegalItem = string | {
    title: string;
    content: string;
  };

interface Section {
    title: string;
    content?: string;
    items?: (string | { title: string; content: string })[];
  }
  
  interface LegalSection {
    title: string;
    lastUpdated: string;
    sections: Record<string, Section>;
  }

  // Structure de base pour une section
interface BaseSection {
    title: string;
    content?: string;
    items?: LegalItem[];
  }
  
  // Interface pour les sections Privacy et Terms
  interface LegalSection {
    title: string;
    lastUpdated: string;
    sections: {
      [key: string]: BaseSection;
    };
  }
  
  interface LegalTranslations {
    title: string;
    privacy: LegalSection;
    terms: LegalSection;
  }