// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvg_lQ_kDtlgP7RotBRjRhZiSW9VxvyEs",
  authDomain: "bazramern-cc83d.firebaseapp.com",
  projectId: "bazramern-cc83d",
  storageBucket: "bazramern-cc83d.appspot.com",
  messagingSenderId: "867731628739",
  appId: "1:867731628739:web:26f57da08f948c69b37876",
  measurementId: "G-5Y3EGJ1WM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;