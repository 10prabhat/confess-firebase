// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzi_l_EZxF1gKiFqFwH0vys9kYW7BSLjA",
  authDomain: "confess-2f417.firebaseapp.com",
  databaseURL:
    "https://confess-2f417-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "confess-2f417",
  storageBucket: "confess-2f417.appspot.com",
  messagingSenderId: "55693800814",
  appId: "1:55693800814:web:73931a17ac1c66ca38fd7f",
  measurementId: "G-VLEPJF6TFS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { ref, set, onValue, database };
