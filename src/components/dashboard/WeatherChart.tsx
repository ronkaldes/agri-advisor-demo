
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

interface WeatherDataPoint {
  date: string;
  temperature: number;
  rainfall: number;
  humidity: number;
}

interface WeatherChartProps {
  data: WeatherDataPoint[];
  title: string;
  dataKey: 'temperature' | 'rainfall' | 'humidity';
}

const WeatherChart: React.FC<WeatherChartProps> = ({ data, title, dataKey }) => {
  const getGradientColors = () => {
    switch (dataKey) {
      case 'temperature':
        return ['#FF9500', '#FF4D6D'];
      case 'rainfall':
        return ['#5BC0EB', '#3A7CA5'];
      case 'humidity':
        return ['#81C3D7', '#4D9DE0'];
      default:
        return ['#9BC53D', '#5C8001'];
    }
  };
  
  const getUnit = () => {
    switch (dataKey) {
      case 'temperature':
        return '°C';
      case 'rainfall':
        return 'מ"מ';
      case 'humidity':
        return '%';
      default:
        return '';
    }
  };
  
  const [color1, color2] = getGradientColors();
  const unit = getUnit();
  
  return (
    <div className="agri-card h-72">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id={`color-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color1} stopOpacity={0.8} />
              <stop offset="95%" stopColor={color2} stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            tickFormatter={(date) => date.split(' ')[0]}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `${value}${unit}`}
          />
          <Tooltip 
            formatter={(value) => [`${value}${unit}`, '']}
            labelFormatter={(label) => label}
          />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={color1}
            fillOpacity={1}
            fill={`url(#color-${dataKey})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
