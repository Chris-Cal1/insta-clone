// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApZgIIgA5tPU1xynG16ib2W5VsYCZHrpo",
  authDomain: "insta-clone-f94ac.firebaseapp.com",
  projectId: "insta-clone-f94ac",
  storageBucket: "insta-clone-f94ac.appspot.com",
  messagingSenderId: "596819051685",
  appId: "1:596819051685:web:99d51aedb8b03ed207794c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };