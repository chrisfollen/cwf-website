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


const container = document.querySelector('#admin-main')
const baseURL = 'http://localhost:4000/journal/'

const newPostButton = document.createElement('button')
newPostButton.type = 'button'
newPostButton.textContent = 'Add New Post'
newPostButton.className = 'new-post-button'
newPostButton.addEventListener('click', putAddPostForm)
container.append(newPostButton)

const modalContainer = document.querySelector('#modal-container')




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

    articles.forEach(article => {
        const card = document.createElement('div')
        card.className = 'admin-card'
        card.dataset.articleSlug = article.slug
        const title = document.createElement('h2')
        title.className = 'admin-title'
        const date = document.createElement('h4')
        date.className = 'admin-date'
        const image1 = document.createElement('img')
        image1.className = 'admin-image'
        const editPostButton = document.createElement('button')
        editPostButton.type = 'button'
        editPostButton.textContent = 'Edit Dis Post'
        editPostButton.className = 'edit-button'
        const deletePostButton = document.createElement('button')
        deletePostButton.type = 'button'
        deletePostButton.textContent = 'Delete Post'
        deletePostButton.className = 'delete-button'

        deletePostButton.addEventListener('click', deletePost)



        const dateArray = article.date.split('-')

        title.textContent = article.title 
        date.textContent = `${dateArray[1]}/${dateArray[2]}/${dateArray[0]}`
        image1.src = article.image_1_url

        card.replaceChildren(image1, title, date, editPostButton, deletePostButton)

        container.append(card)
    })
}

function deletePost(event) {
    const card = event.target.closest('.admin-card')
    const confirmDelete = confirm('Delete this article?')
    const slug = card.dataset.articleSlug

    if (confirmDelete) {
        const options = {
            method: 'DELETE'
        }
        fetch((baseURL + slug), options)
            .then(parseJSON)
            .then(card.remove())
    }


}

const postFormModal = document.createElement('div')
postFormModal.className = 'post-form-modal'


function putAddPostForm() {

    const closeModalDiv = document.createElement('div')
    closeModalDiv.className = 'close-modal-div'

    const closeButton = document.querySelector('#close-modal')
    closeModalDiv.append(closeButton)
    closeButton.addEventListener('click', closeAddPostForm)

    const postForm = document.createElement('form')
    postForm.addEventListener('submit', addPost)
    postForm.className = 'post-form'
    
    const postTitle = document.createElement('input')
    postTitle.setAttribute('type', 'text')
    postTitle.setAttribute('id', 'post-title')
    postTitle.setAttribute('name', 'title')
    postTitle.setAttribute('autocomplete', 'off')
    postTitle.setAttribute('placeholder', 'Post Title Is...')
    postTitle.className = 'post-form-input'
    const postTitleLabel = document.createElement('label')
    postTitleLabel.setAttribute('for', 'post-title')
    postTitleLabel.className = 'post-form-label'
    postTitleLabel.textContent = 'Post Title'

    const postDate = document.createElement('input')
    postDate.setAttribute('type', 'text')
    postDate.setAttribute('id', 'post-date')
    postDate.setAttribute('name', 'date')
    postDate.setAttribute('autocomplete', 'off')
    postDate.setAttribute('placeholder', 'YYYY-MM-DD')
    postDate.className = 'post-form-input'
    const postDateLabel = document.createElement('label')
    postDateLabel.setAttribute('for', 'post-date')
    postDateLabel.className = 'post-form-label'
    postDateLabel.textContent = 'Date'

    const postSlug = document.createElement('input')
    postSlug.setAttribute('type', 'text')
    postSlug.setAttribute('id', 'post-slug')
    postSlug.setAttribute('name', 'slug')
    postSlug.setAttribute('autocomplete', 'off')
    postSlug.setAttribute('placeholder', 'slug-name-here')
    postSlug.className = 'post-form-input'
    const postSlugLabel = document.createElement('label')
    postSlugLabel.setAttribute('for', 'post-slug')
    postSlugLabel.className = 'post-form-label'
    postSlugLabel.textContent = 'Slug'

    const postBody = document.createElement('textarea')
    postBody.setAttribute('type', 'text')
    postBody.setAttribute('id', 'post-body')
    postBody.setAttribute('name', 'body')
    postBody.setAttribute('autocomplete', 'off')
    postBody.setAttribute('placeholder', 'Whatchu thinkin? Write some stuff here...')
    postBody.classList.add('post-form-body-input', 'post-form-input')
    const postBodyLabel = document.createElement('label')
    postBodyLabel.setAttribute('for', 'post-body')
    postBodyLabel.className = 'post-form-label'
    postBodyLabel.textContent = 'Body'

    const postImage1URL = document.createElement('input')
    postImage1URL.setAttribute('type', 'text')
    postImage1URL.setAttribute('id', 'post-image-1-url')
    postImage1URL.setAttribute('name', 'image_1_url')
    postImage1URL.setAttribute('autocomplete', 'off')
    postImage1URL.setAttribute('placeholder', 'http://whatever')
    postImage1URL.className = 'post-form-input'
    const postImage1URLLabel = document.createElement('label')
    postImage1URLLabel.setAttribute('for', 'post-image-1-url')
    postImage1URLLabel.className = 'post-form-label'
    postImage1URLLabel.textContent = 'Image 1 URL'

    const postImage2URL = document.createElement('input')
    postImage2URL.setAttribute('type', 'text')
    postImage2URL.setAttribute('id', 'post-image-2-url')
    postImage2URL.setAttribute('name', 'image_2_url')
    postImage2URL.setAttribute('autocomplete', 'off')
    postImage2URL.className = 'post-form-input'
    const postImage2URLLabel = document.createElement('label')
    postImage2URLLabel.setAttribute('for', 'post-image-2-url')
    postImage2URLLabel.className = 'post-form-label'
    postImage2URLLabel.textContent = 'Image 2 URL'

    const postImage3URL = document.createElement('input')
    postImage3URL.setAttribute('type', 'text')
    postImage3URL.setAttribute('id', 'post-image-3-url')
    postImage3URL.setAttribute('name', 'image_3_url')
    postImage3URL.setAttribute('autocomplete', 'off')
    postImage3URL.className = 'post-form-input'
    const postImage3URLLabel = document.createElement('label')
    postImage3URLLabel.setAttribute('for', 'post-image-3-url')
    postImage3URLLabel.className = 'post-form-label'
    postImage3URLLabel.textContent = 'Image 3 URL'

    const postImage4URL = document.createElement('input')
    postImage4URL.setAttribute('type', 'text')
    postImage4URL.setAttribute('id', 'post-image-4-url')
    postImage4URL.setAttribute('name', 'image_4_url')
    postImage4URL.setAttribute('autocomplete', 'off')
    postImage4URL.className = 'post-form-input'
    const postImage4URLLabel = document.createElement('label')
    postImage4URLLabel.setAttribute('for', 'post-image-4-url')
    postImage4URLLabel.className = 'post-form-label'
    postImage4URLLabel.textContent = 'Image 4 URL'

    const postImage5URL = document.createElement('input')
    postImage5URL.setAttribute('type', 'text')
    postImage5URL.setAttribute('id', 'post-image-5-url')
    postImage5URL.setAttribute('name', 'image_5_url')
    postImage5URL.setAttribute('autocomplete', 'off')
    postImage5URL.className = 'post-form-input'
    const postImage5URLLabel = document.createElement('label')
    postImage5URLLabel.setAttribute('for', 'post-image-5-url')
    postImage5URLLabel.className = 'post-form-label'
    postImage5URLLabel.textContent = 'Image 5 URL'

    const postImage6URL = document.createElement('input')
    postImage6URL.setAttribute('type', 'text')
    postImage6URL.setAttribute('id', 'post-image-6-url')
    postImage6URL.setAttribute('name', 'image_6_url')
    postImage6URL.setAttribute('autocomplete', 'off')
    postImage6URL.className = 'post-form-input'
    const postImage6URLLabel = document.createElement('label')
    postImage6URLLabel.setAttribute('for', 'post-image-6-url')
    postImage6URLLabel.className = 'post-form-label'
    postImage6URLLabel.textContent = 'Image 6 URL'

    const postImage7URL = document.createElement('input')
    postImage7URL.setAttribute('type', 'text')
    postImage7URL.setAttribute('id', 'post-image-7-url')
    postImage7URL.setAttribute('name', 'image_7_url')
    postImage7URL.setAttribute('autocomplete', 'off')
    postImage7URL.className = 'post-form-input'
    const postImage7URLLabel = document.createElement('label')
    postImage7URLLabel.setAttribute('for', 'post-image-7-url')
    postImage7URLLabel.className = 'post-form-label'
    postImage7URLLabel.textContent = 'Image 7 URL'

    const postImage8URL = document.createElement('input')
    postImage8URL.setAttribute('type', 'text')
    postImage8URL.setAttribute('id', 'post-image-8-url')
    postImage8URL.setAttribute('name', 'image_8_url')
    postImage8URL.setAttribute('autocomplete', 'off')
    postImage8URL.className = 'post-form-input'
    const postImage8URLLabel = document.createElement('label')
    postImage8URLLabel.setAttribute('for', 'post-image-8-url')
    postImage8URLLabel.className = 'post-form-label'
    postImage8URLLabel.textContent = 'Image 8 URL'

    const postImage9URL = document.createElement('input')
    postImage9URL.setAttribute('type', 'text')
    postImage9URL.setAttribute('id', 'post-image-9-url')
    postImage9URL.setAttribute('name', 'image_9_url')
    postImage9URL.setAttribute('autocomplete', 'off')
    postImage9URL.className = 'post-form-input'
    const postImage9URLLabel = document.createElement('label')
    postImage9URLLabel.setAttribute('for', 'post-image-9-url')
    postImage9URLLabel.className = 'post-form-label'
    postImage9URLLabel.textContent = 'Image 9 URL'

    const postImage10URL = document.createElement('input')
    postImage10URL.setAttribute('type', 'text')
    postImage10URL.setAttribute('id', 'post-image-10-url')
    postImage10URL.setAttribute('name', 'image_10_url')
    postImage10URL.setAttribute('autocomplete', 'off')
    postImage10URL.className = 'post-form-input'
    const postImage10URLLabel = document.createElement('label')
    postImage10URLLabel.setAttribute('for', 'post-image-10-url')
    postImage10URLLabel.className = 'post-form-label'
    postImage10URLLabel.textContent = 'Image 10 URL'

    const postImage11URL = document.createElement('input')
    postImage11URL.setAttribute('type', 'text')
    postImage11URL.setAttribute('id', 'post-image-11-url')
    postImage11URL.setAttribute('name', 'image_11_url')
    postImage11URL.setAttribute('autocomplete', 'off')
    postImage11URL.className = 'post-form-input'
    const postImage11URLLabel = document.createElement('label')
    postImage11URLLabel.setAttribute('for', 'post-image-11-url')
    postImage11URLLabel.className = 'post-form-label'
    postImage11URLLabel.textContent = 'Image 11 URL'

    const postImage12URL = document.createElement('input')
    postImage12URL.setAttribute('type', 'text')
    postImage12URL.setAttribute('id', 'post-image-12-url')
    postImage12URL.setAttribute('name', 'image_12_url')
    postImage12URL.setAttribute('autocomplete', 'off')
    postImage12URL.className = 'post-form-input'
    const postImage12URLLabel = document.createElement('label')
    postImage12URLLabel.setAttribute('for', 'post-image-12-url')
    postImage12URLLabel.className = 'post-form-label'
    postImage12URLLabel.textContent = 'Image 12 URL'

    const postImage13URL = document.createElement('input')
    postImage13URL.setAttribute('type', 'text')
    postImage13URL.setAttribute('id', 'post-image-13-url')
    postImage13URL.setAttribute('name', 'image_13_url')
    postImage13URL.setAttribute('autocomplete', 'off')
    postImage13URL.className = 'post-form-input'
    const postImage13URLLabel = document.createElement('label')
    postImage13URLLabel.setAttribute('for', 'post-image-13-url')
    postImage13URLLabel.className = 'post-form-label'
    postImage13URLLabel.textContent = 'Image 13 URL'

    const postImage14URL = document.createElement('input')
    postImage14URL.setAttribute('type', 'text')
    postImage14URL.setAttribute('id', 'post-image-14-url')
    postImage14URL.setAttribute('name', 'image_14_url')
    postImage14URL.setAttribute('autocomplete', 'off')
    postImage14URL.className = 'post-form-input'
    const postImage14URLLabel = document.createElement('label')
    postImage14URLLabel.setAttribute('for', 'post-image-14-url')
    postImage14URLLabel.className = 'post-form-label'
    postImage14URLLabel.textContent = 'Image 14 URL'

    const postImage15URL = document.createElement('input')
    postImage15URL.setAttribute('type', 'text')
    postImage15URL.setAttribute('id', 'post-image-15-url')
    postImage15URL.setAttribute('name', 'image_15_url')
    postImage15URL.setAttribute('autocomplete', 'off')
    postImage15URL.className = 'post-form-input'
    const postImage15URLLabel = document.createElement('label')
    postImage15URLLabel.setAttribute('for', 'post-image-15-url')
    postImage15URLLabel.className = 'post-form-label'
    postImage15URLLabel.textContent = 'Image 15 URL'

    const postImage16URL = document.createElement('input')
    postImage16URL.setAttribute('type', 'text')
    postImage16URL.setAttribute('id', 'post-image-16-url')
    postImage16URL.setAttribute('name', 'image_16_url')
    postImage16URL.setAttribute('autocomplete', 'off')
    postImage16URL.className = 'post-form-input'
    const postImage16URLLabel = document.createElement('label')
    postImage16URLLabel.setAttribute('for', 'post-image-16-url')
    postImage16URLLabel.className = 'post-form-label'
    postImage16URLLabel.textContent = 'Image 16 URL'

    const postImage17URL = document.createElement('input')
    postImage17URL.setAttribute('type', 'text')
    postImage17URL.setAttribute('id', 'post-image-17-url')
    postImage17URL.setAttribute('name', 'image_17_url')
    postImage17URL.setAttribute('autocomplete', 'off')
    postImage17URL.className = 'post-form-input'
    const postImage17URLLabel = document.createElement('label')
    postImage17URLLabel.setAttribute('for', 'post-image-17-url')
    postImage17URLLabel.className = 'post-form-label'
    postImage17URLLabel.textContent = 'Image 17 URL'

    const postImage18URL = document.createElement('input')
    postImage18URL.setAttribute('type', 'text')
    postImage18URL.setAttribute('id', 'post-image-18-url')
    postImage18URL.setAttribute('name', 'image_18_url')
    postImage18URL.setAttribute('autocomplete', 'off')
    postImage18URL.className = 'post-form-input'
    const postImage18URLLabel = document.createElement('label')
    postImage18URLLabel.setAttribute('for', 'post-image-18-url')
    postImage18URLLabel.className = 'post-form-label'
    postImage18URLLabel.textContent = 'Image 18 URL'

    const postImage19URL = document.createElement('input')
    postImage19URL.setAttribute('type', 'text')
    postImage19URL.setAttribute('id', 'post-image-19-url')
    postImage19URL.setAttribute('name', 'image_19_url')
    postImage19URL.setAttribute('autocomplete', 'off')
    postImage19URL.className = 'post-form-input'
    const postImage19URLLabel = document.createElement('label')
    postImage19URLLabel.setAttribute('for', 'post-image-19-url')
    postImage19URLLabel.className = 'post-form-label'
    postImage19URLLabel.textContent = 'Image 19 URL'

    const postImage20URL = document.createElement('input')
    postImage20URL.setAttribute('type', 'text')
    postImage20URL.setAttribute('id', 'post-image-20-url')
    postImage20URL.setAttribute('name', 'image_20_url')
    postImage20URL.setAttribute('autocomplete', 'off')
    postImage20URL.className = 'post-form-input'
    const postImage20URLLabel = document.createElement('label')
    postImage20URLLabel.setAttribute('for', 'post-image-20-url')
    postImage20URLLabel.className = 'post-form-label'
    postImage20URLLabel.textContent = 'Image 20 URL'

    postForm.replaceChildren(postTitleLabel, postTitle, postDateLabel, postDate, postSlugLabel, postSlug, 
        postBodyLabel, postBody, postImage1URLLabel, postImage1URL, postImage2URLLabel, postImage2URL,
        postImage3URLLabel, postImage3URL,postImage4URLLabel, postImage4URL, postImage5URLLabel, postImage5URL,
        postImage6URLLabel, postImage6URL, postImage7URLLabel, postImage7URL, postImage8URLLabel, postImage8URL,
        postImage9URLLabel, postImage9URL, postImage10URLLabel, postImage10URL, postImage11URLLabel, postImage11URL,
        postImage12URLLabel, postImage12URL, postImage13URLLabel, postImage13URL, postImage14URLLabel, postImage14URL,
        postImage15URLLabel, postImage15URL, postImage16URLLabel, postImage16URL, postImage17URLLabel, postImage17URL,
        postImage18URLLabel, postImage18URL, postImage19URLLabel, postImage19URL, postImage20URLLabel, postImage20URL)

    const submitNewPostButton = document.createElement('input')
    submitNewPostButton.setAttribute('type', 'submit')
    submitNewPostButton.setAttribute('value', 'Add Post')
    submitNewPostButton.className = 'submit-new-post-button'
    

    postForm.append(submitNewPostButton)
    postForm.addEventListener('submit', addPost)
    
    postFormModal.replaceChildren(closeModalDiv, postForm)


    modalContainer.append(postFormModal)

    postFormModal.style.display = 'flex'
    closeButton.style.display = 'block'

}


function closeAddPostForm() {
    postFormModal.style.display = 'none'
}

function addPost(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const title = formData.get('title')
    const date = formData.get('date')
    const slug = formData.get('slug')
    const body = formData.get('body')
    const image_1_url = formData.get('image_1_url')
    const image_2_url = formData.get('image_2_url')
    const image_3_url = formData.get('image_3_url')
    const image_4_url = formData.get('image_4_url')
    const image_5_url = formData.get('image_5_url')
    const image_6_url = formData.get('image_6_url')
    const image_7_url = formData.get('image_7_url')
    const image_8_url = formData.get('image_8_url')
    const image_9_url = formData.get('image_9_url')
    const image_10_url = formData.get('image_10_url')
    const image_11_url = formData.get('image_11_url')
    const image_12_url = formData.get('image_12_url')
    const image_13_url = formData.get('image_13_url')
    const image_14_url = formData.get('image_14_url')
    const image_15_url = formData.get('image_15_url')
    const image_16_url = formData.get('image_16_url')
    const image_17_url = formData.get('image_17_url')
    const image_18_url = formData.get('image_18_url')
    const image_19_url = formData.get('image_19_url')
    const image_20_url = formData.get('image_20_url')

    const newPost = {
        "title": title, 
        "date": date,
        "slug": slug,
        "body": body,
        "image_1_url": image_1_url,
        "image_2_url": image_2_url,
        "image_3_url": image_3_url,
        "image_4_url": image_4_url,
        "image_5_url": image_5_url,
        "image_6_url": image_6_url,
        "image_7_url": image_7_url,
        "image_8_url": image_8_url,
        "image_9_url": image_9_url,
        "image_10_url": image_10_url,
        "image_11_url": image_11_url,
        "image_12_url": image_12_url,
        "image_13_url": image_13_url,
        "image_14_url": image_14_url,
        "image_15_url": image_15_url,
        "image_16_url": image_16_url,
        "image_17_url": image_17_url,
        "image_18_url": image_18_url,
        "image_19_url": image_19_url,
        "image_20_url": image_20_url
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newPost)
    }

    fetch(baseURL, options)
        .then(closeAddPostForm())
        .then(location.reload())

    closeAddPostForm()
    location.reload()


}