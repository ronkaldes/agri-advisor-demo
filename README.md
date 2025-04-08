⸻

🌱 אדמה חכמה – אפליקציית ניהול חקלאי בזמן אמת

נבנתה בלייב תוך 10 דקות במהלך סדנת פיתוח! 🎥 רציתי להראות איך אפשר להרים אפליקציית חקלאות מלאה – עם מפה, דאשבורד, גרפים, המלצות חכמות – בלי הרבה סיבוכים, רק כלים נכונים וגישה נכונה.

על האפליקציה בקצרה

אדמה חכמה זו פלטפורמה דינמית לניהול חקלאות, שפותחה במיוחד לחקלאים ישראלים. היא נותנת תמונת מצב עדכנית של כל השטח, עוזרת בתכנון חכם, מעקב אחרי תנאי מזג האוויר, קבלת המלצות מבוססות AI ועוד – הכל בעברית, מכל מכשיר.

מה היא יודעת לעשות?

🧠 דאשבורד וניתוחים
	•	תצוגה חיה של כל הפעולות והשטחים
	•	מזג אוויר מעודכן עם המלצות חקלאיות
	•	גרפים אינטראקטיביים לטמפרטורה, גשמים ולחות
	•	מעקב אחרי שימוש במכונות וזמן עבודה בשטח

🗺️ ניהול שדות
	•	מפה אינטראקטיבית בלוויין עם מידע על כל חלקה
	•	מצב בריאות שדות – תקין, אזהרה, קריטי
	•	תכנון פעולות – השקיה, דישון, ריסוס
	•	חישוב אוטומטי של שטחים בדונמים

🌦️ מזג אוויר וסביבה
	•	תחזית ל-7 ימים עם סיכויי גשם ולחות
	•	המלצות לפעולות לפי מזג אוויר צפוי
	•	גישה לנתוני עבר
	•	התראות מותאמות אישית למזג אוויר קיצוני

☀️ קרינת שמש
	•	גרף יומי של קרינה סולארית
	•	ממוצעים חודשיים לעומת ההיסטוריה
	•	טיפים לשימוש חכם באנרגיה סולארית בחקלאות

🤖 יועץ חקלאי חכם
	•	המלצות אוטומטיות לפי סוג גידול, מזג אוויר וסטטוס השדה
	•	זיהוי מחלות או מזיקים פוטנציאליים
	•	הצעות לשימוש יעיל במים ודשן

📱 ממשק נייד מותאם
	•	עובד חלק על מחשב, טאבלט ונייד
	•	בעברית מלאה עם תמיכה ב-RTL
	•	ניווט פשוט דרך סרגל צד ברור

איך זה פותח?

טכנולוגיות בשימוש
	•	React + TypeScript + Vite לפיתוח מהיר ויציב
	•	Tailwind CSS + shadcn/ui לעיצוב רספונסיבי ונעים
	•	Recharts לגרפים
	•	Google Maps API למפות
	•	תמיכה מלאה ב-RTL + עיצוב מותאם לחקלאות ישראלית

איך מריצים את זה?

git clone [repository-url]
cd adama-smart
npm install
npm run dev

משתנים נדרשים
	•	VITE_GOOGLE_MAPS_API_KEY – מפתח למפות

בנייה לפרודקשן

npm run build
npm run preview

דוגמאות שימוש
	•	לעבור על המפה ולראות את מצב השדות
	•	לתכנן פעולות לפי תחזית מזג האוויר
	•	לשאול את ה-AI שאלה על דישון או בעיה בגידול
	•	לקבל התראות כשמזג האוויר משתנה

פריסה

אפשר להעלות לכל שירות סטטי:
	•	Vercel / Netlify / GitHub Pages / AWS S3

⸻

🛠️ נבנה כהדגמה חיה – הממשק והפיצ’רים עוד יתחדשו לפי פידבק של חקלאים אמיתיים. יש לכם רעיונות? דברו איתי!

⸻

רוצה שאעלה את הקוד ל-GitHub עם README מסודר? או שתרצה שאכין סרטון קצר שמסביר את הפלטפורמה?

כמובן! הנה גרסה דו-לשונית (עברית ואנגלית) של קובץ README.md מסודר, מותאם לפרויקט הדמו שלך אדמה חכמה – Smart Soil, לשימוש ב-GitHub:

⸻



# 🌱 אדמה חכמה (Smart Soil) – אפליקציית ניהול חקלאי בזמן אמת

*נבנה בלייב תוך 10 דקות במהלך סדנת פיתוח עם רון קלדס*  
*Built live in just 10 minutes during a workshop demo with Ron Kaldes*

---

## 🔍 סקירה כללית | Overview

אדמה חכמה היא פלטפורמה דיגיטלית חכמה לניהול חקלאי, שפותחה במיוחד עבור חקלאים ישראלים. המערכת מספקת תובנות בזמן אמת, גרפים אינטראקטיביים, המלצות מבוססות AI, וכלי תכנון ומעקב – בעברית מלאה ומתאימה לכל מכשיר.

Smart Soil is a smart digital platform for real-time agricultural management, built for Israeli farmers. It offers real-time insights, interactive charts, AI-based recommendations, and full planning and monitoring tools – all in Hebrew, responsive across all devices.

---

## 🚀 תכונות עיקריות | Key Features

### 🧠 דאשבורד וניתוחים | Dashboard & Analytics
- תצוגה חיה של פעילות חקלאית, תחזיות ומעקב | Real-time farm activity, forecasts, and tracking
- גרפים אינטראקטיביים (טמפ', גשם, לחות) | Interactive charts (temperature, rainfall, humidity)
- מעקב משאבים (שימוש בציוד, זמן בשטח) | Resource usage tracking (equipment, field time)

### 🗺️ ניהול שדות | Field Management
- מפת שדות בלוויין עם מידע מפורט | Satellite map with field details
- חיווי בריאות השדה: תקין / אזהרה / קריטי | Field health indicators: normal / warning / alert
- תכנון פעולות: השקיה, ריסוס, דישון | Plan actions: irrigation, spraying, fertilization

### 🌦️ מזג אוויר ותחזיות | Weather & Forecast
- תחזית ל-7 ימים קדימה | 7-day weather forecast
- המלצות חקלאיות מותאמות | Weather-based farming tips
- נתוני עבר והשוואה היסטורית | Historical weather comparison

### ☀️ קרינה סולארית | Solar Radiation
- גרפים יומיים + ממוצע חודשי | Daily & monthly radiation charts
- המלצות לניצול אנרגיה סולארית | Solar energy optimization suggestions

### 🤖 יועץ חקלאי חכם | AI Advisor
- המלצות לפי סוג גידול, מזג אוויר ושדה | Smart advice by crop, field & weather
- זיהוי בעיות, מזיקים ומחלות | Diagnosis of pests and diseases
- הצעות לשימוש יעיל במים ודשן | Water & fertilizer optimization

### 📱 ממשק נייד מותאם | Mobile-Friendly Interface
- רספונסיבי לחלוטין (דסקטופ, טאבלט, מובייל) | Fully responsive UI (desktop, tablet, mobile)
- תמיכה מלאה בעברית (RTL) | Full Hebrew RTL support

---

## 🛠️ טכנולוגיות | Tech Stack

### Frontend
- `React`, `TypeScript`, `Vite`
- `Tailwind CSS`, `shadcn/ui`
- `Recharts`, `React Router`, `Lucide React`
- `Google Maps API`

### עיצוב והתאמות | Styling & RTL
- תמיכה מלאה ב-RTL | Full RTL language support
- עיצוב רספונסיבי ונעים | Clean responsive UI
- ערכת צבעים חקלאית | Agriculture-inspired theme

---

## ⚙️ התקנה והפעלה | Setup & Run

### דרישות מוקדמות | Prerequisites
- Node.js 18+
- npm או bun

### התקנה מקומית | Local Installation

```bash
git clone [repository-url]
cd adama-smart
npm install # או bun install
npm run dev # או bun dev

משתני סביבה | Environment Variables
	•	VITE_GOOGLE_MAPS_API_KEY – מפתח API לשימוש במפות

⸻

🏗️ בניית גרסת פרודקשן | Production Build

npm run build
npm run preview



⸻

🌍 פריסה | Deployment

האפליקציה מוכנה להעלאה לכל שירות סטטי מודרני:
	•	Vercel
	•	Netlify
	•	GitHub Pages
	•	AWS S3 + CloudFront

⸻

🧪 דוגמאות שימוש | Usage Examples

ניהול שדות | Managing Fields
	1.	כניסה לדשבורד
	2.	לחיצה על שדה מסוים במפה
	3.	תכנון והשמה של פעולות חקלאיות
	4.	מעקב אחרי משימות מתוכננות

תחזיות מזג אוויר | Weather Monitoring
	1.	הצגת מזג אוויר בלוח הראשי
	2.	מעבר לעמוד התחזית
	3.	קבלת המלצות לפעולות בהתאם למזג האוויר

יועץ חכם | Using the AI Advisor
	1.	כניסה לאזור היועץ
	2.	שאילת שאלות על גידול, השקיה או מזיקים
	3.	קבלת המלצות מבוססות על מצב השטח שלך

⸻

📩 תמיכה | Support

לשאלות טכניות או בקשות לפיצ’רים:
support@adama-smart.co.il

⸻

📄 רישיון | License

© 2025 Smart Soil Agricultural Solutions. כל הזכויות שמורות.
All rights reserved.

⸻

🧪 נמצא בפיתוח פעיל – שינויים ייכנסו בהתאם לפידבק מהשטח!
🔄 Actively under development – features may evolve based on farmer feedback!

---

אם תרצה, אני גם יכול לייצר עבורך את הקובץ `README.md` בפורמט מוכן להעלאה ל-GitHub. רוצה שאוציא אותו כקובץ טקסט?
