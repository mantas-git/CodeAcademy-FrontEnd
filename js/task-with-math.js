// ● Sukurti funkcijas sudeties, atimties, dalybos ir daugybos, kurioms bus
// perduodami du parametrai a, b ir rezultatas bus gražinamas per funkcijos
// return'ą.
// ● Panaudoti funkcijas kai kintamasis a keičiasi a++ žingsniu, sukant ciklą 5
// kartus. Atsakyma spausdinti elemente #rezultatai
// ● Panaudoti dar karta funkcijas (papildant sena koda) kai kintamasis b keičiasi
// b += 2 žingsniu, sukant ciklą 10 kartų.
let rez = document.getElementById('result');
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function addFive (a) {
    for(let i = 0; i < 5; i++) {
        a++;
    }
    return a;
}

function getSum() {
    let a = parseInt(document.getElementById('inta').value);
    let b = parseInt(document.getElementById('intb').value);
    rez.innerHTML = sum(a, b);
}

function getSubtract() {
    let a = parseInt(document.getElementById('inta').value);
    let b = parseInt(document.getElementById('intb').value);
    rez.innerHTML = subtract(a, b);
}

function getMultiply() {
    let a = parseInt(document.getElementById('inta').value);
    let b = parseInt(document.getElementById('intb').value);
    rez.innerHTML = multiply(a, b);
}

function getDivide() {
    let a = parseInt(document.getElementById('inta').value);
    let b = parseInt(document.getElementById('intb').value);
    rez.innerHTML = divide(a, b);
}

function getAddFive() {
    let a = parseInt(document.getElementById('inta').value);
    rez.innerHTML = addFive(a);
}

function getSuperB() {
    let b = parseInt(document.getElementById('intb').value);
    for (let i = 0; i < 10; i++) {
        b = sum(b, 2);
    }
    rez.innerHTML = b;
}