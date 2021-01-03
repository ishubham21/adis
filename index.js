var disclaimer = document.querySelector('.disclaimer')
var bdayCard = document.querySelector('.bday-card')
var video = document.querySelector('.video')
video.classList.add('hide')

if (window.innerWidth < 1000) {
    disclaimer.classList.add('hide')
    alert('Beta ji...Bola tha na laptop mein hi dekhna')
}
else{
    loadContent()
}

function loadContent() {
    var formlvl1 = document.querySelector('#lvl1')
    formlvl1.addEventListener('submit', checkAdi)
}

function checkAdi(e){
    e.preventDefault()
    var nameUser = document.querySelector('#name').value
    var finalName = nameUser.toLowerCase()

    if (finalName === 'aditi' || finalName === 'adi' || finalName === 'aditi jha') {
        alert('Aao aao beta ji! Yeh OK dikh rha hai?...ise click kro. Aur HEADPHONES LE AAO')
        displayCard()
    }
    else{
        alert(`This is only for Aditi, you may exit.`)
    }
}

function displayCard() {

    var music = new Audio()
    music.src = "./imgs/Happy Birthday English 2.mp3"
    music.play()
    disclaimer.classList.add('hide')
    bdayCard.classList.add('show')

    var lvl2 = document.querySelector('#lvl2')
    lvl2.addEventListener('click', displayVideo)

}

function displayVideo() {
    bdayCard.classList.remove('show')
    video.classList.add('show')
}