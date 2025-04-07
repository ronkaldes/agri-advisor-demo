
import React from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

interface FieldCardProps {
  id: string;
  name: string;
  crop: string;
  area: number;
  nextActivity?: {
    type: string;
    date: string;
  };
  status: 'normal' | 'warning' | 'alert';
}

const FieldCard: React.FC<FieldCardProps> = ({
  id,
  name,
  crop,
  area,
  nextActivity,
  status
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'alert':
        return 'border-r-agri-red';
      case 'warning':
        return 'border-r-agri-orange';
      default:
        return 'border-r-agri-green';
    }
  };
  
  return (
    <div className={`agri-card border-r-4 ${getStatusColor()} animate-fade-in`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-gray-500">{crop}</p>
          <p className="text-sm">{area} דונם</p>
        </div>
        
        {nextActivity && (
          <div className="text-left text-sm">
            <p className="text-gray-500">פעילות קרובה:</p>
            <p>{nextActivity.type}</p>
            <p className="text-xs text-gray-500 mt-1">{nextActivity.date}</p>
          </div>
        )}
      </div>
      
      <div className="mt-3 text-left">
        <Link to={`/fields/${id}`} className="inline-flex items-center text-agri-blue hover:text-agri-navy transition-colors">
          <span>פרטים נוספים</span>
          <BiChevronLeft size={20} />
        </Link>
      </div>
    </div>
  );
};

export default FieldCard;
