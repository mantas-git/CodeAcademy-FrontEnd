let masyvas = [];

const main = document.querySelector('main');

const input = document.createElement('input');
main.append(input);

addButton('Pop');
addButton('Push');
addButton('Shift');
addButton('Unshift');

const output = document.createElement('p');
output.textContent = '';
main.append(output);

function addButton(name) {
    const newButton = document.createElement('button');
    newButton.textContent = name;
    let functionName = "array" + name;
    newButton.addEventListener('click', window[functionName]);
    main.append(newButton);
}

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