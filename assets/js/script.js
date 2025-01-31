const burger__menu = document.querySelector('.burger__menu')
const burger__menuBar = document.getElementsByClassName('burger__menu-bar')
let toggleBurger__menu = false
const navBarMobileLink = document.querySelectorAll('.navbar__link-mobile');
const navBarMobileList = document.querySelector('.navbar__list-mobile');
const navBarMobile = document.querySelector('.navbar__mobile');

burger__menu.addEventListener('click', () =>{
    if(toggleBurger__menu == false){
        burger__menuBar[1].classList.add('hide');
        burger__menuBar[0].classList.add('rotate__up');
        burger__menuBar[2].classList.add('rotate__down');
        navBarMobileList.classList.remove('liste__hide');
        navBarMobile.classList.remove('navbar__mobile-hide');
        navBarMobileLink.forEach((e) =>{
            e.classList.remove('link__hidden-mobile');
        })
        toggleBurger__menu = true
    }
    else{
        burger__menuBar[1].classList.remove('hide');
        burger__menuBar[0].classList.remove('rotate__up');
        burger__menuBar[2].classList.remove('rotate__down');
        navBarMobileList.classList.add('liste__hide')
        navBarMobile.classList.add('navbar__mobile-hide');
        navBarMobileLink.forEach((e) =>{
            e.classList.add('link__hidden-mobile');
        })
        toggleBurger__menu = false
    }
})

