import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCSurW8pQ4fC35GB_GbKm0tRW21r1q__LM",
    authDomain: "api-rest-libreria.firebaseapp.com",
    projectId: "api-rest-libreria",
    storageBucket: "api-rest-libreria.firebasestorage.app",
    messagingSenderId: "1031907610200",
    appId: "1:1031907610200:web:ec52c521bb4af06041c42d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);