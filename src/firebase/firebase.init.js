// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV9rMUSv1W3gXjdGY9gvJnIXXjvRLGOpw",
  authDomain: "gamehub-c906b.firebaseapp.com",
  projectId: "gamehub-c906b",
  storageBucket: "gamehub-c906b.firebasestorage.app",
  messagingSenderId: "719054993211",
  appId: "1:719054993211:web:a483b1be2d1f6bc417691e"
};


const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);