const hamburger = document.querySelector('#hamburger')
const mobileMenu = document.querySelector('#mobile-menu')
const closeMobileMenu = document.querySelector('#close-mobile-menu')

hamburger.addEventListener('click', showMenu)
closeMobileMenu.addEventListener('click', closeMenu)

function showMenu() {
    mobileMenu.style.display = 'flex'
    mobileMenu.style.top = '0'
}

function closeMenu() {
    mobileMenu.style.display = 'none'
    mobileMenu.style.top = '-100%'
}

