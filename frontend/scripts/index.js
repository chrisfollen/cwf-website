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

const modal = document.querySelector('#image-modal')
const modalContent = document.querySelector('#modal-content')
const gallery = document.querySelector('#gallery')

gallery.addEventListener('click', displayImageModal)

function displayImageModal(event){

    if(event.target.classList.contains('gallery-photo')) {
        modal.style.display = 'block'
        modalContent.src = event.target.src    
    }

}

const close = document.getElementsByClassName("close")[0];

close.onclick = function() {
    modal.classList.add('animate__fadeOut')
    setTimeout(closeModal, 500)
}

function closeModal() {
    modal.style.display = "none";
    modal.classList.remove('animate__fadeOut')
}