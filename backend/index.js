const express = require('express')
const app = express()
const port = 4000

const knex = require('knex')
const config = require('./knexfile')['development']
const database = knex(config)

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());

app.get('/journal', (request, response) => {
    database('journalArticles')
        .then(articles => response.json(articles))
})

app.get('/journal/:slug', (request, response) => {
    database('journalArticles')
        .where({slug: request.params.slug})
        .then(articles => response.json(articles[0]))
})

app.post('/journal', (request, response) => {
    database('journalArticles')
        .insert({
            title: request.body.title,
            date: request.body.date,
            body: request.body.body,
            slug: request.body.slug,
            image_1_url: request.body.image_1_url,
            image_2_url: request.body.image_2_url,
            image_3_url: request.body.image_3_url,
            image_4_url: request.body.image_4_url,
            image_5_url: request.body.image_5_url,
            image_6_url: request.body.image_6_url,
            image_7_url: request.body.image_7_url,
            image_8_url: request.body.image_8_url,
            image_9_url: request.body.image_9_url,
            image_10_url: request.body.image_10_url,
            image_11_url: request.body.image_11_url,
            image_12_url: request.body.image_12_url,
            image_13_url: request.body.image_13_url,
            image_14_url: request.body.image_14_url,
            image_15_url: request.body.image_15_url,
            image_16_url: request.body.image_16_url,
            image_17_url: request.body.image_17_url,
            image_18_url: request.body.image_18_url,
            image_19_url: request.body.image_19_url,
            image_20_url: request.body.image_20_url,
        })
        .returning('*')
        .then(articles => response.json(articles[0]))
})

app.patch('/journal/:slug', (request, response) => {
    const info = request.body
    database('journalArticles')
        .where({slug: request.params.slug})
        .update(info)
        .returning('*')
        .then(articles => response.json(articles[0]))
})

app.delete('/journal/:slug', (request, response) => {
    database('journalArticles')
        .where({slug: request.params.slug})
        .delete()
        .then(() => response.status(204))
})


app.listen(port, () => console.log(`listening on port ${port}`))