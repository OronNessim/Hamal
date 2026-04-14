# 🪖 HAMAL — מערכת ניהול חמ"ל

<div align="center">

![Version](https://img.shields.io/badge/גרסה-1.1.0-00d4aa?style=for-the-badge)
![Status](https://img.shields.io/badge/סטטוס-פעיל-2ecc71?style=for-the-badge)
![Platform](https://img.shields.io/badge/פלטפורמה-Web%20%7C%20PWA-f5a623?style=for-the-badge)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange?style=for-the-badge&logo=firebase)
![Units](https://img.shields.io/badge/יחידות-2-blue?style=for-the-badge)

**מערכת ניהול משמרות חמ"ל | חטיבת גולני · אוגדה 91**

🔗 **[כנס לאפליקציה](https://oronnessim.github.io/Hamal)**

</div>

---

## 📖 על הפרויקט

מערכת web-app מלאה לניהול משמרות חמ"ל, פותחה מאפס ומשמשת כיום מספר יחידות צה"ל. המערכת כוללת landing page מרכזי לבחירת יחידה ותא, ואפליקציה מלאה לניהול משמרות בזמן אמת.

---

## 🏗️ מבנה המערכת

```
oronnessim.github.io/Hamal/
├── index.html     ← Landing page — בחירת יחידה ותא
└── app.html       ← האפליקציה המלאה
```

---

## 🏛️ יחידות פעילות

| יחידה | תא | סטטוס |
|---|---|---|
| חטיבת גולני | מלכ"א — שולחן מרכזי | ✅ פעיל |
| אוגדה 91 | תא אג"ם | ✅ פעיל |

---

## ✨ פיצ'רים עיקריים

### 👮 ממשק מפקד
- 📅 לוח שיבוץ שבועי — ידני או אוטומטי
- 🤖 מילוי אוטומטי חכם לפי כללי עדיפות
- ↩️ ביטול שינוי (Undo) — עד 10 צעדים
- 🔒 נעילת ימי רענון אוטומטית
- 📢 הקשב המפקד לכל המשתמשים
- 💬 צ'אט פרטי עם כל חייל
- 📊 סטטיסטיקות בזמן אמת
- 🖨️ הדפסה / PDF
- 💾 ייצוא/ייבוא גיבוי JSON
- 🔔 התראות דפדפן + Polling אוטומטי

### 👤 ממשק חייל
- 📋 צפייה אישית במשמרות
- 🕐 לוח זמנים שעתי בזמן אמת
- 📩 שליחת הודעות למפקד
- 📜 מעקב ימי צו 8

---

## 🛠️ טכנולוגיות

| טכנולוגיה | שימוש |
|---|---|
| HTML5 / CSS3 / Vanilla JS | Frontend ללא frameworks |
| Firebase Firestore | מסד נתונים בזמן אמת |
| GitHub Pages | Hosting חינמי |
| PWA (Service Worker + Manifest) | התקנה נייטיבית |

---

## 📁 מבנה הפרויקט

```
Hamal/
├── index.html        # Landing page
├── app.html          # האפליקציה המלאה (~2,700 שורות)
├── manifest.json     # הגדרות PWA
├── sw.js             # Service Worker (v1.1.0)
├── icon-192.png      # סמל אפליקציה
├── icon-512.png      # סמל גדול
└── README.md
```

---

## 🗓️ היסטוריית גרסאות

| גרסה | תיאור |
|---|---|
| v1.1.0 | Landing page רב-יחידות, כפתור עדכון PWA |
| v1.0.3 | ייצוא PDF, גיבוי JSON, התראות, Polling, Undo |
| v1.0.2 | צ'אט פרטי, תיקוני Firebase |
| v1.0.1 | תיקון שמירה, אינדיקטור, תיקוני מובייל |
| v1.0.0 | גרסה ראשונה |

---

## 🔧 הוספת יחידה חדשה

ערוך את מערך `UNITS` ב-`index.html`:

```javascript
{
  id: 'unit_id',
  name: 'שם היחידה',
  sub: 'תיאור קצר',
  logo: 'data:image/png;base64,...',
  cells: [
    {id:'cell1', name:'שם התא', desc:'תיאור', url:'app.html', icon:'🖥️'}
  ]
}
```

---

## 👨‍💻 פיתוח

פותח ע"י **אורון נסים** בשיתוף **Claude (Anthropic)**.

---

<div align="center">עשוי עם ❤️ עבור לוחמי צה"ל</div>
