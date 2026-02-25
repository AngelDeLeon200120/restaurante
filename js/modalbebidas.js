// import comida from "./imagenes.js";

// const imagen = document.querySelectorAll(".desayunos .desayunos-listado img");
// const Modal = document.querySelector(".modal-overlay");
// const modal = document.querySelector(".modal");

// const iconoX = document.querySelector(".modal-overlay .icono-x");
// const Img = document.createElement("img");
// const h2 = document.createElement("h2");
// const parrafo= document.querySelector('.descripcion');
// const listadoDesayunos= document.querySelectorAll('.desayunos-listado');
// const precio=document.querySelector('.precio');


// imagen.forEach((items) => {
//   items.addEventListener("click", function (e) {
//     parrafo.innerHTML=comida.comida.desayunos[e.target.id].descripcion;
//     precio.innerHTML="Q"+comida.comida.desayunos[e.target.id].precio
//     Modal.classList.toggle("active");
//     let imgUrl = e.target.src;
//     let url = imgUrl.split("http://127.0.0.1:5500");
//     let punto = "..";
//     let UrlImagen=punto + url[1]
//     Img.src = UrlImagen;
//     h2.innerText=e.target.alt
//     modal.append(h2,Img,parrafo,precio);
//     console.log(UrlImagen);
//     console.log(e.target.id);
//     console.log(comida.comida.desayunos[e.target.id].id);
    
//   });
// });

// iconoX.addEventListener("click", function () {
//   Modal.classList.toggle("active");
// });
// console.log( listadoDesayunos[0].id);

// console.log(iconoX);



import comida from "./imagenes.js";

const imagenes = document.querySelectorAll(".desayunos img");
const Modal = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");

const iconoX = document.querySelector(".modal-overlay .icono-x");
const parrafo = document.querySelector(".descripcion");
const precio = document.querySelector(".precio");

const Img = document.createElement("img");
const h2 = document.createElement("h2");

imagenes.forEach((img) => {
  img.addEventListener("click", (e) => {

    const index = Number(e.target.dataset.id);

    const bebida = comida.bebidas.jugos[index];

    if (!bebida) return; // seguridad extra

    h2.textContent = bebida.nombre;
    parrafo.textContent = bebida.descripcion;
    precio.textContent = "Q" + bebida.precio;
    Img.src = bebida.img;

    modal.prepend(h2);
    modal.prepend(Img);

    Modal.classList.add("active");
  });
});

iconoX.addEventListener("click", () => {
  Modal.classList.remove("active");
});