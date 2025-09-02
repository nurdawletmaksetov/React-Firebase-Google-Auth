// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpL27qvf-nIojPr6Ql8mSPAsJRoo1YrHQ",
    authDomain: "authproject-d0c40.firebaseapp.com",
    projectId: "authproject-d0c40",
    storageBucket: "authproject-d0c40.firebasestorage.app",
    messagingSenderId: "600926041163",
    appId: "1:600926041163:web:969a1904f5ad84bf4049ce",
    measurementId: "G-Q9159ZV2KQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app}