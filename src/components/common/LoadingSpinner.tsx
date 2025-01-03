import React from 'react';
import { Loader } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75">
      <Loader className="w-8 h-8 text-blue-600 animate-spin" />
    </div>
  );
}