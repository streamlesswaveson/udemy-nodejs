console.log('starting app...');

const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');

var args = process.argv;

var command = args[2];

if (command=== 'add') {
    console.log('adding note');

} else if (command === 'list') {
    console.log('listing note')
} else if (command === 'read') {
    console.log('reading note')
} else if (command === 'delete') {
    console.log('deleting note')
} else {
    console.log('bad command')
}
