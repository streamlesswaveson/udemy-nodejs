const express = require('express')
const hbs = require('hbs')
const fs = require('fs');

const app = express()

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')


app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server log', err);
        }
    });
    next();
});

// the relative placement of this is important - they are fired in the order used here.
// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
   return text.toUpperCase()
});

app.get('/', (req, res) => {
    res.render('welcome.hbs', {
        pageTitle: 'Welcome',
        welcomeMessage: 'Hello message'
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        pageTitle: 'About Page'
    })
})

app.get('/bad', (req, res) => {
    res.status(400).send({
        status: 400,
        message: 'bad request'
    })
})

app.listen(3000)