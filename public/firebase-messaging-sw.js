importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDRISXdSYxnaReR0ie4blsjquB_4qlqkOA",
  authDomain: "testfcm-4d3f3.firebaseapp.com",
  projectId: "testfcm-4d3f3",
  storageBucket: "testfcm-4d3f3.appspot.com",
  messagingSenderId: "775301279459",
  appId: "1:775301279459:web:beb2abe25a7520aed9dfd6",
  measurementId: "G-JFBK7E0095"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
