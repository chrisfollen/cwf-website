const hamburger = document.querySelector('#hamburger')
const mobileMenu = document.querySelector('#mobile-menu')
const closeMobileMenu = document.querySelector('#close-mobile-menu')
const bannerImage = document.querySelector('#dev-banner-image')
const bannerText = document.querySelector('#dev-banner-text')

hamburger.addEventListener('click', showMenu)
closeMobileMenu.addEventListener('click', closeMenu)

function showMenu() {
    mobileMenu.style.display = 'flex'
    bannerImage.style.display = 'none'
    bannerText.style.display = 'none'
    mobileMenu.style.top = '0'
}

function closeMenu() {
    mobileMenu.style.display = 'none'
    bannerImage.style.display = 'block'
    bannerText.style.display = 'block'
    mobileMenu.style.top = '-100%'
}