const menuElemetList = [
    {href:'/index.html', title: 'Pagrindinis'},
    {href:'/pictures.html', title: 'Nuotraukos'},
    {href:'/about.html', title: 'Apie mus'},
    {href:'/contacts.html', title: 'Kontaktai'},
];

const leftAsideElementList = [
    {href:'/task-with-math.html', title: 'Užduotis su veiksmais'},
    {href:'/calc.html', title: 'Skaičiuotuvas'},
    {href:'/age_validation.html', title: 'Amžiaus patikra'},
    {href:'/name_surname_form.html', title: 'Forma su dviem laukais'}
]

const bannerList = [
    // <div><img src="https://picsum.photos/200/300?random1" alt=""></div>
    {src:'https://picsum.photos/200/300?random', title: 'Užduotis su veiksmais'},
    {href:'/calc.html', title: 'Skaičiuotuvas'},
    {href:'/age_validation.html', title: 'Amžiaus patikra'},
    {href:'/name_surname_form.html', title: 'Forma su dviem laukais'}
]

let logoTag = document.querySelector('div.logo');
logoTag.innerHTML = `<a href="/" target="_self"><img src="img/logo.png" alt="LOGO" sizes="auto"></a>`;

let navTags = document.querySelector('header > nav');
let tempHTML = '<ul>';
for(let i = 0; i < menuElemetList.length; i++) {
    let href = menuElemetList[i].href;
    let title = menuElemetList[i].title;
    let menuElement = `<li><a href="${href}">${title}</a></li>`;
    tempHTML += menuElement;
}
tempHTML += '</ul>';
navTags.innerHTML = tempHTML;

let leftAsideTags = document.querySelector('aside.left');
tempHTML = '';
for(let i = 0; i < leftAsideElementList.length; i++) {
    let href = leftAsideElementList[i].href;
    let title = leftAsideElementList[i].title;
    let menuElement = `<span><a href="${href}">${title}</a></span><br>`;
    tempHTML += menuElement;
}
leftAsideTags.innerHTML = tempHTML;

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
    console.log(child[0].href);
    let childHref = child[0].href.split("/").reverse()[0];
    if (childHref === href) {
        element.style.color = '#e7ecff';
        element.style.textDecoration = 'underline';
    }
}

let searchField = document.getElementById("search");
searchField.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
            alert(searchField.value);
        }
    }
)
