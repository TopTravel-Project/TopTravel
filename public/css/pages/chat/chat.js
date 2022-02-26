let messaggioInput = document.getElementById('messaggio-input');
let btnInviaMessaggio = document.getElementById('btn-invia-messaggio');

let chatForm = document.getElementById('chat-form');

let chatDatabase = db.collection('chat');


/* // invia
btnInviaMessaggio.addEventListener('click', () => {
    let messaggio_string = messaggioInput.value;
    addMessaggio(messaggio_string);
    console.log("messaggio inviato dal buttone" + messaggio_string);
}); */

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let messaggio_string = messaggioInput.value;
    addMessaggio(messaggio_string);
    console.log("messaggio inviato dal form " + messaggio_string);
});

function addMessaggio(messaggio_string) {
    chatDatabase.add({
            messaggio_scritto: messaggio_string,
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

// ricevi

chatDatabase
    .onSnapshot((snapshot) => {
        //get all messagges, and for each one, create a new div
        snapshot.docChanges().forEach(change => {
            if (change.type === 'added') {
                let div = document.createElement('div');
                div.classList.add('messaggio');
                div.innerHTML = `
                <div class="messaggio-scritto">
                    <span>${change.doc.data().messaggio_scritto}</span>
                </div>
                `;
                //append the new div to the container
                document.getElementById('chat-container').appendChild(div);
            }
        });
    }, (error) => {
        console.log("Error: ", error);
    });