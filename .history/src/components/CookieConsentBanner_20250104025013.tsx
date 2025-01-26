import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

type CookieCategory = 'necessary' | 'analytics' | 'marketing';

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const DEFAULT_SETTINGS: CookieSettings = {
  necessary: true, // Toujours true
  analytics: false,
  marketing: false
};

export default function CookieConsentBanner() {
  const { language } = useLanguage();
  const t = translations[language].cookies;

  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (!savedConsent) {
      setIsVisible(true);
    } else {
      try {
        const savedSettings = JSON.parse(savedConsent);
        setSettings(savedSettings);
      } catch (error) {
        console.error('Error parsing cookie settings:', error);
        setIsVisible(true);
      }
    }
  }, []);

  const saveSettings = (newSettings: CookieSettings) => {
    // Assurez-vous que les cookies nécessaires sont toujours activés
    const settingsToSave = { ...newSettings, necessary: true };
    
    localStorage.setItem('cookieConsent', JSON.stringify(settingsToSave));
    
    // Appliquer les paramètres aux services
    if (settingsToSave.analytics) {
      // Activer GA4
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    }

    if (settingsToSave.marketing) {
      // Activer cookies marketing
      if (window.gtag) {
        window.gtag('consent', 'update', {
          'ad_storage': 'granted'
        });
      }
    }

    setSettings(settingsToSave);
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    saveSettings({
      necessary: true,
      analytics: true,
      marketing: true
    });
  };

  const handleRefuseAll = () => {
    saveSettings({
      necessary: true,
      analytics: false,
      marketing: false
    });
  };

  const handleToggleCategory = (category: CookieCategory) => {
    if (category === 'necessary') return; // Ne peut pas être désactivé
    setSettings(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSavePreferences = () => {
    saveSettings(settings);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold mb-2">{t.title}</h2>
            <p className="text-gray-600 max-w-3xl">{t.description}</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
          </button>
        </div>

        {isExpanded && (
          <div className="space-y-4 mb-6">
            {Object.entries(t.categories).map(([key, category]) => (
              <div key={key} className="flex items-start justify-between p-4 bg-gray-50 rounded">
                <div className="flex-1 pr-4">
                  <h3 className="font-semibold mb-1">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
                <div className="flex items-center h-6">
                  <input
                    type="checkbox"
                    checked={settings[key as CookieCategory]}
                    onChange={() => handleToggleCategory(key as CookieCategory)}
                    disabled={key === 'necessary'}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-end items-center gap-4">
          {isExpanded && (
            <>
              <Link 
                to="/privacy"
                className="text-sm text-gray-600 hover:text-gray-900"
                onClick={() => setIsVisible(false)}
              >
                {t.moreInfo.text} {t.moreInfo.link}
              </Link>
              <button
                onClick={handleRefuseAll}
                className="text-gray-600 hover:text-gray-900"
              >
                {t.buttons.refuseAll}
              </button>
            </>
          )}
          <div className="space-x-4">
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {t.buttons.acceptAll}
            </button>
            {isExpanded && (
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                {t.buttons.save}
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          {t.footer.text}
        </div>
      </div>
    </div>
  );
}