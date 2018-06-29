console.log('starting notes.js');

const fs = require('fs');
const FILE_NAME = 'notes-data.json';

var addNote = (body, title) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesStr = fs.readFileSync(FILE_NAME)
        notes = JSON.parse(notesStr);
    } catch (e) {
        //ignore
    }

    var dupNotes = notes.filter((note) => note.title === title);
    if (dupNotes.length > 0) {
        return;
    }

    notes.push(note);
    fs.writeFileSync(FILE_NAME, JSON.stringify(notes));
}

var getAll = () => {
    console.log('getting all notes')
}

var getNote = (title) => {
    console.log('getting ', title);
    return title;
}

var removeNote = (title) => {
    console.log('deleting ', title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
