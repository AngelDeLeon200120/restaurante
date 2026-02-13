const carouselImagenes = document.querySelector('.carousel-imagenes');

const img= document.createElement('img');
img.classList.add('imgActive');
img.src='./img/lugar2.jpg';
img.alt = 'carousel lugares';
carouselImagenes.append(img);
console.log(carouselImagenes);
