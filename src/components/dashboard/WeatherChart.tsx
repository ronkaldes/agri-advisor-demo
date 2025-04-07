
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';
import { WeatherDataPoint } from '@/types/weather';

interface WeatherChartProps {
  data: WeatherDataPoint[];
  title: string;
  dataKey: string;
}

const WeatherChart: React.FC<WeatherChartProps> = ({ data, title, dataKey }) => {
  // קבע צבע לפי סוג הנתונים
  const getLineColor = () => {
    switch (dataKey) {
      case 'temperature':
        return '#FF4500';
      case 'rainfall':
        return '#3D9DFF';
      case 'humidity':
        return '#39CCCC';
      default:
        return '#7C4DFF';
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey={dataKey} 
                stroke={getLineColor()} 
                strokeWidth={2} 
                dot={{ r: 4 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherChart;
