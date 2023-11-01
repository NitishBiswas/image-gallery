// Import the functions that need from the SDKs need
import { initializeApp } from "firebase/app";

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyuYKx1iBFlGExp1XR4CrVSVAO6RdUpR0",
    authDomain: "image-gallery-c3f7e.firebaseapp.com",
    projectId: "image-gallery-c3f7e",
    storageBucket: "image-gallery-c3f7e.appspot.com",
    messagingSenderId: "887781097844",
    appId: "1:887781097844:web:2f04bfc4bbec866df3ac21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;