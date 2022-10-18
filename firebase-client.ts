// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAGohwIfmLALpRQkPndhU8CC5FtcGYN_Sk",
  authDomain: "ta-positions.firebaseapp.com",
  projectId: "ta-positions",
  storageBucket: "ta-positions.appspot.com",
  messagingSenderId: "495329526249",
  appId: "1:495329526249:web:3a76baf90a2456cdc2cb78",
  measurementId: "G-VH7EV069RC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
// export const analytics = getAnalytics(app);