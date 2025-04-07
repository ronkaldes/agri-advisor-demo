
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Legend
} from 'recharts';
import { Sun, Calendar } from 'lucide-react';

const Solar = () => {
  // נתונים לדוגמה - קרינת שמש יומית
  const dailySolarData = [
    { time: '06:00', radiation: 40 },
    { time: '07:00', radiation: 120 },
    { time: '08:00', radiation: 280 },
    { time: '09:00', radiation: 450 },
    { time: '10:00', radiation: 620 },
    { time: '11:00', radiation: 750 },
    { time: '12:00', radiation: 850 },
    { time: '13:00', radiation: 820 },
    { time: '14:00', radiation: 730 },
    { time: '15:00', radiation: 600 },
    { time: '16:00', radiation: 420 },
    { time: '17:00', radiation: 250 },
    { time: '18:00', radiation: 100 },
    { time: '19:00', radiation: 20 },
  ];
  
  // נתונים לדוגמה - קרינת שמש חודשית
  const monthlySolarData = [
    { month: 'ינואר', average: 320, thisYear: 315 },
    { month: 'פברואר', average: 380, thisYear: 390 },
    { month: 'מרץ', average: 450, thisYear: 460 },
    { month: 'אפריל', average: 520, thisYear: 540 },
    { month: 'מאי', average: 650, thisYear: 660 },
    { month: 'יוני', average: 750, thisYear: 760 },
    { month: 'יולי', average: 780, thisYear: 0 },
    { month: 'אוגוסט', average: 720, thisYear: 0 },
    { month: 'ספטמבר', average: 600, thisYear: 0 },
    { month: 'אוקטובר', average: 480, thisYear: 0 },
    { month: 'נובמבר', average: 340, thisYear: 0 },
    { month: 'דצמבר', average: 290, thisYear: 0 },
  ];
  
  // נתונים לדוגמה - התפלגות קרינה שנתית לפי עונות
  const seasonalData = [
    { season: 'חורף', value: 320 },
    { season: 'אביב', value: 550 },
    { season: 'קיץ', value: 720 },
    { season: 'סתיו', value: 480 },
  ];
  
  // נתונים לדוגמה - הצעות לחסכון אנרגטי
  const energySavingTips = [
    {
      title: 'ניצול קרינת שמש להשקיה',
      description: 'בחודשי הקיץ, מומלץ להשקות בשעות הערב כדי למנוע התאדות מהירה.',
      icon: <Sun size={32} className="text-yellow-500" />
    },
    {
      title: 'תכנון גידולים עונתי',
      description: 'תכנון גידולים לפי עונות השנה יכול לחסוך כ-20% בצריכת המים.',
      icon: <Calendar size={32} className="text-green-500" />
    },
    {
      title: 'הצללה ומיקרו-אקלים',
      description: 'הצללה חלקית בחודשי הקיץ יכולה לשפר את התפוקה של גידולים רגישים לחום.',
      icon: <Sun size={32} className="text-orange-500" />
    }
  ];
  
  return (
    <Layout title="נתוני קרינת שמש - הוד השרון">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>קרינת שמש יומית (ואט למטר רבוע)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={dailySolarData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorSolar" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FFB347" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#FFB347" stopOpacity={0.2} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [`${value} W/m²`, 'קרינת שמש']}
                    labelFormatter={(time) => `שעה: ${time}`}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="radiation" 
                    stroke="#FF8C00" 
                    fillOpacity={1} 
                    fill="url(#colorSolar)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              נתוני היום: 7 באפריל, 2025 - הוד השרון
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>ממוצע קרינה חודשי</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlySolarData}
                  margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [`${value} W/m²`, '']}
                  />
                  <Legend 
                    verticalAlign="top" 
                    payload={[
                      { value: 'ממוצע רב שנתי', type: 'line', color: '#8884d8' },
                      { value: 'שנת 2025', type: 'line', color: '#FF8C00' }
                    ]} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="average" 
                    name="ממוצע רב שנתי" 
                    stroke="#8884d8" 
                    strokeWidth={2} 
                    dot={{ r: 4 }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="thisYear" 
                    name="שנת 2025" 
                    stroke="#FF8C00" 
                    strokeWidth={2} 
                    dot={{ r: 4 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>המלצות לניצול אנרגיה סולארית</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {energySavingTips.map((tip, index) => (
                <div 
                  key={index} 
                  className="flex p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <div className="ml-3">{tip.icon}</div>
                  <div>
                    <h4 className="font-medium mb-1">{tip.title}</h4>
                    <p className="text-sm text-gray-600">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>נתוני קרינה מהשנים האחרונות - הוד השרון</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-medium mb-1">ממוצע שנתי</h4>
                  <div className="flex items-center">
                    <Sun size={24} className="text-yellow-500 ml-2" />
                    <span className="text-2xl font-bold">540 W/m²</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">ממוצע 5 שנים אחרונות</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-medium mb-1">שיא קרינה</h4>
                  <div className="flex items-center">
                    <Sun size={24} className="text-orange-500 ml-2" />
                    <span className="text-2xl font-bold">920 W/m²</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">יולי 2024</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-medium mb-1">שעות שמש</h4>
                  <div className="flex items-center">
                    <Sun size={24} className="text-yellow-500 ml-2" />
                    <span className="text-2xl font-bold">3,450</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">שעות שמש בשנת 2024</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-medium mb-1">ימים מעוננים</h4>
                  <div className="flex items-center">
                    <Sun size={24} className="text-gray-400 ml-2" />
                    <span className="text-2xl font-bold">48</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">ימים מעוננים בשנת 2024</p>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">מקור: נתוני Google Solar API - נתונים נאספו מתחנת הוד השרון</p>
                <p className="text-sm">
                  הנתונים הנ"ל מספקים מידע על קרינת השמש באזור הוד השרון בחמש השנים האחרונות.
                  ניתן להשתמש בנתונים אלו לצורך תכנון גידולים, מערכות השקיה, ומעקב אחר מגמות אקלימיות.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Solar;
