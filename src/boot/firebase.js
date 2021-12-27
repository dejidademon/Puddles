import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCSguuimx3rhs7RFJ2dH46jv_XPlOoMGnU",
    authDomain: "puddles-6a23b.firebaseapp.com",
    databaseURL: "https://puddles-6a23b-default-rtdb.firebaseio.com",
    projectId: "puddles-6a23b",
    storageBucket: "puddles-6a23b.appspot.com",
    messagingSenderId: "759236687833",
    appId: "1:759236687833:web:0cbd4ff153377d02b28bc8"
  };
  
  const app = initializeApp(firebaseConfig);

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

//   signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
// });

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });