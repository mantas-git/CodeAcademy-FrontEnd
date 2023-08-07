const menuElemetList = [
    {href:'../index.html', title: 'Pagrindinis'},
    {href:'../pictures.html', title: 'Nuotraukos'},
    {href:'../about.html', title: 'Apie mus'},
    {href:'../contacts.html', title: 'Kontaktai'},
];

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

let newNavTags = document.getElementsByTagName('li');
for(let i = 0; i < newNavTags.length; i++) {
    let element = newNavTags[i];
    element.addEventListener('click',() => setBackgroundColor(element));
}

function setBackgroundColor(element){
    element.style.backgroundColor = `greenyellow`;
}

let url = window.location.pathname;
let href = url.split("/").reverse()[0];

for(let i = 0; i < newNavTags.length; i++) {
    let element = newNavTags[i];
    let child = element.children;
    console.log(child[0].href);
    let childHref = child[0].href.split("/").reverse()[0];
    if (childHref == href) {
        element.style.backgroundColor = 'darkgrey';
    }
}