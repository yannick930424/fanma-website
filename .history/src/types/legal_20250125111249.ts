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
  
  interface LegalTranslations {
    title: string;
    privacy: LegalSection;
    terms: LegalSection;
  }