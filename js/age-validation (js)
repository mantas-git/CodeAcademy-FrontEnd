let validationDiv = document.getElementById('isValidated');
let inputField = document.getElementById('age');

function validateAge() {
    let enteredAge = parseInt(document.getElementById('age').value);
    if (enteredAge > 12) {
        validated();
    } else {
        notValidated()
    }
}

function validated() {
    validationDiv.innerHTML = 'Amžius tinkamas';
    validationDiv.style.color = 'green';
    validationDiv.style.fontWeight = 'bold'
    window.open("../secret_page.html","_self")
}

function notValidated() {
    validationDiv.innerHTML = 'Amžius netinkamas. Minimalus amžius 12';
    validationDiv.style.color = 'red';
    age.style.display = 'none';
}