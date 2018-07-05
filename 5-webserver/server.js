const express = require('express')

var app = express()

app.get('/', (req, res) => {
    // res.send('<h1>hello express</h1>')

    res.send({
        hello:'world',
        things: ['this', 'that']

    })
});

app.get('/about', (req, res) => {
    res.send('<h1>about page</h1>')
})

app.get('/bad', (req, res) => {
    res.send({
        status: 400,
        message: 'bad request'
    }, 400)
})

app.listen(3000)