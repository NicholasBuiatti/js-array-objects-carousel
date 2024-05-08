const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },

    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },

    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },

    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },

    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const div = []

//////////////////    CREAZIONE 5 CONTENITORI CARTA GRANDE
let filmAttivo;
for (let i = 0; i < images.length; i++) {
    const film = images[i];
    console.log(film);
    //creo il div per l'immagine grande
    const bigImg = document.createElement('div')

    addClass(bigImg, 'col-10', 'row', 'd-none', 'd-flex')
    //creo il div per la descrizione immagine
    const desImg = document.createElement('div');
    //assegno lo style al div per la descrizione
    desImg.style = `align-self: end; text-align: end; color: white;`


    for (const key in film) {
        console.log(key, film[key])
        bigImg.style = `height: 40rem; background-image: url('./${film.image}'); background-size: cover; background-position: center;`;
        desImg.innerHTML = `<h1>${film.title}</h1>
                        <p>${film.text}</p>`
    }

    //inserisco l'immagine grande le div carosello in html
    document.querySelector('#carosello').append(bigImg);
    //inserisco il div descrizione nel div immagine creato prima
    bigImg.append(desImg)

    //pusho in un array tutti i div che creo
    div.push(bigImg)

}

////////////////// CREAZIONE CONTENITORE CARTA PICCOLA
const slideBox = document.createElement('div')
slideBox.classList.add('col-2');
slideBox.classList.add('p-0');


const divMiniatura = [];

for (let i = 0; i < images.length; i++) {
    const film = images[i];
    const minImg = document.createElement('div');

    for (const key in film) {
        minImg.style = `height: 8rem; width: 100%; background-image: url('./${film.image}'); background-size: cover; background-position: center; text-align: center;`
    }

    document.querySelector('#carosello').append(slideBox)
    slideBox.append(minImg)

    divMiniatura.push(minImg)
}







////////////////////////////////// PULSANTE BUTTON NEXT

//do al primo elemento dell'array il display flex per renderlo visibile
let i = 0;
let imgAttiva = div[i]
imgAttiva.classList.remove('d-none');


// controllo sull'array delle miniature mettendo la classe che voglio io sulla prima di default
let miniaturaAttiva = divMiniatura[0];
addClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning');
let n = 0;



const btnNext = document.querySelector('#next')




btnNext.addEventListener('click', function () {
    if (!imgAttiva.classList.contains('d-none') && i < div.length - 1) {
        imgAttiva.classList.add('d-none')
        i++
        imgAttiva = div[i];
        imgAttiva.classList.remove('d-none')

        removeClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning')
        n++
        miniaturaAttiva = divMiniatura[n];
        addClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning');


    } else {
        imgAttiva.classList.add('d-none')
        i = 0
        imgAttiva = div[i];
        imgAttiva.classList.remove('d-none');

        removeClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning')
        n = 0;
        miniaturaAttiva = divMiniatura[i];
        addClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning');
    }
})




///////////////////////////// BOTTONE BACK
const btnBack = document.querySelector('#back')
btnBack.addEventListener('click', function () {
    if (!imgAttiva.classList.contains('d-none') && i > 0) {
        imgAttiva.classList.add('d-none')
        i--
        imgAttiva = div[i];
        imgAttiva.classList.remove('d-none')


        removeClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning')
        n--
        miniaturaAttiva = divMiniatura[n];
        addClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning');

    } else {
        imgAttiva.classList.add('d-none')
        i = div.length - 1
        imgAttiva = div[i];
        imgAttiva.classList.remove('d-none');


        removeClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning')
        n = divMiniatura.length - 1;
        miniaturaAttiva = divMiniatura[n];
        addClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning');
    }
})


/////////////////////////////// CAMBIO DELL'IMMAGINE OGNI 3 SECONDI CON BOTTONE PLAY
const btnPlay = document.querySelector('#play')
let timerCarosello;
btnPlay.addEventListener('click', function () {
    timerCarosello = setInterval(function () {
        if (!imgAttiva.classList.contains('d-none') && i < div.length - 1) {
            imgAttiva.classList.add('d-none')
            i++
            imgAttiva = div[i];
            imgAttiva.classList.remove('d-none')

            removeClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning')
            n++
            miniaturaAttiva = divMiniatura[n];
            addClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning');


        } else {
            imgAttiva.classList.add('d-none')
            i = 0
            imgAttiva = div[i];
            imgAttiva.classList.remove('d-none');

            removeClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning')
            n = 0;
            miniaturaAttiva = divMiniatura[i];
            addClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning');
        }
    }, 3000)
})



const btnReverse = document.querySelector('#reverse');
let reverseCarosello;
btnReverse.addEventListener('click', function () {
    reverseCarosello = setInterval(function () {
        if (!imgAttiva.classList.contains('d-none') && i > 0) {
            imgAttiva.classList.add('d-none')
            i--
            imgAttiva = div[i];
            imgAttiva.classList.remove('d-none')


            removeClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning')
            n--
            miniaturaAttiva = divMiniatura[n];
            addClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning');

        } else {
            imgAttiva.classList.add('d-none')
            i = div.length - 1
            imgAttiva = div[i];
            imgAttiva.classList.remove('d-none');


            removeClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning')
            n = divMiniatura.length - 1;
            miniaturaAttiva = divMiniatura[n];
            addClass(miniaturaAttiva, 'border', 'rounded', 'border-5', 'border-warning');
        }
    }, 3000)
})


const btnStop = document.querySelector('#stop');

btnStop.addEventListener('click', function () {
    clearInterval(timerCarosello)
    clearInterval(reverseCarosello)
})


// evidenziatore delle immagini miniaturizzate
divMiniatura.forEach((element, index) => {


    element.addEventListener('click', function () {
        clearInterval(timerCarosello)
        clearInterval(reverseCarosello)
        
        div.forEach((element) => {
            element.classList.add('d-none')
        })
        div[index].classList.remove('d-none')
        imgAttiva = div[index]

        divMiniatura.forEach((element) => {
            removeClass(element, 'border', 'rounded', 'border-5', 'border-warning')
        })
        addClass(this, 'border', 'rounded', 'border-5', 'border-warning');

    })
})
/************************** RIVEDERE IL CLICK SULLE IMMAGINI 
***************************************************************/