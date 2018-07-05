const express = require('express')

var app = express()

app.use(express.static(__dirname + '/public'))

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
    res.status(400).send({
        status: 400,
        message: 'bad request'
    })
})

app.listen(3000)