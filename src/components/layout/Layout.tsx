
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 ml-16 overflow-y-auto">
        <Header title={title} />
        <main className="container px-4 py-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
