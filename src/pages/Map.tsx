
import React from 'react';
import Layout from '@/components/layout/Layout';
import MapComponent from '@/components/map/MapComponent';

const Map = () => {
  return (
    <Layout title="מפת גידולים">
      <div className="h-[800px] w-full">
        <MapComponent />
      </div>
    </Layout>
  );
};

export default Map;
