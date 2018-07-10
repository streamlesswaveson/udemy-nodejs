// const mongoclient = require('mongodb').MongoClient;
const {MongoClient,ObjectID}= require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to mongodb server', err);
    }
    console.log('Connected')



    const db = client.db('TodoApp');

    db.collection('Todo').find({_id: ObjectID('5b4355415d119bda7e94e56d')}).toArray()
        .then((docs) => {
            console.log('fetched');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('failed to fetch', err);
        })

    // client.close();
});