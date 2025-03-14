// lib/firebase.ts

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCTUE1nDAIyiM46wuugb65xFPYsFCmhags",
    authDomain: "midnight-a6540.firebaseapp.com",
    projectId: "midnight-a6540",
    storageBucket: "midnight-a6540.firebasestorage.app",
    messagingSenderId: "147469845503",
    appId: "1:147469845503:web:e8ac5c7b5055dcd51addca",
    measurementId: "G-N39VWFNG0Y"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
