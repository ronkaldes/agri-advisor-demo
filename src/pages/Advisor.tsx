
import React from 'react';
import Layout from '@/components/layout/Layout';
import AdvisorChat from '@/components/advisor/AdvisorChat';

const Advisor = () => {
  return (
    <Layout title="יועץ חקלאי">
      <div className="max-w-4xl mx-auto">
        <AdvisorChat />
      </div>
    </Layout>
  );
};

export default Advisor;
