import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDjcJbzRK7wZZgCipzT_Tcd2pMC1_rmOyQ",
  authDomain: "coderhouse-5da1a.firebaseapp.com",
  projectId: "coderhouse-5da1a",
  storageBucket: "coderhouse-5da1a.appspot.com",
  messagingSenderId: "1057249299968",
  appId: "1:1057249299968:web:c2dd52b5ceb6bf4d6ed2e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);