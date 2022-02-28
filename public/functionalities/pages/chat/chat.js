export function chat() {
    console.log("chat is working...");
    let messaggioInput = document.getElementById('messaggio-input');
    let btnInviaMessaggio = document.getElementById('btn-invia-messaggio');

    let chatForm = document.getElementById('chat-form');

    let chatDatabase = db.collection('chat');

    let chatContainer = document.getElementById('chat-container');

    hideAllSectionButNot(chatContainer);

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let messaggio_string_inviato = messaggioInput.value;
        addMessaggio(messaggio_string_inviato);
        console.log("messaggio inviato dal form " + messaggio_string_inviato);
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
                    let messaggio_string_ricevuto = change.doc.data().messaggio_scritto;

                    let messagio_div_generato = document.createElement('div');

                    messagio_div_generato.classList.add('messaggio-received');

                    messagio_div_generato.textContent = messaggio_string_ricevuto;

                    //check if the message is from the user or the other person
                    document.getElementById('chat-container').appendChild(messagio_div_generato);
                }
            });
        }, (error) => {
            console.log("Error: ", error);
        });
}