console.log('starting notes.js');

var addNote = (body, title) => {
    console.log('Adding note...', body, title);
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
