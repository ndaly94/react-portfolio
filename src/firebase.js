// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCMw608OMvSaDBz4ivZ3Gn6zeqqbkP6bRo",
  authDomain: "react-portfolio-project-dac97.firebaseapp.com",
  projectId: "react-portfolio-project-dac97",
  storageBucket: "react-portfolio-project-dac97.appspot.com",
  messagingSenderId: "1045743265512",
  appId: "1:1045743265512:web:0f0e372b24f4f83bda0b5d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);
