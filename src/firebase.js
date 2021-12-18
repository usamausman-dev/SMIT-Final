import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBgHNVx6RpYYaDIW1lvO8rYrzbUlSU6PLA",
  authDomain: "finalhackathon-c22b0.firebaseapp.com",
  projectId: "finalhackathon-c22b0",
  storageBucket: "finalhackathon-c22b0.appspot.com",
  messagingSenderId: "7708447834",
  appId: "1:7708447834:web:488b14138555275a28b463",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
