function getRandomNumber() {
    return Math.ceil(Math.random() * 33);
}

const randomNumber = getRandomNumber();

const mainURL = "https://picsum.photos/v2/list?page=" + randomNumber;

function run() {
    fetch(mainURL)
        .then(response => response.json())
        .then(result => {
            const galleryDiv = document.querySelector('div.gallery');

            insertImages();

            function insertImages() {
                for (let i = 0; i < result.length; i++) {
                    let download_url = result[i].download_url;
                    let image = getImage(download_url);
                    galleryDiv.append(image);
                }
            }

            function getImage(download_url) {
                let newDiv = document.createElement('div');
                let loaderDiv = document.createElement('div');
                loaderDiv.className = 'loader';
                loaderDiv.textContent = 'Loading...'
                let newImg = document.createElement('img');
                newImg.src = download_url;
                newImg.onload = function (){
                    loaderDiv.remove();
                }
                newDiv.append(loaderDiv);
                newDiv.append(newImg);

                return newDiv;
            }

        });
}

run();