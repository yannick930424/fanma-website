import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features 
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold text-blue-600 mb-4">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start space-x-2">
          <span className="text-blue-600 font-bold">•</span>
          <span className="text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);