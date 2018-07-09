// const mongoclient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to mongodb server', err);
    }
    console.log('Connected')
    //
    // const db = client.db('TodoApp');
    //
    // db.collection('Todo').insertOne({
    //     text:'something to do',
    //     completed:false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    const db = client.db('TodoApp');

    // db.collection('User').insertOne({
    //     name:'Jack',
    //     age: 25,
    //     location: 'Santa Maria'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert user', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id);
    //
    //     // the generated id contains a timestamp
    //     console.log(result.ops[0]._id.getTimestamp())
    // });

    client.close();
});