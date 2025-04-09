
import React from 'react';
import { MapPin, Layers, Minus, Plus } from 'lucide-react';

interface MapControlsProps {
  mapInstance: google.maps.Map | null;
}

const MapControls: React.FC<MapControlsProps> = ({ mapInstance }) => {
  // Center on user's current location
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
          
          // Add marker to user's location
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
          alert('לא ניתן לקבל את המיקום שלך');
        }
      );
    } else {
      alert('הדפדפן שלך לא תומך בשירותי מיקום');
    }
  };
  
  // Zoom in/out functions
  const zoomIn = () => mapInstance?.setZoom((mapInstance.getZoom() || 14) + 1);
  const zoomOut = () => mapInstance?.setZoom((mapInstance.getZoom() || 14) - 1);
  
  return (
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
  );
};

export default MapControls;
