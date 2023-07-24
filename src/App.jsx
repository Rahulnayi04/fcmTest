import { useState, useEffect } from "react";

import { getMessaging, getToken } from "firebase/messaging";

import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";

import { messaging } from "./firebase";
import { async } from "@firebase/util";

function App() {
  const [Gentoken, setGenToken] = useState("");
  const tokens = [];

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const messaging = getMessaging();
      const token = await getToken(messaging, {
        vapidKey:
          "BCSLoK02_AyYb8n4bTr1ZJXf2uZolb1ZY2b4jPJQEs6gEuawUXOCjyol9_J-kfALqwzNOBGBLoOpUqpcbC3dB_c"
      });
      setGenToken(token);
      console.log("Generated Token : " + token);
    } else if (permission === "denied") {
      alert("You denied permission");
    }
  }

  async function sendNotifications(message) {}
  //   const notification = {
  //     title: 'Notification Title',
  //     body: message,
  //   };

  //   tokens.forEach((token) => {
  //     fetch('https://fcm.googleapis.com/fcm/send', {
  //       method: 'POST',
  //       headers: {
  //         'Authorization': 'key=YOUR_FIREBASE_SERVER_KEY',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         to: token,
  //         notification,
  //       }),
  //     })
  //     .then((response) => {
  //       console.log('Notification sent successfully:', response);
  //     })
  //     .catch((error) => {
  //       console.error('Error sending notification:', error);
  //     });
  //   });
  // }

  useEffect(() => {
    requestPermission();
    //sendNotifications('hello this is my notification');
  }, []);

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>DEMO FCM</h1>
      <div className="card">
        <h1 className="read-the-docs">FCM IMPLEMENTATION SAMPLE</h1>
        {Gentoken && (
          <p className="read-the-docs">Generated FCM Token: {Gentoken}</p>
        )}
      </div>
      <div>
        <button className="btn" onClick={sendNotifications}>
          Send Notifications
        </button>
      </div>
    </>
  );
}

export default App;
