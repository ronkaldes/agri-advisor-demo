
import React from 'react';

const MapLoading: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
      <div className="text-center">
        <p className="mb-2">טוען מפה...</p>
        <div className="w-8 h-8 border-t-2 border-agri-green rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
};

export default MapLoading;
