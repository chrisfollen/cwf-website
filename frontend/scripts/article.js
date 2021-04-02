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


const container = document.querySelector('#article-main')
const baseURL = 'http://localhost:4000/journal/'

const slug = new URLSearchParams(window.location.search).get('a')

fetch(baseURL+slug)
    .then(parseJSON)
    .then(putArticle)


function parseJSON(data) {
    return data.json()
}

function putArticle(article) {

    const title = document.createElement('h2')
    title.className = 'article-title'
    const date = document.createElement('h4')
    date.className = 'article-date'
    const image1 = document.createElement('img')
    image1.className = 'article-image'
    const body = document.createElement('p')
    body.className = 'article-body'
    const bodyCard = document.createElement('div')
    bodyCard.className = 'article-body-card'
    const link = document.createElement('a')
    link.className = 'article-link'
    link.textContent = 'Back to Journal'
    link.href = '/journal.html'

    const dateArray = article.date.split('-')

    title.textContent = article.title 
    date.textContent = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
    image1.src = article.image_1_url
    body.textContent = article.body

    const pageTitle = document.querySelector('#page-title')
    pageTitle.textContent =`${title.textContent} - CHRIS FOLLEN`

    bodyCard.replaceChildren(body)

    container.replaceChildren(date, title, image1, bodyCard)

    for(let i = 2; i<20; i++){
        if(article[`image_${i}_url`]){
            let thisImage = document.createElement('img')
            thisImage.className = 'article-image'
            thisImage.src = article[`image_${i}_url`]
            container.append(thisImage)

        }
        
    }

    container.append(link)
}
