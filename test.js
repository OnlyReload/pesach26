const API_KEY = "AIzaSyDlcOBPGy4Zwh9m7BYpf-Kg9r4uWLD0txk";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
// Assuming node 18+ has fetch natively built-in

let chatHistory = [
    {
        "role": "user",
        "parts": [{ "text": "אתה עוזר וירטואלי של קייטנת TechKids לפסח 2026. עליך לענות באדיבות, בעברית תקינה ובקצרה, במקסימום 2-3 משפטים. פרטי הקייטנה: נלמד מיינקראפט ובינה מלאכותית בשני קורסים נפרדים. תאריכים 24-26 למרץ. בינה מלאכותית ב-17:00, מיינקראפט ב-18:00. מחיר לפסח: 239 שקלים למסלול אחד. אם נרשמים עם חבר ('חבר מביא חבר'), זה עולה 189 שקלים. הקייטנה מועברת בזום, דורשת מחשב (לא טאבלט/סמארטפון). עליך לעודד רישום בסיום התשובה או לכוון לכפתור הווטסאפ. השב באישור שהבנת לתחילת דיאלוג." }]
    },
    {
        "role": "model",
        "parts": [{ "text": "הבנתי. אני מוכן." }]
    },
    {
        "role": "user",
        "parts": [{ "text": "מה לומדים?" }]
    }
];

async function test() {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: chatHistory })
        });
        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
    } catch(e) {
        console.error("Fetch Exception:", e);
    }
}

test();
