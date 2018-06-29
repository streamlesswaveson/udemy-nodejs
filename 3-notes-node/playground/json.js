var obj = {
    'name': 'Andrew'
};

var stringObj = JSON.stringify(obj);
console.log(stringObj);

var personStr = '{"name":"Greg", "age":40}'

var person = JSON.parse(personStr);
console.log(typeof person)
console.log(person)


const fs = require('fs')
var originalNote = {
    title: 'some title',
    body: 'some body'
}

var originalNoteStr = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteStr);

var noteStr = fs.readFileSync('notes.json')

var note = JSON.parse(noteStr);
console.log(note);
