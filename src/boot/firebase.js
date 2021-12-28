import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCSguuimx3rhs7RFJ2dH46jv_XPlOoMGnU",
    authDomain: "puddles-6a23b.firebaseapp.com",
    databaseURL: "https://puddles-6a23b-default-rtdb.firebaseio.com",
    projectId: "puddles-6a23b",
    storageBucket: "puddles-6a23b.appspot.com",
    messagingSenderId: "759236687833",
    appId: "1:759236687833:web:0cbd4ff153377d02b28bc8"
  };

let app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }
