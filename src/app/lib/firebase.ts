// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3pX3W6AXBLDZzUlDwEG3e3iobCY3hdtU",
  authDomain: "soulviagens-cda0e.firebaseapp.com",
  projectId: "soulviagens-cda0e",
  storageBucket: "soulviagens-cda0e.appspot.com",
  messagingSenderId: "702831888237",
  appId: "1:702831888237:web:66f6ada1b2ad59505ebc64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firebaseConfig, firestore };