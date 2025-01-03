import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ApplicationCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({ 
  icon: Icon, 
  title, 
  description 
}) => (
  <div className="bg-gray-50 p-6 rounded-lg">
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold text-blue-600 mb-4">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);