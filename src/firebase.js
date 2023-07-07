import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGDrSt9gpU7-PhZCxk9arC8Q07Pxw5Rig",
  authDomain: "chat-application-afe6a.firebaseapp.com",
  projectId: "chat-application-afe6a",
  storageBucket: "chat-application-afe6a.appspot.com",
  messagingSenderId: "952686778171",
  appId: "1:952686778171:web:c20e6bded874c87008c91e",
  measurementId: "G-3FJ5S7WGL0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
