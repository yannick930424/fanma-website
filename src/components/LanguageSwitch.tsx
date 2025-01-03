import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('fr')}
        className={`lang-btn ${language === 'fr' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`lang-btn ${language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
      >
        EN
      </button>
    </div>
  );
}