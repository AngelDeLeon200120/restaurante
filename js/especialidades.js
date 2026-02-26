let especilidadesMenus= document.querySelectorAll('#especialidades-menus');
let especialidadesMenuMuestra =document.querySelectorAll('.especialidades-menu-muestra');

// especilidadesMenus[0].addEventListener('click',function () {
//     especialidadesMenuMuestra[0].classList.toggle('activeespecialidades')
// });

// especilidadesMenus[1].addEventListener('click',function () {
//     especialidadesMenuMuestra[1].classList.toggle('activeespecialidades')
// });

// especilidadesMenus[2].addEventListener('click',function () {
//     especialidadesMenuMuestra[2].classList.toggle('activeespecialidades');
// });
especilidadesMenus.forEach((items,index)=>{
    items.addEventListener('click',function () {
 const ItemActivado=especialidadesMenuMuestra[index].classList.contains('activeespecialidades');

especialidadesMenuMuestra.forEach((menu)=>{
    menu.classList.remove('activeespecialidades');
})
        if (!ItemActivado) {
            especialidadesMenuMuestra[index].classList.add('activeespecialidades');
        }
        
    })
})
console.log(especilidadesMenus);
console.log(especialidadesMenuMuestra);



