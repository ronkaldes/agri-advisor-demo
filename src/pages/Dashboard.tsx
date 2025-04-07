
import React from 'react';
import Layout from '@/components/layout/Layout';
import WeatherChart from '@/components/dashboard/WeatherChart';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  // נתונים לדוגמה - מזג אוויר
  const temperatureData = [
    { date: '01/04 יום א', temperature: 28 },
    { date: '02/04 יום ב', temperature: 29 },
    { date: '03/04 יום ג', temperature: 27 },
    { date: '04/04 יום ד', temperature: 24 },
    { date: '05/04 יום ה', temperature: 26 },
    { date: '06/04 יום ו', temperature: 25 },
    { date: '07/04 שבת', temperature: 27 },
  ];
  
  const rainfallData = [
    { date: '01/04 יום א', rainfall: 0 },
    { date: '02/04 יום ב', rainfall: 0 },
    { date: '03/04 יום ג', rainfall: 0 },
    { date: '04/04 יום ד', rainfall: 8 },
    { date: '05/04 יום ה', rainfall: 2 },
    { date: '06/04 יום ו', rainfall: 0 },
    { date: '07/04 שבת', rainfall: 0 },
  ];
  
  const humidityData = [
    { date: '01/04 יום א', humidity: 45 },
    { date: '02/04 יום ב', humidity: 50 },
    { date: '03/04 יום ג', humidity: 55 },
    { date: '04/04 יום ד', humidity: 75 },
    { date: '05/04 יום ה', humidity: 65 },
    { date: '06/04 יום ו', humidity: 55 },
    { date: '07/04 שבת', humidity: 45 },
  ];
  
  // נתונים לדוגמה - שעות עבודת מכונות
  const machineUsageData = [
    { name: 'טרקטור 1', hours: 145 },
    { name: 'טרקטור 2', hours: 87 },
    { name: 'מרסס', hours: 75 },
    { name: 'קומביין', hours: 72 },
    { name: 'מכונת דישון', hours: 68 },
  ];
  
  // נתונים לדוגמה - חלוקת זמן בשדה/מחוץ לשדה
  const fieldTimeData = [
    { name: 'בשדה', value: 68 },
    { name: 'מחוץ לשדה', value: 32 }
  ];
  
  const COLORS = ['#3D9970', '#FF4136'];
  
  // נתונים לדוגמה - פעילויות לפי סוג
  const activitiesData = [
    { name: 'ריסוס', count: 12 },
    { name: 'השקיה', count: 24 },
    { name: 'דישון', count: 8 },
    { name: 'קציר', count: 3 },
    { name: 'זריעה', count: 5 }
  ];
  
  return (
    <Layout title="לוח בקרה">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* תרשימי מזג אוויר */}
        <WeatherChart 
          data={temperatureData} 
          title="טמפרטורה (שבועית)" 
          dataKey="temperature" 
        />
        
        <WeatherChart 
          data={rainfallData} 
          title="משקעים (שבועי)" 
          dataKey="rainfall" 
        />
        
        <WeatherChart 
          data={humidityData} 
          title="לחות (שבועית)" 
          dataKey="humidity" 
        />
        
        {/* תרשים פעילויות לפי סוג */}
        <Card>
          <CardHeader>
            <CardTitle>פעילויות לפי סוג</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={activitiesData}
                  margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#39CCCC" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* תרשים שעות עבודת מכונות */}
        <Card>
          <CardHeader>
            <CardTitle>שעות עבודת מכונות</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={machineUsageData}
                  margin={{ top: 10, right: 10, left: 50, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" />
                  <Tooltip />
                  <Bar dataKey="hours" fill="#3D9970" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* תרשים זמן בשדה/מחוץ לשדה */}
        <Card>
          <CardHeader>
            <CardTitle>זמן בשדה/מחוץ לשדה</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={fieldTimeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {fieldTimeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
