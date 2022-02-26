var firebaseConfig = {
    apiKey: "AIzaSyDAcLWuQWaT4hhVQiS-0y63UEAhPKmM70Q",
    authDomain: "toptravel012345.firebaseapp.com",
    projectId: "toptravel012345",
    storageBucket: "toptravel012345.appspot.com",
    messagingSenderId: "83033350851",
    appId: "1:83033350851:web:a2a8443703665842d2f876",
    measurementId: "G-GR1J8VJVQM"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log("✅ Firebase initialized Succesfully!");

var db = firebase.firestore();