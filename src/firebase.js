import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDXc8Pkuyal9MeR4G05fWMRIaBkIklDrTs",
    authDomain: "bercislinaerzurum-4c5fa.firebaseapp.com",
    databaseURL: "https://bercislinaerzurum-4c5fa-default-rtdb.firebaseio.com",
    projectId: "bercislinaerzurum-4c5fa",
    storageBucket: "bercislinaerzurum-4c5fa.appspot.com",
    messagingSenderId: "1035475183115",
    appId: "1:1035475183115:web:2e36e563d7342c02ae490e",
    measurementId: "G-L67MLED5F0"
});

const db = firebaseApp.firestore()

export  {firebaseApp, db} ;










