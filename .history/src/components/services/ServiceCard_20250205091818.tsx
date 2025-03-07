import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { translations } from '../../i18n/translations';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  features?: string[];
  isDetailed?: boolean;
}

export default function ServiceCard({ 
  title, 
  description, 
  image, 
  link, 
  features,
  isDetailed = false 
}: ServiceCardProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] ${
      isDetailed ? 'flex flex-col' : ''
    }`}>
      <div className="relative h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        </div>
      </div>
      
      <div className="p-6 flex-grow">
        <p className="text-gray-600 mb-6">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <span className="text-blue-600 mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        <Link 
          to={link}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
        >
          {t.common.learnMore} <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}