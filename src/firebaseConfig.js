// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAv-b8uAGaMR7WYtfKfq8qV42tqa6PwZM",
  authDomain: "test-9ecb0.firebaseapp.com",
  projectId: "test-9ecb0",
  storageBucket: "test-9ecb0.firebasestorage.app",
  messagingSenderId: "241721978154",
  appId: "1:241721978154:web:83d57207b8e8e7b5840253",
  measurementId: "G-E9GCK74M17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }