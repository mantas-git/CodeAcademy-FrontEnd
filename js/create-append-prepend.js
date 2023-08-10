let blurForm = document.getElementById('number');
let blurMain = document.querySelector('main > form');

blurForm.addEventListener('blur', blurAction);

function blurAction(t) {
    hideFormDivs();
    let enteredText = this.value;
    if (enteredText.length > 0) {
        if (enteredText >= 0 && enteredText <= 99) {
            goodValue();
        } else {
            badValue(enteredText);
        }
    }
}

function goodValue() {
    let resultDiv = document.createElement('div');
    resultDiv.className = ('goodNumber');
    resultDiv.textContent = 'Tai yra skaičius tarp 0 ir 99';
    blurMain.insertBefore(resultDiv, blurForm);
}

function badValue(text) {
    let resultDiv = document.createElement('div');
    resultDiv.className = ('badValue');
    resultDiv.textContent = `Tai yra ne skaičius ARBA mažersnis už 0 ARBA didesnis už 99, jūs įvedėte ${text}`;
    blurMain.append(resultDiv);
}

function hideFormDivs() {
    let removableDiv = document.querySelector('form > div');
    if(removableDiv != null){
        removableDiv.remove();
    }
}