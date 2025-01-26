// types/legal.ts

export interface DataItem {
    title: string;
    content: string;
  }
  
  // Section avec seulement title et content
  interface ContentOnlySection {
    title: string;
    content: string;
  }
  
  // Section avec title et items
  interface ItemsOnlySection {
    title: string;
    items: Array<string | DataItem>;
  }
  
  // Section avec title, content et items
  interface FullSection {
    title: string;
    content: string;
    items: Array<string | DataItem>;
  }
  
  // Union type de toutes les possibilités de sections
  export type Section = ContentOnlySection | ItemsOnlySection | FullSection;
  
  export interface LegalContent {
    title: string;
    lastUpdated: string;
    sections: {
      [key: string]: Section;
    };
  }
  
  export interface LegalTranslations {
    title: string;
    privacy: LegalContent;
    terms: LegalContent;
  }