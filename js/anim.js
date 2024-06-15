const sidenav = document.querySelector('.side-nav')
const menu = document.querySelector('.menu')
const menuline = menu.nextElementSibling.firstElementChild;

let open = false;
menu.addEventListener('click', () => {
    if(!open) {
        menu.setAttribute('src','./src/icon/cross.svg')
        menu.style.transform = 'rotateZ(180deg)'
        menuline.style.transform = 'translateX(-100%)'
        sidenav.style.transform = 'translateX(0)'
        open = !open;
    } else {
        menu.setAttribute('src','./src/icon/menu.svg')
        sidenav.style.transform = 'translateX(150%)'
        menuline.style.transform = 'translateX(100%)'
        menu.style.transform = 'rotateZ(0deg)'
        open = !open;
    }
})