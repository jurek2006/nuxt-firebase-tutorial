// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyqtRRtSGvvBISjSjk4zHAzIsEBR_KXM8",
  authDomain: "nuxt-firebase-tutorial-c225f.firebaseapp.com",
  projectId: "nuxt-firebase-tutorial-c225f",
  storageBucket: "nuxt-firebase-tutorial-c225f.appspot.com",
  messagingSenderId: "595322405621",
  appId: "1:595322405621:web:ad48450f59a21744967bbc",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);
