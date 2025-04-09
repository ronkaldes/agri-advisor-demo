
import React from 'react';
import { Map } from 'lucide-react';

const MapLoading: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm">
      <div className="text-center bg-white p-6 rounded-lg shadow-md">
        <Map size={48} className="text-agri-green mx-auto animate-pulse mb-2" />
        <p className="mb-3 text-lg font-medium">טוען מפה...</p>
        <div className="w-12 h-12 border-t-3 border-r-3 border-agri-green rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-sm text-gray-500">מאתר את החלקות החקלאיות באזור הוד השרון</p>
      </div>
    </div>
  );
};

export default MapLoading;
