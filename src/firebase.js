import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCyxbDPXtCwKPs-x3WP_AVwOjssvgFqvgY",
  authDomain: "testing1-88b4e.firebaseapp.com",
  projectId: "testing1-88b4e",
  storageBucket: "testing1-88b4e.appspot.com",
  messagingSenderId: "940147231383",
  appId: "1:940147231383:web:5396aec82f74c0d763b7d2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//auth
export const auth = getAuth();
