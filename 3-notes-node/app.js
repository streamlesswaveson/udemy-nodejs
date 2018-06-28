console.log('starting app...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// var user = os.userInfo()
// console.log(user);
//
// fs.appendFile('foo.txt', `hello ${user.username} you are ${notes.age}\n`, function (err) {
//     console.log('any error? ', err);
// })

var res = notes.add(5, -23)
console.log(res)
