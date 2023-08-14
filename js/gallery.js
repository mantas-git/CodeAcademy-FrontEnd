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
                    let url = result[i].url;
                    let download_url = result[i].download_url;
                    let image = getImage(url, download_url);
                    galleryDiv.append(image);
                }
            }

            function getImage(url, download_url) {
                let newDiv = document.createElement('div');
                let newImg = document.createElement('img');
                newImg.src = download_url;
                newImg.alt = url;
                newDiv.append(newImg);

                return newDiv;
            }

        });
}

run();