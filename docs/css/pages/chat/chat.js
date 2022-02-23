const firebaseConfig = {
    apiKey: "AIzaSyD3G7AONzK48NpMSqZyXF2GC4o313ZFbtU",
    authDomain: "toptravel0.firebaseapp.com",
    databaseURL: "https://toptravel0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "toptravel0",
    storageBucket: "toptravel0.appspot.com",
    messagingSenderId: "1062383759951",
    appId: "1:1062383759951:web:0f6c82154be94a6a86b03a",
    measurementId: "G-PD6RZKY77P"
};

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
    apiKey: '### FIREBASE API KEY ###',
    authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

var db = firebase.firestore();