import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

export default function QuickLinks() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <ul className="space-y-2">
      <li>
        <Link to="/" className="text-gray-400 hover:text-white transition duration-300">
          {t.nav.home}
        </Link>
      </li>
      <li>
        <Link to="/services" className="text-gray-400 hover:text-white transition duration-300">
          {t.nav.services}
        </Link>
      </li>
      <li>
        <Link to="/about" className="text-gray-400 hover:text-white transition duration-300">
          {t.nav.about}
        </Link>
      </li>
      <li>
        <Link to="/history" className="text-gray-400 hover:text-white transition duration-300">
          {t.nav.history}
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">
          {t.nav.contact}
        </Link>
      </li>
    </ul>
  );
}