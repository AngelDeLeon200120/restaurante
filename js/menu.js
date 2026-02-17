const menu = document.querySelector('.barras');
const NavTelefono = document.querySelector('.nav-telefono');
const iconoX = document.querySelector('.icono-x');

menu.addEventListener('click', () => {
  NavTelefono.classList.add('activo');
});

iconoX.addEventListener('click', () => {
  NavTelefono.classList.remove('activo');
});
