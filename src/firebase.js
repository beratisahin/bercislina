import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDDYabqcu_iKEZaZZsEDl2HiqjXkryb8Lg",
    authDomain: "bercislinaerzurum-13a80.firebaseapp.com",
    projectId: "bercislinaerzurum-13a80",
    storageBucket: "bercislinaerzurum-13a80.appspot.com",
    messagingSenderId: "1064449042971",
    appId: "1:1064449042971:web:204966e6d49192bf7326be",
    measurementId: "G-86RDXM599X"
});

const db = firebaseApp.firestore()

export  {firebaseApp, db} ;