// import comida from './imagenes.js'
// const desayunos= document.querySelector('.desayunos');


// for (let index = 0; index < comida.comida.desayunos.length; index++) {
    
//    const DesayunosListado= document.createElement('div');
// const Img = document.createElement('img');
// const parrafo = document.createElement('p');

// parrafo.innerText=comida.comida.desayunos[index].nombre

// Img.src=comida.comida.desayunos[index].img;
// Img.alt='desayunos';
// DesayunosListado.classList.add('desayunos-listado');
// desayunos.append(DesayunosListado);
// DesayunosListado.append(Img,parrafo);
    
    
// }

// console.log(DesayunosListado);

// console.log(comida.comida.desayunos.length);


// console.log(desayunos);


// import comida from './imagenes.js';

// const desayunos = document.querySelector('.desayunos');

// comida.comida.desayunos.forEach((item, index) => {
//   const DesayunosListado = document.createElement('div');
//   const Img = document.createElement('img');
//   const parrafo = document.createElement('p');

//   Img.src = item.img;
//   Img.alt = item.nombre;

  // 👉 ID del 1 al 5
//   Img.id = index ;

//   parrafo.textContent = item.nombre;

//   DesayunosListado.classList.add('desayunos-listado');
//   DesayunosListado.append(Img, parrafo);

//   desayunos.append(DesayunosListado);
// });




import comida from "./imagenes.js";

const contenedor = document.querySelector(".desayunos");

comida.comida.almuerzos.forEach((item, index) => {
  const div = document.createElement("div");
  div.classList.add("desayunos-listado");

  div.innerHTML = `
    <img 
      src="${item.img}" 
      alt="${item.nombre}"
      data-id="${index}"
    >
    <p>${item.nombre}</p>
  `;


  contenedor.appendChild(div);
});


