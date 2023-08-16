const myForm = document.getElementById('myForm');
const h2 = document.getElementById('output');

myForm.addEventListener('submit', event => {
    event.preventDefault();
    const input = event.target.elements.data;
    const inputValue = input.value;

    localStorage.setItem('test', inputValue);

    const localStorageValue = localStorage.getItem('test');

    h2.innerText = localStorageValue;
});