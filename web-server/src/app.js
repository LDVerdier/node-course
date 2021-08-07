const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars and Views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

//Routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Laurent',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About App',
        name: 'Laurent',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        name: 'Laurent',
        message: 'If you need help, please ask someone else!'
    })
})

app.get('/weather', (req, res) => {
    res.send({ location: 'Bordeaux', temperature: 25, humidity: '80%' })
})
app.get('/json', (req, res) => {
    res.json({ name: 'Laurent', age: 29 })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'help 404 page',
        errorMessage: 'help 404',
        name: 'Laurent',
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404 page',
        errorMessage: 'generic 404',
        name: 'Laurent',
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000!')
})