var firebaseConfig = {
    apiKey: "AIzaSyBtW8UqCbZYLWOZrQR0evyEUxXtlgkNev0",
    authDomain: "bday-adi.firebaseapp.com",
    databaseURL: "https://bday-adi-default-rtdb.firebaseio.com",
    projectId: "bday-adi",
    storageBucket: "bday-adi.appspot.com",
    messagingSenderId: "9943303641",
    appId: "1:9943303641:web:9798a6d36fadb49c32c5c8"
};
// Initialize Firebase


var disclaimer = document.querySelector('.disclaimer')
var bdayCard = document.querySelector('.bday-card')
var video = document.querySelector('.video')
video.classList.add('hide')
var msg = document.querySelector('.msg')
msg.classList.add('hide')
var msgF = document.querySelector('.msg-final')
msgF.classList.add('hide')

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

var music = new Audio()
function displayCard() {

    music.src = "./imgs/Happy Birthday English 2.mp3"
    music.play()
    disclaimer.classList.add('hide')
    bdayCard.classList.add('show')

    var lvl2 = document.querySelector('#lvl2')
    lvl2.addEventListener('click', displayVideo)

}

function displayVideo() {

    music.pause()

    bdayCard.classList.remove('show')
    video.classList.add('show')

    var lvl3 = document.querySelector('#lvl3')
    lvl3.addEventListener('click', displayMsg)
}

function displayMsg() {
    video.classList.remove('show')
    msg.classList.add('show')

    var promptForm = document.querySelector('.promptForm')
    promptForm.addEventListener('submit', checkDay)
}

function checkDay(e){
    e.preventDefault()
    var day = document.querySelector('#check').value
    var realDay = day.toLowerCase()

    if (realDay === 'thursday') {
        callFirebase()
    }
    else{
        alert('Nhi yaad? Bhddhuuu :(')
    }
}

function callFirebase(){
    firebase.initializeApp(firebaseConfig);

    var msgRef = firebase.database().ref("msg/");

    msgRef.on("child_added", function (data, prevChildKey) {
        var newMsg = data.val();
        printFinalMsg(newMsg.message);
    })
}

function printFinalMsg(msg){
    var audio = new Audio()
    audio.src = './imgs/cheer2.mp3'
    audio.play()
    msgF.classList.add('show')

    var finalTxt = document.querySelector('.finalMsg')
    finalTxt.innerHTML = msg
}