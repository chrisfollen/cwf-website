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

const container = document.querySelector('#journal-main')
const baseURL = 'http://localhost:4000/journal'

fetch(baseURL)
    .then(parseJSON)
    .then(putArticles)

function parseJSON(data) {
    return data.json()
}

function putArticles(articles) {

    const sortedArticles = articles.sort((a, b) => {
        if(a.date < b.date) { return 1; }
        if(a.date > b.date) { return -1; }
        return 0;
    })

    sortedArticles.forEach(article => {
        const card = document.createElement('div')
        card.className = 'journal-card'
        const title = document.createElement('h2')
        title.className = 'journal-title'
        const date = document.createElement('h4')
        date.className = 'journal-date'
        const image1 = document.createElement('img')
        image1.className = 'journal-image'
        const slug = article.slug
        const link = document.createElement('a')
        link.className = 'journal-link'
        link.textContent = 'Read More'
        link.href = `/article.html?a=${slug}`

        const dateArray = article.date.split('-')

        title.textContent = article.title 
        date.textContent = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
        image1.src = article.image_1_url

        card.replaceChildren(image1, title, date, link)

        container.append(card)
    })
}

