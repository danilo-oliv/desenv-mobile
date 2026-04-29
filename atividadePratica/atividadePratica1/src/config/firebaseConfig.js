// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3znmwYdApBrM1531O2WA2rp_JGheIZrA",
  authDomain: "app-01-unipam.firebaseapp.com",
  projectId: "app-01-unipam",
  storageBucket: "app-01-unipam.firebasestorage.app",
  messagingSenderId: "130615957924",
  appId: "1:130615957924:web:d5e131c0aed1bff3a1c931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);