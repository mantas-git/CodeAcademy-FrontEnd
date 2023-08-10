let masyvas = [];

const main = document.querySelector('main');

const input = document.createElement('input');

addButton('Shift');
addButton('Unshift');
main.append(input);
addButton('Push');
addButton('Pop');

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
    getOutputValue().pop();
    updateInputOutput();
}

function arrayPush() {
    masyvas.push(input.value);
    updateInputOutput();
}

function arrayShift() {
    getOutputValue().shift();
    updateInputOutput();
}

function arrayUnshift() {
    masyvas.unshift(input.value);
    updateInputOutput();
}

function getOutputValue() {
    masyvas = output.innerText.split(',');
    return masyvas;
}

function updateInputOutput() {
    input.value = '';
    output.innerHTML = masyvas.join(',');
}