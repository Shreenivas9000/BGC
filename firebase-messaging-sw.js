// MUST use compatibility build
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Initialize with your config (same as in index.html)
firebase.initializeApp({
  apiKey: "AIzaSyCmvLv3I1mtXb2OClUeQYKzDGbEkmQii30",
  projectId: "vajione",
  messagingSenderId: "682994379324",
  appId: "1:682994379324:web:acc75e2a0926a08375f139"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message', payload);

  const notificationTitle = payload.notification.title || 'New Notification';
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icons/icon-192.png', // Path to your icon
    badge: '/icons/icon-72.png', // Small badge icon
    data: payload.data // Optional: pass any additional data
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});