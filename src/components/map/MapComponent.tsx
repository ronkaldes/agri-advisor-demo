
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { MapPin, Layers, Minus, Plus } from 'lucide-react';

// מיקום ברירת מחדל - הוד השרון
const DEFAULT_CENTER = { lat: 32.1558, lng: 34.8934 };
const DEFAULT_ZOOM = 14;

// ממשק עבור Google Maps
declare global {
  interface Window {
    google: any;
  }
}

// רכיב ראשי של המפה
const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // מפתח API של Google Maps - בסביבת הפיתוח זה מוצג כדוגמה
    // בסביבת הייצור צריך להשתמש במפתח אמיתי מוסתר בסביבת השרת
    const API_KEY = 'AIzaSyC6F1gKcN1Wmp4gqdnXCR4aVGvQvhVwGzk'; // מפתח לדוגמה - יש להחליף בסביבת ייצור
    
    if (!mapRef.current) return;
    
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
          
          // הוסף שטחים חקלאיים כדוגמה (במקום אמיתי, אלו יבואו מהדאטאבייס)
          addExampleFields(map);
        }
      })
      .catch(err => {
        console.error('שגיאה בטעינת המפה:', err);
        setError('שגיאה בטעינת המפה, אנא נסה שוב מאוחר יותר');
      });
  }, []);
  
  // פונקציה להוספת שטחים חקלאיים לדוגמה
  const addExampleFields = (map: google.maps.Map) => {
    const fields = [
      {
        name: 'שדה 1',
        path: [
          { lat: 32.1558, lng: 34.8934 },
          { lat: 32.1568, lng: 34.8954 },
          { lat: 32.1548, lng: 34.8974 },
          { lat: 32.1538, lng: 34.8954 },
        ],
        color: '#3D9970',
      },
      {
        name: 'שדה 2',
        path: [
          { lat: 32.1518, lng: 34.8914 },
          { lat: 32.1528, lng: 34.8934 },
          { lat: 32.1508, lng: 34.8944 },
          { lat: 32.1498, lng: 34.8924 },
        ],
        color: '#FF851B',
      },
    ];
    
    fields.forEach(field => {
      const polygon = new window.google.maps.Polygon({
        paths: field.path,
        strokeColor: field.color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: field.color,
        fillOpacity: 0.35,
        editable: false,
        map: map
      });
      
      // הוסף מאזין לחיצה שיציג מידע
      window.google.maps.event.addListener(polygon, 'click', () => {
        alert(`שם השדה: ${field.name}`);
      });
    });
  };
  
  // התמקד במיקום הנוכחי של המשתמש
  const centerOnUserLocation = () => {
    if (!mapInstance) return;
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          mapInstance.setCenter(pos);
          mapInstance.setZoom(16);
          
          // הוסף סמן למיקום המשתמש
          new window.google.maps.Marker({
            position: pos,
            map: mapInstance,
            title: 'המיקום שלך',
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: '#4285F4',
              fillOpacity: 1,
              strokeColor: '#fff',
              strokeWeight: 2,
            },
          });
        },
        () => {
          setError('לא ניתן לקבל את המיקום שלך');
        }
      );
    } else {
      setError('הדפדפן שלך לא תומך בשירותי מיקום');
    }
  };
  
  // התקרב/התרחק
  const zoomIn = () => mapInstance?.setZoom((mapInstance.getZoom() || DEFAULT_ZOOM) + 1);
  const zoomOut = () => mapInstance?.setZoom((mapInstance.getZoom() || DEFAULT_ZOOM) - 1);
  
  if (error) {
    return (
      <div className="bg-red-100 text-red-800 p-4 rounded-md">
        <p>{error}</p>
      </div>
    );
  }
  
  return (
    <div className="relative h-full w-full rounded-lg overflow-hidden">
      <div ref={mapRef} className="h-full w-full" />
      
      {/* כפתורי שליטה */}
      {mapLoaded && (
        <div className="absolute bottom-4 left-4 flex flex-col gap-2">
          <button
            onClick={centerOnUserLocation}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            title="עבור למיקום שלי"
          >
            <MapPin size={24} className="text-agri-blue" />
          </button>
          
          <button
            onClick={zoomIn}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            title="התקרב"
          >
            <Plus size={24} />
          </button>
          
          <button
            onClick={zoomOut}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            title="התרחק"
          >
            <Minus size={24} />
          </button>
          
          <button
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            title="הוסף שכבות"
          >
            <Layers size={24} className="text-agri-green" />
          </button>
        </div>
      )}
      
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
          <div className="text-center">
            <p className="mb-2">טוען מפה...</p>
            <div className="w-8 h-8 border-t-2 border-agri-green rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
