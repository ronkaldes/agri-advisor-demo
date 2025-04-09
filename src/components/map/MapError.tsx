
import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface MapErrorProps {
  error: string;
}

const MapError: React.FC<MapErrorProps> = ({ error }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gray-100 rounded-lg p-4 border border-gray-300">
      <AlertTriangle size={48} className="text-orange-500 mb-4" />
      <h3 className="text-lg font-semibold mb-2">שגיאת טעינת מפה</h3>
      <p className="text-gray-700 text-center mb-3">{error}</p>
      <div className="text-sm text-gray-500 text-center max-w-md">
        <p>כדי להציג את המפה, יש צורך במפתח API תקף של Google Maps המורשה לדומיין הנוכחי.</p>
        <p className="mt-2">אם אתה מנהל האתר, ודא שהדומיין הנוכחי ({window.location.hostname}) מורשה להשתמש במפתח ה-API של Google Maps.</p>
      </div>
      <button
        onClick={handleRefresh}
        className="mt-4 px-4 py-2 bg-agri-green text-white rounded-lg flex items-center"
      >
        <RefreshCw size={16} className="mr-2" />
        נסה שוב
      </button>
    </div>
  );
};

export default MapError;
