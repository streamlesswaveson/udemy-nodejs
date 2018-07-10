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
    //
    // db.collection('Todo').findOneAndUpdate({
    //     _id: ObjectID('5b4492f715ccf140ba4174ee')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })


    db.collection('User').findOneAndUpdate({
        _id: ObjectID('5b43563d7df1deda89ccdd5d')
    }, {
        $set: {
            name: 'Jorge'
        },
        $inc: {
            age: 10
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    // client.close();
});