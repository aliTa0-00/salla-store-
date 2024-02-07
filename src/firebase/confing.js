// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-5CFQF0ZIq_R4ALqIoAPka9ju_JPJv8c",
  authDomain: "salla-6b870.firebaseapp.com",
  projectId: "salla-6b870",
  storageBucket: "salla-6b870.appspot.com",
  messagingSenderId: "400338756118",
  appId: "1:400338756118:web:b8c9714d5ec3dc849ccb37"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
