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

    // deleteMany
    // db.collection('Todo').deleteMany({'text':'fold the laundry'}).then((result)=> {
    //     console.log(result);
    // })

    // deleteOne
    // db.collection('Todo').deleteOne({'text':'fold the laundry'}).then((result) => {
    //     console.log(result);
    // })

    // findOneAndDelete (returns the deleted object)
    db.collection('Todo').findOneAndDelete({'text':'fold the laundry'}).then((result)=>{
        console.log(result);
    })

    // client.close();
});