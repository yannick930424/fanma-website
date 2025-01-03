import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitch from './LanguageSwitch';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';
import Footer from './Footer/Footer';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className={`fixed w-full bg-white/95 shadow-lg backdrop-blur-sm z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://fanma.ca/images/logo.png" alt="FanMa Logo" className="h-12" />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="nav-link">
                {t.nav.home}
              </Link>
              <Link to="/services" className="nav-link">
                {t.nav.services}
              </Link>
              <Link to="/about" className="nav-link">
                {t.nav.about}
              </Link>
              <Link to="/history" className="nav-link">
                {t.nav.history}
              </Link>
              <Link to="/contact" className="nav-link">
                {t.nav.contact}
              </Link>
              <LanguageSwitch />
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="py-4 space-y-4">
              <Link to="/" className="block nav-link text-center">
                {t.nav.home}
              </Link>
              <Link to="/services" className="block nav-link text-center">
                {t.nav.services}
              </Link>
              <Link to="/about" className="block nav-link text-center">
                {t.nav.about}
              </Link>
              <Link to="/history" className="block nav-link text-center">
                {t.nav.history}
              </Link>
              <Link to="/contact" className="block nav-link text-center">
                {t.nav.contact}
              </Link>
              <div className="flex justify-center">
                <LanguageSwitch />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}