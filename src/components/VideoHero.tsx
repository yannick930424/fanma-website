import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

export default function VideoHero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://fanma.ca/videos/banner.mov"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          {t.home.hero.title}
        </h1>
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">{t.home.hero.subtitle1}</h2>
          <h2 className="text-2xl md:text-3xl font-semibold">{t.home.hero.subtitle2}</h2>
          <h2 className="text-2xl md:text-3xl font-semibold">{t.home.hero.subtitle3}</h2>
        </div>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl">
          {t.home.hero.description}
        </p>
        <Link 
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full 
            text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          {t.home.hero.cta}
        </Link>
      </div>
    </div>
  );
}