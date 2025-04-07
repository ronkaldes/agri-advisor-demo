
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BiHomeAlt2, 
  BiTable, 
  BiMap, 
  BiCloudRain, 
  BiSun, 
  BiBot, 
  BiCog 
} from 'react-icons/bi';

const sidebarItems = [
  { path: '/', label: 'בית', icon: <BiHomeAlt2 size={20} /> },
  { path: '/dashboard', label: 'לוח בקרה', icon: <BiTable size={20} /> },
  { path: '/map', label: 'מפת גידולים', icon: <BiMap size={20} /> },
  { path: '/weather', label: 'מזג אוויר', icon: <BiCloudRain size={20} /> },
  { path: '/solar', label: 'נתוני שמש', icon: <BiSun size={20} /> },
  { path: '/advisor', label: 'יועץ חקלאי', icon: <BiBot size={20} /> },
];

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="w-16 bg-sidebar h-screen fixed top-0 right-0 z-50 flex flex-col items-center py-4 transition-all duration-300 hover:w-48 group">
      <div className="mb-8">
        <Link to="/">
          <img 
            src="/lovable-uploads/eced0445-d0fb-449c-9a15-430f8d48e9c9.png" 
            alt="לוגו אדמה חכמה" 
            className="w-10 h-10 rounded-full"
          />
        </Link>
      </div>
      
      <div className="flex flex-col gap-2 w-full">
        {sidebarItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            className={`agri-sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span>{item.icon}</span>
            <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap overflow-hidden transition-all duration-300">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
      
      <div className="mt-auto">
        <Link to="/settings" className="agri-sidebar-item">
          <BiCog size={20} />
          <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap overflow-hidden transition-all duration-300">
            הגדרות
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
