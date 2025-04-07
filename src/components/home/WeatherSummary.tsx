
import React from 'react';
import { BiCloudRain, BiSun, BiWind, BiDroplet } from 'react-icons/bi';

interface WeatherSummaryProps {
  location: string;
  current: {
    temp: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    rainChance: number;
  };
  forecast: Array<{
    day: string;
    condition: string;
    tempMax: number;
    tempMin: number;
    icon: React.ReactNode;
  }>;
}

const WeatherSummary: React.FC<WeatherSummaryProps> = ({
  location,
  current,
  forecast
}) => {
  return (
    <div className="agri-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">מזג אוויר - {location}</h3>
        <Link to="/weather" className="text-sm text-agri-blue hover:underline">
          תחזית מלאה
        </Link>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <BiSun size={38} className="text-agri-yellow ml-3" />
          <div>
            <p className="text-2xl font-bold">{current.temp}°C</p>
            <p className="text-sm text-gray-500">{current.condition}</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <BiDroplet size={20} className="text-agri-blue mb-1" />
            <p className="text-sm">{current.humidity}%</p>
          </div>
          <div className="flex flex-col items-center">
            <BiWind size={20} className="text-agri-gray mb-1" />
            <p className="text-sm">{current.windSpeed} קמ"ש</p>
          </div>
          <div className="flex flex-col items-center">
            <BiCloudRain size={20} className="text-agri-blue mb-1" />
            <p className="text-sm">{current.rainChance}%</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-5 gap-2">
        {forecast.map((day) => (
          <div key={day.day} className="text-center">
            <p className="text-sm mb-1">{day.day}</p>
            <div className="mb-1">{day.icon}</div>
            <p className="text-sm font-medium">{day.tempMax}°</p>
            <p className="text-sm text-gray-500">{day.tempMin}°</p>
          </div>
        ))}
      </div>
    </div>
  );
};

import { Link } from 'react-router-dom';

export default WeatherSummary;
