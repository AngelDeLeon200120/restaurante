import comida from './imagenes.js';

const carouselImagenes = document.querySelector('.carousel-imagenes');

const img= document.createElement('img');
img.classList.add('imgActive');
img.src='./img/lugar2.jpg';
img.alt = 'carousel lugares';
carouselImagenes.append(img);
console.log(comida.comida.almuerzos[0].img);


const carusel= document.querySelector('.carousel');

carusel.addEventListener('click',function (e) {
    console.log(e.target);
    
})
