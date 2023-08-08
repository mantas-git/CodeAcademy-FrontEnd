const myForm = document.querySelector('form');
const result = document.querySelector('#enterdNameAndSurname');
myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formElement = e.target.elements;
    const formName = formElement.name.value;
    const formSurname = formElement.surname.value;
    result.innerHTML = `Vardas: ${formName} Pavarde: ${formSurname}`;
});