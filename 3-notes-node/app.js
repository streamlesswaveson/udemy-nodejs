console.log('starting app...');

const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs')

var argv = yargs.argv;
var command = argv._[0];
console.log(argv)

if (command=== 'add') {
    console.log('adding note');
    notes.addNote(argv.title, argv.body);

} else if (command === 'list') {
    notes.getAll()

} else if (command === 'read') {
    notes.getNote(argv.title)
} else if (command === 'remove') {
    notes.removeNote(argv.title)
} else {
    console.log('bad command')
}
