import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';
import SocialLinks from './SocialLinks';
import ContactInfo from './ContactInfo';
import QuickLinks from './QuickLinks';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="https://fanma.ca/images/logo.png" alt="FanMa Logo" className="h-12 mb-4" />
            <p className="text-sm text-gray-400">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <QuickLinks />
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contact}</h4>
            <ContactInfo />
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.followUs}</h4>
            <SocialLinks />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>{t.footer.copyright}</p>
          <div className="mt-8 text-center text-sm">
          <Link to="/legal/privacy" className="text-gray-600 hover:text-gray-500">
            {t.footer.privacyPolicy}
          </Link>
            <span className="mx-2">|</span>
            <Link to="/legal/terms" className="text-gray-600 hover:text-gray-500">
            {t.footer.termsOfUse}
          </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}