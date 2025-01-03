import { useEffect } from 'react';
import { useLanguage } from './useLanguage';

export function useLanguageLoader() {
  const { language } = useLanguage();

  useEffect(() => {
    // Dynamically import language files based on selected language
    import(`../i18n/translations/${language}`).catch(console.error);
  }, [language]);
}