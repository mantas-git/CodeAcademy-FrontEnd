let blurForm = document.getElementById('number');
let blurMain = document.querySelector('main > form');

blurForm.addEventListener('blur', blurAction);
function blurAction(t) {
    hideFormDivs();
    if(this.value > 0 && this.value < 99){
        goodValue();
    }
    else {
        badValue(this.value);
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
    let removableDivs = document.getElementsByClassName('goodNumber');
    console.log(removableDivs);
    if(removableDivs.length > 0) {
        removableDivs[0].remove();
    }
    removableDivs = document.getElementsByClassName('badValue');
    console.log(removableDivs);
    if(removableDivs.length > 0) {
        removableDivs[0].remove();
    }
}