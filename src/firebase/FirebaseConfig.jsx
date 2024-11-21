// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX3xQOVa5WaGzJJpVQo7FRQFUIWyOVyZs",
  authDomain: "e-commerce-a3d0d.firebaseapp.com",
  projectId: "e-commerce-a3d0d",
  storageBucket: "e-commerce-a3d0d.firebasestorage.app",
  messagingSenderId: "557188636103",
  appId: "1:557188636103:web:8faceb209e671ca9a88de2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {  auth, fireDB }