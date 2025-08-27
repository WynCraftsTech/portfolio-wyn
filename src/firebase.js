import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVFkm5TEckvpivXpaW6DrorMxIJ4oq6Wo",
  authDomain: "godwyn-s-firebase.firebaseapp.com",
  databaseURL: "https://godwyn-s-firebase-default-rtdb.firebaseio.com",
  projectId: "godwyn-s-firebase",
  storageBucket: "godwyn-s-firebase.firebasestorage.app",
  messagingSenderId: "76274970337",
  appId: "1:76274970337:web:972013b4fa1c6bf7d391a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database instance
export const db = getFirestore(app);
export default app;