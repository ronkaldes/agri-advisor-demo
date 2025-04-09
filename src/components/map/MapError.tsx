
import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface MapErrorProps {
  error: string;
}

const MapError: React.FC<MapErrorProps> = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gray-100 rounded-lg p-4 border border-gray-300">
      <AlertTriangle size={48} className="text-orange-500 mb-4" />
      <h3 className="text-lg font-semibold mb-2">שגיאת טעינת מפה</h3>
      <p className="text-gray-700 text-center mb-3">{error}</p>
      <div className="text-sm text-gray-500 text-center max-w-md">
        <p>כדי להציג את המפה, יש צורך במפתח API תקף של Google Maps.</p>
        <p className="mt-2">הוסף משתנה סביבה VITE_GOOGLE_MAPS_API_KEY או ודא שהמפתח שלך אינו מוגבל.</p>
      </div>
    </div>
  );
};

export default MapError;
