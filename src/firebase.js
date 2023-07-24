// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRISXdSYxnaReR0ie4blsjquB_4qlqkOA",
  authDomain: "testfcm-4d3f3.firebaseapp.com",
  projectId: "testfcm-4d3f3",
  storageBucket: "testfcm-4d3f3.appspot.com",
  messagingSenderId: "775301279459",
  appId: "1:775301279459:web:beb2abe25a7520aed9dfd6",
  measurementId: "G-JFBK7E0095"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

//const analytics = getAnalytics(app);
