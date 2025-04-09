
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Info, Loader2 } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Improved responses database with more detailed agricultural information
const botResponses: Record<string, string> = {
  'גידול': 'בעונה זו בהוד השרון מומלץ לגדל עגבניות, מלפפונים, פלפלים וחסה. האקלים המתון מתאים במיוחד לגידולים אלו. לעגבניות ופלפלים מומלץ שתילה באדמה עשירה בחומר אורגני ומערכת תמיכה. למלפפונים מומלץ מצע מנוקז היטב.',
  'מזג אוויר': 'בימים הקרובים צפוי להיות יבש וחם בהוד השרון, עם טמפרטורות של 25-32 מעלות. הלחות צפויה להיות בינונית (45-55%). מומלץ להגביר השקיה ולתזמן אותה לשעות הבוקר המוקדמות או שעות הערב.',
  'מזיקים': 'בתקופה זו נפוצים בהוד השרון: כנימות עלה, אקריות, ותריפסים. מומלץ לבצע ניטור פעמיים בשבוע. לטיפול ביולוגי ניתן להשתמש בפרת משה רבנו, צרעות טפיליות, או אקריות טורפות. לטיפול אורגני, ניתן להשתמש בתכשירי נים או סבון אשלגן.',
  'השקיה': 'לפי נתוני הלחות והטמפרטורה באזור הוד השרון, מומלץ להשקות 3 פעמים בשבוע, כ-2.5 קוב לדונם בכל השקיה. בגידולי עלים יש להשקות מעט פחות, וגידולים שרשיים דורשים השקיה עמוקה יותר. כדאי להתקין מערכת טפטוף עם בקר השקיה חכם.',
  'דישון': 'בתקופה זו מומלץ דישון עשיר בחנקן וזרחן. לגידולי עלים מומלץ להגביר את מנת החנקן בדשן. לגידולי פרי מומלץ דשן מאוזן יותר עם תוספת אשלגן. דישון אורגני באמצעות קומפוסט מבשיל מצוין לשיפור פוריות הקרקע לטווח ארוך.',
  'אורגני': 'לחקלאות אורגנית בהוד השרון מומלץ: שימוש בקומפוסט בשל, גידול צמחי כיסוי כמו בקיה וחרדל, מחזור זרעים נכון, ושימוש בחיפוי קרקע אורגני. לבקרת מזיקים, ניתן לשלב מלכודות פרומון, רשתות פיזיות, ואויבים טבעיים כמו צרעות טפיליות.',
  'זריעה': 'בעונה זו מומלץ לזרוע ישירות בקרקע: גזר, צנונית, וחסה. לשתילים מומלץ: עגבניות, פלפל וחציל. שים לב שעומק הזריעה תלוי בגודל הזרע - הכלל האצבע הוא פי 2 מגודל הזרע. כדאי להשרות זרעים לפני זריעה למשך 12-24 שעות לזירוז נביטה.',
  'קרקע': 'קרקעות הוד השרון הן בעיקר חמרה, בעלות ניקוז טוב. לשיפור פוריות הקרקע מומלץ להוסיף חומר אורגני (קומפוסט) אחת לעונה, לבצע עיבוד מינימלי, ולשלב צמחי כיסוי במחזור הגידול. ערכי pH אופטימליים לרוב הגידולים הם 6.0-7.0.'
};

const AdvisorChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'שלום, אני היועץ החקלאי שלך להוד השרון. במה אוכל לעזור לך היום? אני יכול לספק מידע על גידולים מתאימים, מזג אוויר, מזיקים, השקיה, דישון ועוד.',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // גלילה אוטומטית למטה כשנוספת הודעה חדשה
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // שיפור חווית משתמש - במידה ואין פעילות במשך זמן מסוים, היועץ יציע עזרה
  useEffect(() => {
    if (messages.length === 1) {
      // רק אם יש רק הודעת פתיחה אחת
      const timer = setTimeout(() => {
        const reminderMessage: Message = {
          id: Date.now().toString(),
          text: 'אשמח לענות על שאלות בנושא גידולים, מזג אוויר, השקייה, דישון, או מזיקים. במה אוכל לעזור?',
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, reminderMessage]);
      }, 20000); // 20 שניות

      return () => clearTimeout(timer);
    }
  }, [messages]);
  
  // שליחת הודעה
  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    // הוסף את הודעת המשתמש
    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    
    // עיבוד התגובה של הבוט
    setTimeout(() => {
      let response = 'יש לי מידע רב על גידולים, מזג אוויר, מזיקים, השקיה ודישון באזור הוד השרון. במה אני יכול לסייע?';
      let matchFound = false;
      
      // חיפוש תוכן רלוונטי בהודעת המשתמש
      Object.keys(botResponses).forEach(keyword => {
        if (newMessage.includes(keyword) && !matchFound) {
          response = botResponses[keyword];
          matchFound = true;
          
          // אנליטיקה פשוטה - אם היינו רוצים לשלוח למערכת
          console.log(`Query matched keyword: ${keyword}`);
        }
      });
      
      if (!matchFound) {
        // חיפוש מילות מפתח נוספות
        if (newMessage.includes('שלום') || newMessage.includes('היי')) {
          response = 'שלום! איך אני יכול לעזור לך היום בנושאים חקלאיים?';
        } else if (newMessage.includes('תודה')) {
          response = 'בשמחה! האם יש משהו נוסף שאוכל לעזור בו?';
        } else if (newMessage.includes('עונה') || newMessage.includes('זמן')) {
          response = 'העונה הנוכחית מתאימה במיוחד לגידול עגבניות, פלפלים ועשבי תיבול. האם תרצה מידע מפורט יותר על גידול ספציפי?';
        } else {
          // תשובה עם הצעות לשאילתות רלוונטיות
          response = 'לא הצלחתי להבין את השאלה בדיוק. אני יכול לעזור לך בנושאים כמו גידולים, מזג אוויר, מזיקים, השקיה או דישון. אשמח אם תשאל שאלה ספציפית יותר בתחומים אלו.';
        }
      }
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      
      // הצגת טוסט למידע נוסף לאחר תשובות מורכבות
      if (response.length > 100) {
        setTimeout(() => {
          toast({
            title: "יש לנו עוד מידע בנושא",
            description: "לשאלות מתקדמות יותר, ניתן לשוחח עם יועץ חקלאי אנושי",
            duration: 5000,
          });
        }, 2000);
      }
    }, 1500);
  };
  
  // שליחת הודעה בלחיצה על Enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };
  
  // פונקציה להפיכת timestamp לפורמט קריא
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });
  };

  // הצעות שאלות מהירות
  const quickQuestions = [
    'מה מומלץ לגדל כעת?',
    'מה צפוי במזג האוויר?',
    'כיצד להתמודד עם מזיקים?',
    'המלצות להשקיה'
  ];
  
  return (
    <div className="flex flex-col h-[70vh] bg-white rounded-lg shadow-md">
      <div className="bg-agri-green p-3 rounded-t-lg">
        <div className="flex items-center">
          <Bot className="text-white ml-2" size={28} />
          <div>
            <h2 className="text-white text-lg font-bold">יועץ חקלאי</h2>
            <p className="text-white/80 text-sm">מומחה לאזור הוד השרון</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`
              max-w-[80%] p-3 rounded-lg
              ${message.sender === 'user' 
                ? 'ml-auto bg-agri-blue text-white' 
                : 'mr-auto bg-gray-100 text-gray-800'}
              animate-fade-in
            `}>
              <div className="flex items-center mb-1">
                {message.sender === 'user' ? (
                  <>
                    <span className="text-xs opacity-70">{formatTime(message.timestamp)}</span>
                    <User className="text-white mr-1" size={16} />
                  </>
                ) : (
                  <>
                    <Bot className="text-agri-green ml-1" size={16} />
                    <span className="text-xs opacity-70">{formatTime(message.timestamp)}</span>
                  </>
                )}
              </div>
              <p className="whitespace-pre-line">{message.text}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-end">
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex space-x-1 space-x-reverse">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* שאלות מהירות / הצעות */}
      {messages.length < 3 && (
        <div className="px-3 pb-2">
          <p className="text-sm text-gray-500 mb-2">שאלות נפוצות:</p>
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-gray-700"
                onClick={() => {
                  setNewMessage(question);
                }}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
      
      <div className="border-t p-3">
        <div className="flex">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="הקלד את שאלתך כאן..."
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-agri-green resize-none"
            rows={2}
          />
          <button
            onClick={sendMessage}
            disabled={!newMessage.trim() || isTyping}
            className={`mr-2 p-3 rounded-full ${
              newMessage.trim() && !isTyping ? 'bg-agri-green text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            {isTyping ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
          </button>
        </div>
        <div className="flex items-center justify-between mt-2">
          <button 
            className="text-xs text-gray-500 flex items-center hover:text-agri-green"
            onClick={() => {
              toast({
                title: "מידע על היועץ החקלאי",
                description: "היועץ החקלאי הוא כלי מבוסס בינה מלאכותית שמספק מידע והמלצות לחקלאים באזור הוד השרון, מבוסס על נתוני אקלים ומסורת חקלאית מקומית.",
                duration: 5000,
              });
            }}
          >
            <Info size={12} className="mr-1" />
            אודות היועץ החקלאי
          </button>
          <p className="text-xs text-gray-500">
            היועץ מספק מידע כללי המבוסס על נתוני גידולים ומזג אוויר באזור הוד השרון
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvisorChat;
