// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// will add process.env LATER !!!!!
const firebaseConfig = {
  apiKey: "AIzaSyCWBSJycybY5UR__RTBHX1KPzPMGi2gT5I",
  authDomain: "rabbitfirebase-dec15.firebaseapp.com",
  projectId: "rabbitfirebase-dec15",
  storageBucket: "rabbitfirebase-dec15.appspot.com",
  messagingSenderId: "693506277142",
  appId: "1:693506277142:web:f032199597322d24389a37",
  measurementId: "G-G77JB0D963"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
