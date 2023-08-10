let masyvas = [];

const main = document.querySelector('main');

const input = document.createElement('input');
main.append(input);

const buttonPop = document.createElement('button');
buttonPop.textContent = 'Pop';
buttonPop.addEventListener('click', arrayPop);
main.append(buttonPop);

const buttonPush = document.createElement('button');
buttonPush.textContent = 'Push';
buttonPush.addEventListener('click', arrayPush);
main.append(buttonPush);

const buttonShift = document.createElement('button');
buttonShift.textContent = 'Shift';
buttonShift.addEventListener('click', arrayShift);
main.append(buttonShift);

const buttonUnshift = document.createElement('button');
buttonUnshift.textContent = 'Unshift';
buttonUnshift.addEventListener('click', arrayUnshift);
main.append(buttonUnshift);

const output = document.createElement('p');
output.textContent = '';
main.append(output);

function arrayPop() {
    masyvas = output.innerText.split(',');
    masyvas.pop();
    output.innerHTML = masyvas.join(',');
}

function arrayPush() {
    masyvas.push(input.value);
    output.innerHTML = masyvas.join(',');
}

function arrayShift() {
    masyvas = output.innerText.split(',');
    masyvas.shift();
    output.innerHTML = masyvas.join(',');
}

function arrayUnshift() {
    masyvas.unshift(input.value);
    output.innerHTML = masyvas.join(',');
}