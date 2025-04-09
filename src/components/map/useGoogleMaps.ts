
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
    // Google Maps API key - from environment variable with fallback
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
    
    // Add referrer domains to allow the map to work on multiple domains
    const referrers = ['localhost', 'thetofficial.app', 'agri.thetofficial.app', 'lovableproject.com'];
    
    loader.load()
      .then(() => {
        if (mapRef.current && window.google) {
          // Check if we already have access to the Maps API
          try {
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
          } catch (mapErr) {
            console.error('Error initializing map:', mapErr);
            setError('שגיאה באתחול המפה. נסה לרענן את הדף.');
          }
        }
      })
      .catch(err => {
        console.error('שגיאה בטעינת המפה:', err);
        setError('שגיאה בטעינת המפה. ודא שמפתח ה-API תקף ומורשה להשתמש באתר זה.');
      });
  }, [mapRef]);

  return { mapInstance, mapLoaded, error };
};
