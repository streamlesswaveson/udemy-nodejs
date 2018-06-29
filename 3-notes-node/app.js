console.log('starting app...');

const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs')

var argv = yargs.argv;
var command = argv._[0];
// console.log(argv)

if (command=== 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (!note) {
        console.log('Unable to add note. Probably duplicate')
    } else {
        console.log("Added title=", argv.title, " and body=", argv.body);
    }

} else if (command === 'list') {
    notes.getAll()

} else if (command === 'read') {
    notes.getNote(argv.title)
} else if (command === 'remove') {
    notes.removeNote(argv.title)
} else {
    console.log('bad command')
}
