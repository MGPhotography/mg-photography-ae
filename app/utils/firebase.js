import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaPoIUlzL_GGhQudDBxhw4oH8h8bt0YbE",
  authDomain: "dark-studio-b9d75.firebaseapp.com",
  projectId: "dark-studio-b9d75",
  storageBucket: "dark-studio-b9d75.appspot.com",
  messagingSenderId: "1032216978043",
  appId: "1:1032216978043:web:b99a6ebdbdbdf34ad838de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

export { firestore, storage };