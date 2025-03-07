import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations } from '../../i18n/translations';
import { useLanguage } from '../../hooks/useLanguage';

interface ServiceSectionProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  link: string;
  isReversed?: boolean;
}

export default function ServiceSection({
  title,
  description,
  image,
  features,
  link,
  isReversed = false
}: ServiceSectionProps) {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          isReversed ? 'lg:flex-row-reverse' : ''
        }`}>
          <div className={`space-y-6 ${isReversed ? 'lg:pl-12' : 'lg:pr-12'}`}>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {description}
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to={link}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
            >
              {t.common.learnMore}
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}