
import React, { useState, useRef, useEffect } from 'react';
import { BiSend, BiBot, BiUserCircle } from 'react-icons/bi';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AdvisorChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'שלום, אני היועץ החקלאי שלך להוד השרון. במה אוכל לעזור לך היום?',
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
    
    // סימולציה של תגובת הבוט (במקום אמיתי, יש לחבר ל-API)
    setTimeout(() => {
      const botResponses: Record<string, string> = {
        'מה לגדל עכשיו': 'בעונה זו בהוד השרון מומלץ לגדל עגבניות, מלפפונים, פלפלים וחסה. האקלים מתאים במיוחד לגידולים אלו.',
        'מזג אוויר': 'בימים הקרובים צפוי להיות יבש וחם בהוד השרון, עם טמפרטורות של 25-32 מעלות. מומלץ להגביר השקיה.',
        'מזיקים': 'בתקופה זו נפוצים בהוד השרון: כנימות עלה, אקריות, ותריפסים. מומלץ לבצע ניטור פעמיים בשבוע.',
        'השקיה': 'לפי נתוני הלחות והטמפרטורה באזור הוד השרון, מומלץ להשקות 3 פעמים בשבוע, כ-2.5 קוב לדונם בכל השקיה.',
        'דישון': 'בתקופה זו מומלץ דישון עשיר בחנקן וזרחן. לגידולי עלים מומלץ להגביר את מנת החנקן בדשן.'
      };
      
      // בדוק אם ההודעה מכילה מילת מפתח מוכרת
      let response = 'יש לי מידע רב על גידולים, מזג אוויר, מזיקים, השקיה ודישון באזור הוד השרון. במה אני יכול לסייע?';
      
      Object.keys(botResponses).forEach(keyword => {
        if (newMessage.includes(keyword)) {
          response = botResponses[keyword];
        }
      });
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
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
  
  return (
    <div className="flex flex-col h-[70vh] bg-white rounded-lg shadow-md">
      <div className="bg-agri-green p-3 rounded-t-lg">
        <div className="flex items-center">
          <BiBot className="text-white ml-2" size={28} />
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
            className={`flex ${message.sender === 'user' ? 'justify-start' : 'justify-end'}`}
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
                    <BiUserCircle className="text-white mr-1" size={16} />
                  </>
                ) : (
                  <>
                    <BiBot className="text-agri-green ml-1" size={16} />
                    <span className="text-xs opacity-70">{formatTime(message.timestamp)}</span>
                  </>
                )}
              </div>
              <p>{message.text}</p>
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
            disabled={!newMessage.trim()}
            className={`mr-2 p-3 rounded-full ${
              newMessage.trim() ? 'bg-agri-green text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            <BiSend size={20} />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          היועץ מספק מידע כללי המבוסס על נתוני גידולים ומזג אוויר באזור הוד השרון
        </p>
      </div>
    </div>
  );
};

export default AdvisorChat;
