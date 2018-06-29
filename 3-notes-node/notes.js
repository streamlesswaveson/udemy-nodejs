console.log('starting notes.js');

const fs = require('fs');
const FILE_NAME = 'notes-data.json';

var fetchNotes = () => {
    try {
        var notesStr = fs.readFileSync(FILE_NAME)
        return JSON.parse(notesStr);
    } catch (e) {
        return [];
    }

};

var saveNotes = (notes) => {
    fs.writeFileSync(FILE_NAME, JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };


    var dupNotes = notes.filter((note) => note.title === title);
    if (dupNotes.length > 0) {
        return null;
    }

    notes.push(note);

    saveNotes(notes);

    return note;

}

var getAll = () => {
    console.log('getting all notes')
}

var getNote = (title) => {
    console.log('getting ', title);
    return title;
}

var removeNote = (title) => {
    var notes = fetchNotes();

    var filtered = notes.filter((note) => note.title !== title);
    saveNotes(filtered);
    return notes.length !== filtered.length
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
