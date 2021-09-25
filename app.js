const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// makes the mobile menu drop down and back up by toggling state
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})