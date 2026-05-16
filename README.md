# 📱 ABC English - Android App

تطبيق Android للمنصّة التعليمية **The American British Center**.

---

## 🚀 خطوات الرفع على GitHub (المرّة الأولى)

### 1️⃣ افتح المشروع في VS Code

١. حمّل مجلد المشروع (ZIP) واستخرجه على لابتوبك
٢. افتح **VS Code**
٣. اضغط **File → Open Folder**
٤. اختر مجلد `abc-english-app`

### 2️⃣ افتح Terminal داخل VS Code

١. اضغط `Ctrl + ~` (المفتاح تحت Escape)
٢. أو من القائمة العلوية: **Terminal → New Terminal**

### 3️⃣ ارفع المشروع على GitHub

#### الطريقة الأسهل (عبر GitHub Desktop):

١. حمّل **GitHub Desktop** من: https://desktop.github.com
٢. سجّل دخولاً بحسابك (`abc-English`)
٣. اختر **File → Add Local Repository**
٤. اختر مجلد `abc-english-app`
٥. اضغط **Publish Repository**
٦. اضغط **Publish** (تأكد أن Repository name = `abc-english-app`)

#### أو عبر Terminal (للمتقدّمين):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/abc-English/abc-english-app.git
git push -u origin main
```

عند طلب كلمة السر، استخدم **Personal Access Token** من إعدادات GitHub.

---

## ⚙️ بناء APK تلقائياً

### بمجرد رفع المشروع على GitHub:

١. اذهب إلى المستودع على GitHub:
```
https://github.com/abc-English/abc-english-app
```

٢. اضغط تبويب **"Actions"** في الأعلى

٣. سترى أن GitHub يبني APK تلقائياً ⚙️
   - يستغرق حوالي **10-15 دقيقة**
   - ستظهر دائرة صفراء (يبني الآن)
   - ثم تصبح ✅ خضراء (انتهى!)

٤. عند الانتهاء:
   - اضغط على Build الأخير
   - انزل للأسفل لقسم **"Artifacts"**
   - اضغط **"abc-english-debug-apk"** لتحميل APK

أو أسهل: اذهب لتبويب **"Releases"** على يمين الصفحة الرئيسية للمستودع → سترى آخر إصدار مع زر **Download** للـ APK مباشرة.

---

## 📱 تثبيت APK على هاتفك

١. **انقل ملف APK** إلى هاتفك Android:
   - عبر WhatsApp Web
   - أو USB
   - أو Google Drive
   - أو أرسله لنفسك على Telegram

٢. **على هاتفك:**
   - افتح ملف APK
   - ستظهر رسالة: *"غير مسموح بالتثبيت من مصادر غير معروفة"*
   - اضغط **"الإعدادات"**
   - فعّل **"السماح من هذا المصدر"**
   - ارجع للتثبيت
   - اضغط **"تثبيت"**

٣. **🎉 افتح التطبيق** من شاشة هاتفك!

---

## 🔄 التحديثات لاحقاً (سهل جداً!)

عندما تريد تحديث التطبيق:

١. حدّث ملف `public/index.html` (أو أي ملف آخر)
٢. ارفع التغييرات على GitHub:
```bash
git add .
git commit -m "Update v1.0.X"
git push
```
٣. GitHub يبني APK جديد **تلقائياً** ✨
٤. حمّل APK الجديد من Releases وثبّته (سيُحدّث التطبيق الموجود)

---

## 🔔 الإشعارات في التطبيق

نظام FCM المُعدّ مسبقاً سيعمل تلقائياً مع التطبيق:
- ✅ إشعارات للهاتف المقفل
- ✅ صوت + اهتزاز
- ✅ النقر على الإشعار يفتح التطبيق

التطبيق يستخدم نفس Worker على Cloudflare الذي أعددته من قبل (`abc-push.abc-ibrahim-hajj.workers.dev`).

---

## 📂 محتويات المشروع

```
abc-english-app/
├── public/                           ← ملفات المنصّة
│   ├── index.html                   ← v40 من المنصّة
│   ├── manifest.json
│   └── firebase-messaging-sw.js
├── .github/
│   └── workflows/
│       └── build-apk.yml            ← السحر! يبني APK تلقائياً
├── capacitor.config.json            ← إعدادات التطبيق
├── package.json                     ← Dependencies
├── .gitignore
└── README.md                        ← هذا الملف
```

---

## ❓ مشاكل شائعة

### "Build failed" في GitHub Actions
- افتح Build الفاشل واقرأ الخطأ
- 99% من الحالات سببه خطأ مطبعي في `capacitor.config.json` — تأكد أنه valid JSON

### "App not installed" على الهاتف
- احذف أي نسخة قديمة من التطبيق ثم ثبّت من جديد
- تأكد من تفعيل "Install from unknown sources"

### الإشعارات لا تصل
- افتح التطبيق ومرة واحدة منح إذن الإشعارات
- تأكد أن الهاتف به اتصال إنترنت
- اختبر من صفحة المعلم: "إرسال إشعار للجميع"

---

## 🆘 احتجت مساعدة؟

أرسل لي صورة من الخطأ وسأرشدك للحل.

**الأستاذ Claude**
