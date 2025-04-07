
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { BiChevronLeft, BiCalendar } from 'react-icons/bi';
import { Link } from 'react-router-dom';

interface Activity {
  id: string;
  type: string;
  fieldName: string;
  date: string;
  status: 'pending' | 'overdue' | 'completed';
  details?: string;
}

interface ActivityListProps {
  activities: Activity[];
  title: string;
}

const ActivityList: React.FC<ActivityListProps> = ({ activities, title }) => {
  const getStatusBadge = (status: Activity['status']) => {
    switch (status) {
      case 'overdue':
        return <Badge className="bg-agri-red">באיחור</Badge>;
      case 'pending':
        return <Badge className="bg-agri-orange">ממתין</Badge>;
      case 'completed':
        return <Badge className="bg-agri-green">הושלם</Badge>;
    }
  };
  
  return (
    <div className="agri-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">{title}</h3>
        <Link to="/activities" className="text-sm text-agri-blue hover:underline">
          כל הפעילויות
        </Link>
      </div>
      
      {activities.length === 0 ? (
        <p className="text-center text-gray-500 py-4">אין פעילויות לתצוגה</p>
      ) : (
        <div className="space-y-3">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className="p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{activity.type}</h4>
                  <p className="text-sm text-gray-500">{activity.fieldName}</p>
                </div>
                <div className="flex flex-col items-end">
                  {getStatusBadge(activity.status)}
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <BiCalendar className="ml-1" />
                    <span>{activity.date}</span>
                  </div>
                </div>
              </div>
              
              {activity.details && (
                <p className="text-sm mt-2 text-gray-600">{activity.details}</p>
              )}
              
              <div className="mt-2 text-left">
                <Link 
                  to={`/activities/${activity.id}`} 
                  className="inline-flex items-center text-xs text-agri-blue hover:text-agri-navy transition-colors"
                >
                  <span>פרטים נוספים</span>
                  <BiChevronLeft size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActivityList;
