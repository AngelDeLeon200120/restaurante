import comida from './imagenes.js';

const carouselImagenes = document.querySelector('.carousel-imagenes');

const img= document.createElement('img');
img.classList.add('imgActive');
img.src='./img/lugar.jpg';
img.alt = 'carousel lugares';
carouselImagenes.append(img);

function animarImagen() {
  img.classList.remove('imgActive'); // quita la clase
  void img.offsetWidth;              // fuerza el reflow (truco clave)
  img.classList.add('imgActive');    // vuelve a poner la clase
}



const FlechaDerecha= document.getElementById('carousel_flecha-derecha-derecha');
const FlechaIzquierda=document.getElementById('carousel_flecha-izquierda-izquierda');
let conteo=0;

let startX = 0;
let endX = 0;
const threshold = 50;

function siguiente() {
  conteo++;

  if (conteo >= comida.lugares.lugar.length) {
    conteo = 0;
  }

  img.src = comida.lugares.lugar[conteo].img;
  animarImagen();
}

function anterior() {
  conteo--;

  if (conteo < 0) {
    conteo = comida.lugares.lugar.length - 1;
  }

  img.src = comida.lugares.lugar[conteo].img;
  animarImagen();
}

function manejarArrastre() {
  const distancia = endX - startX;

  if (Math.abs(distancia) < threshold) return; // movimiento muy corto

  if (distancia < 0) {
    // swipe izquierda → siguiente imagen
    siguiente();
  } else {
    // swipe derecha → imagen anterior
    anterior();
  }
}


carouselImagenes.addEventListener('mousedown', (e) => {
  startX = e.clientX;
});

carouselImagenes.addEventListener('mouseup', (e) => {
  endX = e.clientX;
  manejarArrastre();
});

carouselImagenes.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carouselImagenes.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  manejarArrastre();
});



FlechaDerecha.addEventListener('click', siguiente);
FlechaIzquierda.addEventListener('click', anterior);





// FlechaDerecha.addEventListener('click',function() {
//    console.log(comida.lugares.lugar[0].img);

//    conteo++;
   
//     if (conteo >= comida.lugares.lugar.length) {
//       conteo = 0;
//    }
 
//     img.src = comida.lugares.lugar[conteo].img;
//    console.log(conteo);
//    animarImagen();
// });

// const FlechaIzquierda=document.getElementById('carousel_flecha-izquierda-izquierda');

// FlechaIzquierda.addEventListener('click',()=>{
// conteo--

// if (conteo<0) {
//    conteo= comida.lugares.lugar.length-1
// }

// img.src = comida.lugares.lugar[conteo].img;
// animarImagen();

// });
