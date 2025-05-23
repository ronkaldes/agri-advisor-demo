import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import FieldCard from '@/components/home/FieldCard';
import WeatherSummary from '@/components/home/WeatherSummary';
import ActivityList from '@/components/home/ActivityList';
import MapComponent from '@/components/map/MapComponent';
import { CloudRain, Cloud, Sun, CloudDrizzle, Wind } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const fields = [
    {
      id: '1',
      name: 'חלקה מערבית',
      crop: 'עגבניות',
      area: 15.5,
      nextActivity: {
        type: 'ריסוס',
        date: '05/04/2025'
      },
      status: 'warning' as 'normal' | 'warning' | 'alert'
    },
    {
      id: '2',
      name: 'חלקה מזרחית',
      crop: 'פלפלים',
      area: 12.3,
      nextActivity: {
        type: 'השקייה',
        date: '08/04/2025'
      },
      status: 'normal' as 'normal' | 'warning' | 'alert'
    },
    {
      id: '3',
      name: 'חלקה צפונית',
      crop: 'תירס',
      area: 18.7,
      nextActivity: {
        type: 'דישון',
        date: '01/04/2025'
      },
      status: 'alert' as 'normal' | 'warning' | 'alert'
    }
  ];
  
  const upcomingActivities = [
    {
      id: '1',
      type: 'ריסוס',
      fieldName: 'חלקה מערבית',
      date: '05/04/2025',
      status: 'pending' as 'pending' | 'overdue' | 'completed',
      details: 'ריסוס נגד כנימות עלה'
    },
    {
      id: '2',
      type: 'השקייה',
      fieldName: 'חלקה מזרחית',
      date: '08/04/2025',
      status: 'pending' as 'pending' | 'overdue' | 'completed'
    },
    {
      id: '3',
      type: 'דישון',
      fieldName: 'חלקה צפונית',
      date: '01/04/2025',
      status: 'overdue' as 'pending' | 'overdue' | 'completed',
      details: 'דישון חנקתי'
    }
  ];
  
  const weatherData = {
    location: 'הוד השרון',
    current: {
      temp: 28,
      condition: 'בהיר',
      humidity: 45,
      windSpeed: 12,
      rainChance: 0
    },
    forecast: [
      {
        day: 'א׳',
        condition: 'בהיר',
        tempMax: 30,
        tempMin: 22,
        icon: <Sun size={24} className="text-agri-yellow mx-auto" />
      },
      {
        day: 'ב׳',
        condition: 'מעונן חלקית',
        tempMax: 29,
        tempMin: 21,
        icon: <Cloud size={24} className="text-gray-400 mx-auto" />
      },
      {
        day: 'ג׳',
        condition: 'מעונן',
        tempMax: 27,
        tempMin: 20,
        icon: <Cloud size={24} className="text-gray-500 mx-auto" />
      },
      {
        day: 'ד׳',
        condition: 'גשום',
        tempMax: 24,
        tempMin: 19,
        icon: <CloudRain size={24} className="text-agri-blue mx-auto" />
      },
      {
        day: 'ה׳',
        condition: 'בהיר',
        tempMax: 26,
        tempMin: 18,
        icon: <Sun size={24} className="text-agri-yellow mx-auto" />
      }
    ]
  };
  
  if (isLoading) {
    return (
      <Layout title="טוען...">
        <div className="flex items-center justify-center h-[70vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-t-agri-green border-gray-200 rounded-full animate-spin mb-4 mx-auto"></div>
            <p className="text-xl">טוען את נתוני החווה...</p>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout title="ברוכים הבאים לאדמה חכמה">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">מפת החלקות</h2>
            <div className="h-[400px] w-full bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
              <MapComponent />
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">חלקות שלי</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {fields.map((field) => (
                <FieldCard
                  key={field.id}
                  id={field.id}
                  name={field.name}
                  crop={field.crop}
                  area={field.area}
                  nextActivity={field.nextActivity}
                  status={field.status}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <div className="mb-6">
            <WeatherSummary
              location={weatherData.location}
              current={weatherData.current}
              forecast={weatherData.forecast}
            />
          </div>
          
          <div>
            <ActivityList 
              activities={upcomingActivities} 
              title="פעילויות קרובות"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
