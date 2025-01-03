import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

export default function ContactInfo() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <ul className="space-y-2 text-sm text-gray-400">
      <li className="flex items-start">
        <MapPin className="w-5 h-5 mr-2 mt-1" />
        <span>{t.footer.address}</span>
      </li>
      <li className="flex items-center">
        <Phone className="w-5 h-5 mr-2" />
        <span>{t.footer.phone}</span>
      </li>
      <li className="flex items-center">
        <Mail className="w-5 h-5 mr-2" />
        <span>{t.footer.email}</span>
      </li>
    </ul>
  );
}