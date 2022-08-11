// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLhbIdBpjdYt6YuoTZ2NvGtjgkoS_sQoo",
  authDomain: "whatsapp-next-10d40.firebaseapp.com",
  projectId: "whatsapp-next-10d40",
  storageBucket: "whatsapp-next-10d40.appspot.com",
  messagingSenderId: "50016013258",
  appId: "1:50016013258:web:0a3b518062328ba1369d33",
  measurementId: "G-TMQWHWXEH6"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider }