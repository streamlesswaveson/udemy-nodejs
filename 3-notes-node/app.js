console.log('starting app...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

// var user = os.userInfo()
// console.log(user);
//
// fs.appendFile('foo.txt', `hello ${user.username} you are ${notes.age}\n`, function (err) {
//     console.log('any error? ', err);
// })

var res = notes.add(5, -23)
console.log(res)

console.log(_.isString(true));
console.log(_.isString('Footcake'))

var filtered = _.uniq([1,2,3,4,1,2,3,4, 'Done'])
console.log(filtered)
