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

    var _0xa4de = ['toString', '28346aJIuzO', '{}.constructor(\x22return\x20this\x22)(\x20)', '7JSThhf', 'info', '975270OVwjqZ', '2502583NFtvAC', '1261642VTPOOT', '1467115areqUy', 'bind', 'error', 'constructor', 'return\x20(function()\x20', 'length', '134617YokrXY', 'log', 'return\x20/\x22\x20+\x20this\x20+\x20\x22/', '__proto__', '364626WEVKum', 'trace', '1crWVEx', 'exception', 'thursday', '^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}', 'console', 'warn', 'table', '49mvBwhw', 'apply']; var _0x26dd = function (_0x412cee, _0x4772e1) { _0x412cee = _0x412cee - 0x1f0; var _0xba366a = _0xa4de[_0x412cee]; return _0xba366a; }; var _0x1a8c6d = _0x26dd; (function (_0x3989f7, _0x584e26) { var _0x792cf2 = _0x26dd; while (!![]) { try { var _0x575186 = -parseInt(_0x792cf2(0x1f7)) * parseInt(_0x792cf2(0x208)) + -parseInt(_0x792cf2(0x207)) + parseInt(_0x792cf2(0x203)) * -parseInt(_0x792cf2(0x1f1)) + parseInt(_0x792cf2(0x1fe)) * parseInt(_0x792cf2(0x201)) + parseInt(_0x792cf2(0x205)) + -parseInt(_0x792cf2(0x1f5)) + parseInt(_0x792cf2(0x206)); if (_0x575186 === _0x584e26) { break; } else { _0x3989f7['push'](_0x3989f7['shift']()); } } catch (_0x396246) { _0x3989f7['push'](_0x3989f7['shift']()); } } }(_0xa4de, 0xcae81)); var _0x1be4f5 = function () { var _0x2b6b8c = !![]; return function (_0x418186, _0x2b7d2f) { var _0x39e14c = _0x2b6b8c ? function () { if (_0x2b7d2f) { var _0x441b22 = _0x2b7d2f['apply'](_0x418186, arguments); _0x2b7d2f = null; return _0x441b22; } } : function () { }; _0x2b6b8c = ![]; return _0x39e14c; }; }(); var _0x4c4c64 = _0x1be4f5(this, function () { var _0x26e25a = function () { var _0x68f470 = _0x26dd; var _0x1ef9f2 = _0x26e25a[_0x68f470(0x20b)](_0x68f470(0x1f3))()[_0x68f470(0x20b)](_0x68f470(0x1fa)); return !_0x1ef9f2['test'](_0x4c4c64); }; return _0x26e25a(); }); _0x4c4c64(); var _0x19e1d5 = function () { var _0x85d648 = !![]; return function (_0x480405, _0x599e90) { var _0x3ca2a2 = _0x85d648 ? function () { var _0x26e9a6 = _0x26dd; if (_0x599e90) { var _0x12ae71 = _0x599e90[_0x26e9a6(0x1ff)](_0x480405, arguments); _0x599e90 = null; return _0x12ae71; } } : function () { }; _0x85d648 = ![]; return _0x3ca2a2; }; }(); var _0x2d515f = _0x19e1d5(this, function () { var _0x363701 = _0x26dd; var _0x279323; try { var _0x3ec326 = Function(_0x363701(0x20c) + _0x363701(0x202) + ');'); _0x279323 = _0x3ec326(); } catch (_0xe17e96) { _0x279323 = window; } var _0x177a3f = _0x279323[_0x363701(0x1fb)] = _0x279323[_0x363701(0x1fb)] || {}; var _0x28db25 = [_0x363701(0x1f2), _0x363701(0x1fc), _0x363701(0x204), _0x363701(0x20a), _0x363701(0x1f8), _0x363701(0x1fd), _0x363701(0x1f6)]; for (var _0x42a8dc = 0x0; _0x42a8dc < _0x28db25[_0x363701(0x1f0)]; _0x42a8dc++) { var _0x1a04ae = _0x19e1d5[_0x363701(0x20b)]['prototype']['bind'](_0x19e1d5); var _0x1fe610 = _0x28db25[_0x42a8dc]; var _0x5aba92 = _0x177a3f[_0x1fe610] || _0x1a04ae; _0x1a04ae[_0x363701(0x1f4)] = _0x19e1d5[_0x363701(0x209)](_0x19e1d5); _0x1a04ae['toString'] = _0x5aba92[_0x363701(0x200)][_0x363701(0x209)](_0x5aba92); _0x177a3f[_0x1fe610] = _0x1a04ae; } }); _0x2d515f(); if (realDay === _0x1a8c6d(0x1f9)) { callFirebase(); } else { alert('Nhi\x20yaad?\x20Bhddhuuu\x20:('); }
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