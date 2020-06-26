const form = document.querySelector('#add-email-form');

const dt = Date.now();

// Add new Email
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Email Sent!\nWait for our response');
    db.collection('emails').add({
        name: form.name.value,
        email: form.mail.value,
        message: form.message.value,
        time: new Date(Date.now())
    });
    clearEmailFields();
});

function clearEmailFields() {

    document.getElementById("email-name").value = "";
    document.getElementById("email-mail").value = "";
    document.getElementById("email-message").value = "";
}