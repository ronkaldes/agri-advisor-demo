
import React from 'react';
import Layout from '@/components/layout/Layout';
import WeatherChart from '@/components/dashboard/WeatherChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BiCloudRain, BiSun, BiCloud, BiWind, BiDroplet } from 'react-icons/bi';

const Weather = () => {
  // נתונים לדוגמה - תחזית ל-7 ימים
  const forecast = [
    {
      date: '7.4.25',
      day: 'יום א׳',
      condition: 'בהיר',
      tempMax: 30,
      tempMin: 22,
      humidity: 45,
      windSpeed: 12,
      rainChance: 0,
      icon: <BiSun size={36} className="text-yellow-500" />
    },
    {
      date: '8.4.25',
      day: 'יום ב׳',
      condition: 'מעונן חלקית',
      tempMax: 29,
      tempMin: 21,
      humidity: 50,
      windSpeed: 10,
      rainChance: 10,
      icon: <BiCloud size={36} className="text-gray-400" />
    },
    {
      date: '9.4.25',
      day: 'יום ג׳',
      condition: 'מעונן',
      tempMax: 27,
      tempMin: 20,
      humidity: 55,
      windSpeed: 15,
      rainChance: 20,
      icon: <BiCloud size={36} className="text-gray-500" />
    },
    {
      date: '10.4.25',
      day: 'יום ד׳',
      condition: 'גשום',
      tempMax: 24,
      tempMin: 19,
      humidity: 75,
      windSpeed: 20,
      rainChance: 80,
      icon: <BiCloudRain size={36} className="text-blue-500" />
    },
    {
      date: '11.4.25',
      day: 'יום ה׳',
      condition: 'גשם קל',
      tempMax: 26,
      tempMin: 18,
      humidity: 65,
      windSpeed: 18,
      rainChance: 40,
      icon: <BiCloudRain size={36} className="text-blue-400" />
    },
    {
      date: '12.4.25',
      day: 'יום ו׳',
      condition: 'בהיר',
      tempMax: 28,
      tempMin: 20,
      humidity: 55,
      windSpeed: 12,
      rainChance: 0,
      icon: <BiSun size={36} className="text-yellow-500" />
    },
    {
      date: '13.4.25',
      day: 'שבת',
      condition: 'בהיר',
      tempMax: 29,
      tempMin: 21,
      humidity: 50,
      windSpeed: 10,
      rainChance: 0,
      icon: <BiSun size={36} className="text-yellow-500" />
    }
  ];
  
  // נתונים לדוגמה - מזג אוויר
  const temperatureData = [
    { date: '01/04 יום א', temperature: 28 },
    { date: '02/04 יום ב', temperature: 29 },
    { date: '03/04 יום ג', temperature: 27 },
    { date: '04/04 יום ד', temperature: 24 },
    { date: '05/04 יום ה', temperature: 26 },
    { date: '06/04 יום ו', temperature: 25 },
    { date: '07/04 שבת', temperature: 27 },
    { date: '08/04 יום א', temperature: 28 },
    { date: '09/04 יום ב', temperature: 26 },
    { date: '10/04 יום ג', temperature: 25 },
    { date: '11/04 יום ד', temperature: 24 },
    { date: '12/04 יום ה', temperature: 25 },
    { date: '13/04 יום ו', temperature: 27 },
    { date: '14/04 שבת', temperature: 28 },
  ];
  
  const rainfallData = [
    { date: '01/04 יום א', rainfall: 0 },
    { date: '02/04 יום ב', rainfall: 0 },
    { date: '03/04 יום ג', rainfall: 0 },
    { date: '04/04 יום ד', rainfall: 8 },
    { date: '05/04 יום ה', rainfall: 2 },
    { date: '06/04 יום ו', rainfall: 0 },
    { date: '07/04 שבת', rainfall: 0 },
    { date: '08/04 יום א', rainfall: 0 },
    { date: '09/04 יום ב', rainfall: 0 },
    { date: '10/04 יום ג', rainfall: 5 },
    { date: '11/04 יום ד', rainfall: 12 },
    { date: '12/04 יום ה', rainfall: 3 },
    { date: '13/04 יום ו', rainfall: 0 },
    { date: '14/04 שבת', rainfall: 0 },
  ];
  
  const humidityData = [
    { date: '01/04 יום א', humidity: 45 },
    { date: '02/04 יום ב', humidity: 50 },
    { date: '03/04 יום ג', humidity: 55 },
    { date: '04/04 יום ד', humidity: 75 },
    { date: '05/04 יום ה', humidity: 65 },
    { date: '06/04 יום ו', humidity: 55 },
    { date: '07/04 שבת', humidity: 45 },
    { date: '08/04 יום א', humidity: 50 },
    { date: '09/04 יום ב', humidity: 55 },
    { date: '10/04 יום ג', humidity: 65 },
    { date: '11/04 יום ד', humidity: 80 },
    { date: '12/04 יום ה', humidity: 70 },
    { date: '13/04 יום ו', humidity: 55 },
    { date: '14/04 שבת', humidity: 50 },
  ];
  
  return (
    <Layout title="מזג אוויר - הוד השרון">
      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">תחזית לשבוע הקרוב</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {forecast.map((day) => (
                <div 
                  key={day.date} 
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
                >
                  <p className="font-bold">{day.day}</p>
                  <p className="text-sm text-gray-500">{day.date}</p>
                  <div className="my-2">{day.icon}</div>
                  <p className="font-medium">{day.condition}</p>
                  <div className="flex justify-between w-full mt-2">
                    <span className="text-agri-red font-bold">{day.tempMax}°</span>
                    <span className="text-agri-blue">{day.tempMin}°</span>
                  </div>
                  <div className="flex justify-between w-full mt-3 text-sm">
                    <div className="flex items-center">
                      <BiDroplet className="text-agri-blue" />
                      <span className="mr-1">{day.humidity}%</span>
                    </div>
                    <div className="flex items-center">
                      <BiWind className="text-agri-gray" />
                      <span className="mr-1">{day.windSpeed}</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center text-sm">
                    <BiCloudRain className="text-agri-blue" />
                    <span className="mr-1">{day.rainChance}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3">
          <WeatherChart 
            data={temperatureData} 
            title="טמפרטורה (14 יום)" 
            dataKey="temperature" 
          />
        </div>
        
        <WeatherChart 
          data={rainfallData} 
          title="משקעים (14 יום)" 
          dataKey="rainfall" 
        />
        
        <WeatherChart 
          data={humidityData} 
          title="לחות (14 יום)" 
          dataKey="humidity" 
        />
        
        <Card>
          <CardHeader>
            <CardTitle>המלצות חקלאיות</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border border-gray-200 rounded-md">
                <h4 className="font-medium mb-1">השקיה</h4>
                <p className="text-sm">
                  בשל הטמפרטורות הגבוהות הצפויות בשבוע הקרוב, מומלץ להגביר את תדירות ההשקיה ב-15% בגידולי שדה פתוח.
                </p>
              </div>
              
              <div className="p-3 border border-gray-200 rounded-md">
                <h4 className="font-medium mb-1">הגנת הצומח</h4>
                <p className="text-sm">
                  לאחר הגשם הצפוי ביום רביעי, מומלץ לבצע טיפול מניעתי נגד מחלות פטרייתיות ביום חמישי.
                </p>
              </div>
              
              <div className="p-3 border border-gray-200 rounded-md">
                <h4 className="font-medium mb-1">אזור הוד השרון</h4>
                <p className="text-sm">
                  הטמפרטורות בלילה צפויות לרדת ל-18 מעלות בסוף השבוע. יש לנקוט באמצעי זהירות לגידולים רגישים לקור.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Weather;
