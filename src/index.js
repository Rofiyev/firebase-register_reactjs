import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import App from './App';

export const MyContext = createContext();

firebase.initializeApp({
  apiKey: "AIzaSyCblm8t_NSPhZLxtytxZJSeyfsOcS317Kg",
  authDomain: "react-app-b4250.firebaseapp.com",
  projectId: "react-app-b4250",
  storageBucket: "react-app-b4250.appspot.com",
  messagingSenderId: "148714427501",
  appId: "1:148714427501:web:7ef485260a0145970a9b64",
  measurementId: "G-CRYNNXRPZ6"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyContext.Provider value={{ auth, firestore, firebase }}>
      <App />
    </MyContext.Provider>
  </React.StrictMode>
);