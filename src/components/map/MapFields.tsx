
import React, { useEffect } from 'react';

// Interface for field properties
interface Field {
  name: string;
  path: { lat: number; lng: number }[];
  color: string;
}

interface MapFieldsProps {
  mapInstance: google.maps.Map | null;
}

// Example agricultural fields data (in a real app, this would come from a database)
const exampleFields: Field[] = [
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

const MapFields: React.FC<MapFieldsProps> = ({ mapInstance }) => {
  useEffect(() => {
    if (!mapInstance || !window.google) return;

    // Store polygon references to clean up on unmount
    const polygons: google.maps.Polygon[] = [];
    
    // Add field polygons to the map
    exampleFields.forEach(field => {
      const polygon = new window.google.maps.Polygon({
        paths: field.path,
        strokeColor: field.color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: field.color,
        fillOpacity: 0.35,
        editable: false,
        map: mapInstance
      });
      
      // Add click listener to display info
      window.google.maps.event.addListener(polygon, 'click', () => {
        alert(`שם השדה: ${field.name}`);
      });
      
      polygons.push(polygon);
    });
    
    // Clean up on unmount
    return () => {
      polygons.forEach(polygon => {
        polygon.setMap(null);
      });
    };
  }, [mapInstance]);

  // This component doesn't render anything directly, it just adds fields to the map
  return null;
};

export default MapFields;
