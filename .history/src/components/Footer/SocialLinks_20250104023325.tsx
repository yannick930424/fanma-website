import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

const socialLinks = {
  linkedin: "https://www.linkedin.com/company/fanma-expert-conseil",
  twitter: "https://twitter.com/fanma",
  facebook: "https://facebook.com/fanma"
};

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a href={socialLinks.linkedin} className="text-gray-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-6 h-6" />
      </a>
      <a href={socialLinks.twitter} className="text-gray-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
        <Twitter className="w-6 h-6" />
      </a>
      <a href={socialLinks.facebook} className="text-gray-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
        <Facebook className="w-6 h-6" />
      </a>
    </div>
  );
}