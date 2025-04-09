
import React, { useRef } from 'react';
import { useGoogleMaps } from './useGoogleMaps';
import MapFields from './MapFields';
import MapControls from './MapControls';
import MapError from './MapError';
import MapLoading from './MapLoading';
import { toast } from "@/components/ui/use-toast";

// Google Maps interface
declare global {
  interface Window {
    google: any;
  }
}

// Main map component
const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { mapInstance, mapLoaded, error } = useGoogleMaps({ mapRef });
  
  // Display toast notification on successful map load
  React.useEffect(() => {
    if (mapLoaded && mapInstance) {
      toast({
        title: "המפה נטענה בהצלחה",
        description: "ניתן לצפות בחלקות והשדות השונים",
        duration: 3000,
      });
    }
  }, [mapLoaded, mapInstance]);
  
  // If there's an error, display error component
  if (error) {
    return <MapError error={error} />;
  }
  
  return (
    <div className="relative h-full w-full rounded-lg overflow-hidden">
      <div ref={mapRef} className="h-full w-full" />
      
      {/* Render fields on the map when loaded */}
      {mapLoaded && mapInstance && (
        <MapFields mapInstance={mapInstance} />
      )}
      
      {/* Control buttons */}
      {mapLoaded && mapInstance && (
        <MapControls mapInstance={mapInstance} />
      )}
      
      {/* Loading indicator */}
      {!mapLoaded && !error && (
        <MapLoading />
      )}
    </div>
  );
};

export default MapComponent;
