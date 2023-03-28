import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { ref } from 'vue'

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
let isLoggedIn = ref(false)
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
     isLoggedIn.value = user
  }
  else {
    isLoggedIn.value = false 
  }
return isLoggedIn
  });


export { auth, isLoggedIn, db }
