import React, { useState, useEffect } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

type CookieCategory = 'necessary' | 'analytics' | 'marketing';

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsentBanner() {
  const { language } = useLanguage();
  const t = translations[language].cookies;
  
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà fait son choix
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const newSettings = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    saveSettings(newSettings);
  };

  const handleAcceptSelected = () => {
    saveSettings(settings);
  };

  const handleRefuseAll = () => {
    const newSettings = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    saveSettings(newSettings);
  };

  const saveSettings = (newSettings: CookieSettings) => {
    localStorage.setItem('cookieConsent', JSON.stringify(newSettings));
    
    // Activation/désactivation des scripts selon les choix
    if (newSettings.analytics) {
      // Activer Google Analytics
    }
    if (newSettings.marketing) {
      // Activer les cookies marketing
    }
    
    setIsVisible(false);
  };

  const toggleCategory = (category: CookieCategory) => {
    if (category === 'necessary') return; // Toujours actif
    setSettings(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* En-tête de la bannière */}
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-xl font-bold">{t.title}</h2>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isExpanded ? <ChevronDown /> : <ChevronUp />}
          </button>
        </div>

        {/* Description principale */}
        <p className="text-gray-600 mb-6">{t.description}</p>

        {/* Section détaillée des paramètres */}
        {isExpanded && (
          <div className="mb-6 space-y-4">
            {/* Cookies nécessaires */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
              <div>
                <h3 className="font-semibold">{t.categories.necessary.title}</h3>
                <p className="text-sm text-gray-600">{t.categories.necessary.description}</p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.necessary}
                  disabled
                  className="w-4 h-4 accent-blue-600"
                />
              </div>
            </div>

            {/* Cookies analytics */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
              <div>
                <h3 className="font-semibold">{t.categories.analytics.title}</h3>
                <p className="text-sm text-gray-600">{t.categories.analytics.description}</p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.analytics}
                  onChange={() => toggleCategory('analytics')}
                  className="w-4 h-4 accent-blue-600"
                />
              </div>
            </div>

            {/* Cookies marketing */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
              <div>
                <h3 className="font-semibold">{t.categories.marketing.title}</h3>
                <p className="text-sm text-gray-600">{t.categories.marketing.description}</p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={settings.marketing}
                  onChange={() => toggleCategory('marketing')}
                  className="w-4 h-4 accent-blue-600"
                />
              </div>
            </div>
          </div>
        )}

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row items-center justify-end space-y-2 sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleRefuseAll}
            className="text-gray-600 hover:text-gray-800 text-sm"
          >
            {t.buttons.refuseAll}
          </button>
          <button
            onClick={handleAcceptSelected}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            {t.buttons.acceptSelected}
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {t.buttons.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}