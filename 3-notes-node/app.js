
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
        console.log('Added Note')
        notes.logNote(note)
    }

} else if (command === 'list') {
    var allNotes = notes.getAll()
    console.log(`Printing ${allNotes.length} note(s)`)
    allNotes.forEach((note) => notes.logNote(note))

} else if (command === 'read') {
    var note = notes.getNote(argv.title)
    if (note) {
        console.log('Note Found')
        notes.logNote(note);
    } else {
        console.log('Note not found')
    }
} else if (command === 'remove') {
    if (notes.removeNote(argv.title)) {
        console.log('Note removed');
    } else {
        console.log(`Note "${argv.title}" not found`)
    }
} else {
    console.log('bad command')
}
