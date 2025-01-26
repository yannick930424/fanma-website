// types/legal.ts

export interface DataItem {
    title: string;
    content: string;
  }
  
  export interface Section {
    title: string;
    content?: string;
    items?: Array<string | DataItem>;
  }
  
  export interface LegalContent {
    title: string;
    lastUpdated: string;
    sections: {
      [key: string]: Section;
    };
  }
  
  export interface LegalTranslations {
    privacy: LegalContent;
    terms: LegalContent;
  }