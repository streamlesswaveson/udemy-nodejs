//https://github.com/visionmedia/supertest
const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/404', (req, res) => {
    res
        .status(404)
        .send({
            error:'page not found'
        });
});

app.get('/custom', (req, res) => {
    res
        .send({
            name:'foo bar'
        });
});

app.get('/users', (req, res)=>{
    var users = [
        {name:'Jorge', age:84},
        {name:'Janet', age:-1},
        {name:'Streamless', age:42}
    ]
    res.status(200).send(users);
})

app.listen(3000);

// exposes the application to test
module.exports.app = app;