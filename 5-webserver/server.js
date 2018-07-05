const express = require('express')
const hbs = require('hbs')

var app = express()

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('welcome.hbs', {
        pageTitle: 'Welcome',
        currentYear: new Date().getFullYear(),
        welcomeMessage: 'Hello message'
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    })
})

app.get('/bad', (req, res) => {
    res.status(400).send({
        status: 400,
        message: 'bad request'
    })
})

app.listen(3000)