const calcButtonList = [
    {id: 'bOne', title: '1'},
    {id: 'bTwo', title: '2'},
    {id: 'bThree', title: '3'},
    {id: 'bPlus', title: '+'},

    {id: 'bFour', title: '4'},
    {id: 'bFive', title: '5'},
    {id: 'bSix', title: '6'},
    {id: 'bMinus', title: '-'},

    {id: 'bSeven', title: '7'},
    {id: 'bEight', title: '8'},
    {id: 'bNine', title: '9'},
    {id: 'bMultiply', title: '*'},

    {id: 'bReset', title: 'CE'},
    {id: 'bZero', title: '0'},
    {id: 'bCount', title: '='},
    {id: 'bDevide', title: '/'},
];

let calcButtons = document.querySelector('#calcDiv');
let tempButtons = '<div id="calcLine"/></div>';
for (let i = 0; i < calcButtonList.length; i++) {
    let id = calcButtonList[i].id;
    let title = calcButtonList[i].title;
    let calcButton = `<button id="${id}">${title}</button>`;
    tempButtons += calcButton;
}
calcButtons.innerHTML = tempButtons;

let newButtons = document.getElementsByTagName('button');
for (let i = 0; i < newButtons.length; i++) {
    let buttonElement = newButtons[i];
    buttonElement.addEventListener('click', calcAction);
}

function calcAction() {
    let cLine = document.getElementById('calcLine');
    if (this.id === 'bReset') {
        cLine.innerHTML = '';
    } else if (this.id === 'bPlus' || this.id === 'bMinus' || this.id === 'bMultiply' || this.id === 'bDevide') {
        if (lastSymbol(cLine.textContent)) {
            let text = cLine.innerHTML;
            console.log(text);
            text = text.slice(0, -1);
            console.log(text);
            cLine.textContent = text + this.textContent;
        } else {
            cLine.innerHTML += this.textContent;
        }
    } else if (this.id === 'bCount') {
        if (lastSymbol(cLine.textContent)) {
            cLine.textContent = 'ERROR'
        } else {
            calculation(cLine.textContent);
        }
    } else {
        cLine.innerHTML += this.textContent;
    }
}

function lastSymbol(text) {
    let lastS = text.slice(-1);
    return (lastS === '+' || lastS === '-' || lastS === '*' || lastS === '/');
}

function calculation(textLine) {
    console.log(textLine);
    let digits = textLine.match(/\d+/g);
    console.log(digits);
    let noDigits = textLine.replace(/[0-9]/g, '').split('');
    for (let i = 0; i < noDigits.length; i++) {
        if (noDigits[i] === '*') {
            digits[i + 1] = multiply(digits[i], digits[i + 1]);
            digits[i] = 'x';
        }
        if (noDigits[i] === '/') {
            digits[i + 1] = divide(digits[i], digits[i + 1]);
            digits[i] = 'x';
        }
        console.log(digits);
    }

    removeX(digits);

    for (let i = 0; i < noDigits.length; i++) {
        if (noDigits[i] === '*' || noDigits[i] === '/') {
            noDigits.splice(i, 1);
            i--;
        }
    }

    for (let i = 0; i < noDigits.length; i++) {
        if (noDigits[i] === '+') {
            digits[i + 1] = sum(parseInt(digits[i]), parseInt(digits[i + 1]));
            digits[i] = 'x';
        }
        if (noDigits[i] === '-') {
            digits[i + 1] = subtract(digits[i], digits[i + 1]);
            digits[i] = 'x';
        }
        console.log(digits);
    }

    removeX(digits);

    console.log(digits);

    let cLine = document.getElementById('calcLine');

    if (digits[0] != null) {
        cLine.textContent = digits[0];
    } else {
        cLine.textContent = 'ERROR';
    }
}

function removeX(digits) {
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === 'x') {
            digits.splice(i, 1);
            i--;
        }
    }
}


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

dragElement(document.getElementById("calcDiv"));

function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

let calcDiv = document.getElementById("calcDiv");
calcDiv.addEventListener("keydown", function (e) {
        if (e.code === "1") {  //checks whether the pressed key is "Enter"
            alert('1');
        }
    }
)