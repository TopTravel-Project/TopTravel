const firebaseConfig = {
    apiKey: "AIzaSyDAcLWuQWaT4hhVQiS-0y63UEAhPKmM70Q",
    authDomain: "toptravel012345.firebaseapp.com",
    projectId: "toptravel012345",
    storageBucket: "toptravel012345.appspot.com",
    messagingSenderId: "83033350851",
    appId: "1:83033350851:web:a2a8443703665842d2f876",
    measurementId: "G-GR1J8VJVQM"
}
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true,
};
firestore.settings(settings);

export default firebase;

export {
    firestore,
};