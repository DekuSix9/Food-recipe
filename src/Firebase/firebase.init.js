// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8i8KNUGCYQAU5z4NELwZtq9QNor7KmuA",
  authDomain: "recipe-dc09d.firebaseapp.com",
  projectId: "recipe-dc09d",
  storageBucket: "recipe-dc09d.firebasestorage.app",
  messagingSenderId: "1088229073151",
  appId: "1:1088229073151:web:95dd7832ad35fa4e406cca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);