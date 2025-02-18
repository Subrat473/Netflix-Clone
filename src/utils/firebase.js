// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpv-im-h2JzyAlI0AlmEH6bpAgep1nA9A",
  authDomain: "netfix-gpt-a8895.firebaseapp.com",
  projectId: "netfix-gpt-a8895",
  storageBucket: "netfix-gpt-a8895.firebasestorage.app",
  messagingSenderId: "439646278591",
  appId: "1:439646278591:web:8015d7d433533db3d6470a",
  measurementId: "G-Y7NWNXK0G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);