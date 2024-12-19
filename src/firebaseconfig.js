// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCTS6ZV_5u0-_Z7D5YrSPjg5qrtjywHU8",
    authDomain: "scraper-37204.firebaseapp.com",
    projectId: "scraper-37204",
    storageBucket: "scraper-37204.appspot.com",
    messagingSenderId: "161555171074",
    appId: "1:161555171074:web:442e1aec928d7e0685241b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app};