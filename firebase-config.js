// Firebase config + initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxYYXKTRB_kC9n8GL-v_OoZNxZMmZSkHw",
  authDomain: "test-vercel-241c8.firebaseapp.com",
  projectId: "test-vercel-241c8",
  storageBucket: "test-vercel-241c8.firebasestorage.app",
  messagingSenderId: "937194431107",
  appId: "1:937194431107:web:a5118b008b3555570a71b6",
  measurementId: "G-9C7LRWLSS1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
