import firebase from 'firebase/app';
import 'firebase/firestore';


firebase.initializeApp({
    apiKey: 'AIzaSyDh778I0S2I5ccouLrXtUSbQSCBJJDsiI4',
    authDomain: 'top-travel0.firebaseapp.com',
    projectId: 'top-travel0'
});
var db = firebase.firestore();

const booksRef = firebase
    .firestore()
    .collection("books");

booksRef
    .get()
    .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log("All data in 'books' collection", data);
        // [ { id: 'glMeZvPpTN1Ah31sKcnj', title: 'The Great Gatsby' } ]
    });

/* firebase
    .firestore()
    .collection("books")
    .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log("All data in 'books' collection", data);
    }); */