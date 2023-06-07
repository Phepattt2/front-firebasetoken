// Import the functions you need from the SDKs you need


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth" 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// will add process.env LATER !!!!!
const firebaseConfig = {
    apiKey: "AIzaSyBj7MxIA8DXF4upvaylxc-gBSuN0-U50e4",
    authDomain: "react-auth-135d9.firebaseapp.com",
    projectId: "react-auth-135d9",
    storageBucket: "react-auth-135d9.appspot.com",
    messagingSenderId: "270818518963",
    appId: "1:270818518963:web:9c81442b0abe17507ccdc6",
    measurementId: "G-F4ZYH06Y16"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
