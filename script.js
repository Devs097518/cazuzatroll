let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');

let start = document.getElementById('abrir');
let tela1 = document.getElementById('tela1');
let tela2 = document.getElementById('tela2');


let fb1 = () => {
    b1.style.opacity = '0';
    b2.style.opacity = '0';
    b3.style.opacity = '1';
    b4.style.opacity = '0';
}

let fb2 = () => {
    b1.style.opacity = '0';
    b2.style.opacity = '0';
    b3.style.opacity = '0';
    b4.style.opacity = '1';
}

let fb3 = () => {
    b1.style.opacity = '0';
    b2.style.opacity = '1';
    b3.style.opacity = '0';
    b4.style.opacity = '0';
}

let fb4 = () => {
    b1.style.opacity = '1';
    b2.style.opacity = '0';
    b3.style.opacity = '0';
    b4.style.opacity = '0';
}

let play = () => {
    tela1.style.display = 'none';
    tela2.style.display = 'block';

    const audio = new Audio('Exagerado - Cazuza - Cazuza.mp3');
audio.loop = true;
audio.play();
}


b1.addEventListener('click', fb1);
b2.addEventListener('click', fb2);
b3.addEventListener('click', fb3);
b4.addEventListener('click', fb4);

start.addEventListener('click', play);
