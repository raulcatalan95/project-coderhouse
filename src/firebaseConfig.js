import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDERID,
  appId:import.meta.env. VITE_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);