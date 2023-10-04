// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyB5rq65VbwnhcXWiINOkhktJ5nqbdwfcsc",
    authDomain: "bulakenya-gift-shop.firebaseapp.com",
    projectId: "bulakenya-gift-shop",
    storageBucket: "bulakenya-gift-shop.appspot.com",
    messagingSenderId: "202935735514",
    appId: "1:202935735514:web:203f7e4d110c41593841e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app