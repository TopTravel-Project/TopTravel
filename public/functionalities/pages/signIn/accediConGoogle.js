let mainContainer = document.querySelector('main');
let mainSections = document.querySelectorAll('main>section');

let accediContainer = document.querySelector('#accedi-container');
console.log(accediContainer);

let googleButton = document.querySelector('#accedi-google');


import chat from '../chat/chat.js';
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        chat();
        console.log('user logged in');
    } else {
        signIn();
        console.log('NOT log in');
    }
});

function signIn() {

    console.log('sign in ');
    hideAllSectionButNot(accediContainer);

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
        console.log('sign in with google');
    }

    googleButton.addEventListener('click', signInWithGoogle);
}

function hideAllSectionButNot(visibleSection) {

    mainSections.forEach(function(section) {
        console.log('sign in not hidden');
        section.classList.add('hidden');
        visibleSection.classList.remove('hidden');
    });
}