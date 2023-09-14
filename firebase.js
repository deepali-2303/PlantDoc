import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbyKcVLj8cR3BLnxF-9TC_pzj8IaPhP9c",
  authDomain: "plantdoc-60885.firebaseapp.com",
  projectId: "plantdoc-60885",
  storageBucket: "plantdoc-60885.appspot.com",
  messagingSenderId: "686648187504",
  appId: "1:686648187504:web:706f5722ed6aab0ac272b5",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
