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
    return fetchNotes();
}

var getNote = (title) => {
    var notes = fetchNotes();
    return notes.find(n => n.title === title);
}

var removeNote = (title) => {
    var notes = fetchNotes();

    var filtered = notes.filter((note) => note.title !== title);
    saveNotes(filtered);
    return notes.length !== filtered.length
}

var logNote = (note) => {
    debugger
    console.log('----');
    console.log(`Title: ${note.title}`)
    console.log(`Body: ${note.body}`)
}

module.exports = {
    logNote,
    addNote,
    getAll,
    getNote,
    removeNote
};
