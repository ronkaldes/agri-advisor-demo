
import { useState, useEffect, RefObject } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

// Default map location - Hod HaSharon
export const DEFAULT_CENTER = { lat: 32.1558, lng: 34.8934 };
export const DEFAULT_ZOOM = 14;

interface UseGoogleMapsProps {
  mapRef: RefObject<HTMLDivElement>;
}

interface UseGoogleMapsReturn {
  mapInstance: google.maps.Map | null;
  mapLoaded: boolean;
  error: string | null;
}

export const useGoogleMaps = ({ mapRef }: UseGoogleMapsProps): UseGoogleMapsReturn => {
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Google Maps API key - from environment variable
    const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyBWAJOW-wip88IIn0vmQtDC6iRXB9jbvTQ';
    
    if (!mapRef.current) return;

    // Check if API key exists
    if (!API_KEY) {
      setError('מפתח API של Google Maps חסר. יש להגדיר משתנה סביבה VITE_GOOGLE_MAPS_API_KEY.');
      return;
    }

    const loader = new Loader({
      apiKey: API_KEY,
      version: 'weekly',
      libraries: ['places', 'drawing', 'geometry']
    });
    
    loader.load()
      .then(() => {
        if (mapRef.current) {
          const map = new window.google.maps.Map(mapRef.current, {
            center: DEFAULT_CENTER,
            zoom: DEFAULT_ZOOM,
            mapTypeId: window.google.maps.MapTypeId.SATELLITE,
            mapTypeControl: true,
            mapTypeControlOptions: {
              position: window.google.maps.ControlPosition.TOP_LEFT
            },
            fullscreenControl: true,
            streetViewControl: false,
            zoomControl: false
          });
          
          setMapInstance(map);
          setMapLoaded(true);
        }
      })
      .catch(err => {
        console.error('שגיאה בטעינת המפה:', err);
        setError('שגיאה בטעינת המפה. ודא שמפתח ה-API תקף וללא הגבלות.');
      });
  }, [mapRef]);

  return { mapInstance, mapLoaded, error };
};
