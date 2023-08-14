const menuElementList = [
    {href:'/index.html', title: 'Pagrindinis'},
    {href:'/pictures.html', title: 'Nuotraukos'},
    {href:'/about.html', title: 'Apie mus'},
    {href:'/contacts.html', title: 'Kontaktai'},
];

const leftAsideElementList = [
    {href:'/task-with-math.html', title: 'Užduotis su veiksmais'},
    {href:'/calc.html', title: 'Skaičiuotuvas'},
    {href:'/age_validation.html', title: 'Amžiaus patikra'},
    {href:'/name_surname_form.html', title: 'Forma su dviem laukais'},
    {href:'/create-append-prepend.html', title: 'Forma su "blur" funkcija'},
    {href:'/pop_push_shift_unshift.html', title: 'Pop Push Shift Unshift'},
    {href:'/gallery.html', title: 'Galerija (JSON)'},

]

let logoTag = document.querySelector('div.logo');
logoTag.innerHTML = `<a href="/" target="_self"><img src="img/logo.png" alt="LOGO" sizes="auto"></a>`;

let navTags = document.querySelector('header > nav');
let tempHTML = '<ul>';
for(let i = 0; i < menuElementList.length; i++) {
    let href = menuElementList[i].href;
    let title = menuElementList[i].title;
    let menuElement = `<li class="upperMenuElement"><a href="${href}">${title}</a></li>`;
    tempHTML += menuElement;
}
tempHTML += '</ul>';
navTags.innerHTML = tempHTML;

let searchTag = document.querySelector('div.searchZone');
searchTag.innerHTML = `
<label for="search"><img src="img/search-icon.png" alt="" width="25px"></label>
<input name="searchField" type="text" id="search" value=""/>
        `;

function createLeftAside() {
    const leftAsideTag = document.querySelector('aside.left');

    const leftAsideDiv = document.createElement('div');
    leftAsideDiv.className = 'menu';

    const leftAsideDivTitle = document.createElement('div');
    leftAsideDivTitle.className = 'title';
    leftAsideDivTitle.textContent = 'Užduotys';

    const leftAsideUl = document.createElement('ul');
    leftAsideUl.className = 'nav';

    for (let i = 0; i < leftAsideElementList.length; i++) {
        let newLi = document.createElement('li');
        let newA = document.createElement('a');
        newA.href = leftAsideElementList[i].href;
        newA.textContent = leftAsideElementList[i].title;
        newLi.append(newA);
        leftAsideUl.append(newLi);
    }
    leftAsideDiv.append(leftAsideDivTitle);
    leftAsideDiv.append(leftAsideUl);
    leftAsideTag.append(leftAsideDiv);
}

createLeftAside();

let bannerTags = document.querySelector('div.ads');
tempHTML = '';
for(let i = 1; i < 6; i++) {
    let menuElement = `<div><img src="https://picsum.photos/300/100?random${i}" alt=""></div>`;
    tempHTML += menuElement;
}
bannerTags.innerHTML = tempHTML;



let newNavTags = document.getElementsByTagName('li');
// for(let i = 0; i < newNavTags.length; i++) {
//     let element = newNavTags[i];
//     element.addEventListener('click',() => setBackgroundColor(element));
// }
//
// function setBackgroundColor(element){
//     element.style.backgroundColor = `greenyellow`;
// }

let url = window.location.pathname;
let href = url.split("/").reverse()[0];

for(let i = 0; i < newNavTags.length; i++) {
    let element = newNavTags[i];
    let child = element.children;
    let childHref = child[0].href.split("/").reverse()[0];
    if (childHref === href) {
        element.classList.add('activeMenuElement');
    }
}

let searchField = document.getElementById("search");
searchField.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
            alert(searchField.value);
        }
    }
)

// const arr = ['I', 'study', 'JavaScript', 'right', 'now'];
// arr.splice(0,3, "Lets", "dance");
// console.log(arr.join(' '));

// function sumuotiIr(a, b, callback) {
//     let sum = a + b;
//     callback(sum);
// }
// sumuotiIr(5,6, (skaicius) => { console.log('Skaiciu suma: ' + skaicius)});

// let accords = ['D', 'G', 'C', 'C7', 'F'];
//
// function addSeven(accord, callback) {
//     if(!accord.endsWith('7')) {
//         accord += '7';
//     }
//     callback(accord);
// }
//
// function readAccords (){
//     console.log(accords);
//     for (let i = 0; i < accords.length; i++) {
//         addSeven(accords[i], (a) => {accords[i] = a}  )
//     }
//     console.log(accords);
// }
// readAccords();