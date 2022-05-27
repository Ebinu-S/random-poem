import Firebase from 'firebase';

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyDKFe1Zbw-yrMrg2vVIRxm2ifpzIahdHC8",
    authDomain: "random-poem-53524.firebaseapp.com",
    projectId: "random-poem-53524",
    storageBucket: "random-poem-53524.appspot.com",
    messagingSenderId: "86043709704",
    appId: "1:86043709704:web:c7c9381468fc6521b39cbd",
    measurementId: "G-W607ZL5HWF"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export {db, auth, storage};