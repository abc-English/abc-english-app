/* ══════════════════════════════════════════════════════════════
   Firebase Cloud Messaging Service Worker
   The American British Center (ABC) - English Test
   ══════════════════════════════════════════════════════════════
   هذا الملف يستقبل الإشعارات حتى عندما يكون الهاتف مقفلاً
   أو المتصفح مغلق تماماً.
   ════════════════════════════════════════════════════════════ */

importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

// إعدادات Firebase - نفس إعدادات المنصة
firebase.initializeApp({
  apiKey: "AIzaSyBe0nYlx3qmCWq9V5Ntpi0boxl2gzeXMoI",
  authDomain: "english-test-ca3b4.firebaseapp.com",
  databaseURL: "https://english-test-ca3b4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "english-test-ca3b4",
  storageBucket: "english-test-ca3b4.firebasestorage.app",
  messagingSenderId: "505266753396",
  appId: "1:505266753396:web:0631a1008bc4a29547e621"
});

const messaging = firebase.messaging();

// شعار المنصّة (يظهر في الإشعار)
const ABC_ICON = 'https://i.ibb.co/p6PKXBTn/IMG-20260506-141154.jpg';

// استقبال الإشعارات في الخلفية (والهاتف مقفل)
messaging.onBackgroundMessage((payload) => {
  console.log('[ABC SW] إشعار في الخلفية:', payload);

  const title = (payload.notification && payload.notification.title)
              || (payload.data && payload.data.title)
              || '📢 ABC - The American British Center';

  const body = (payload.notification && payload.notification.body)
             || (payload.data && payload.data.body)
             || 'لديك إشعار جديد';

  const options = {
    body: body,
    icon: ABC_ICON,
    badge: ABC_ICON,
    // اهتزاز قوي مثل واتساب
    vibrate: [200, 100, 200, 100, 200],
    // معرّف فريد حتى لا تتراكم نفس الإشعارات
    tag: (payload.data && payload.data.tag) || 'abc-' + Date.now(),
    // يبقى الإشعار ظاهراً حتى ينقر عليه المستخدم
    requireInteraction: false,
    // بيانات إضافية تنتقل عند النقر
    data: payload.data || {},
    // اللغة (تلقائي)
    dir: 'auto',
    // اسم التطبيق
    silent: false
  };

  return self.registration.showNotification(title, options);
});

// عند النقر على الإشعار - فتح المنصّة
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const targetUrl = (event.notification.data && event.notification.data.url) || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // إن كانت المنصّة مفتوحة بالفعل، انقل التركيز إليها
      for (const client of clientList) {
        if (client.url.indexOf(self.location.origin) === 0 && 'focus' in client) {
          return client.focus();
        }
      }
      // وإلا، افتح نافذة جديدة
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});

// عند تثبيت Service Worker
self.addEventListener('install', (event) => {
  console.log('[ABC SW] تم تثبيت Service Worker');
  self.skipWaiting();
});

// عند تفعيل Service Worker
self.addEventListener('activate', (event) => {
  console.log('[ABC SW] تم تفعيل Service Worker');
  event.waitUntil(clients.claim());
});
