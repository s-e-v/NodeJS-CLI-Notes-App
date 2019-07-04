const fs = require('fs');

const getNotes = () => {
    return 'Something'
}

const addNote = (title, body) => {
    const notes = notesLoader();
    const duplicateNotes = notes.filter((note) => { return note.title === title });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('New note saved.')
    } else { 
        console.log('Note title already existing!');
    };
}

const removeNote = (title) => {
    const notes = notesLoader();
    const notesKeeper = notes.filter((note) => note.title !== title);
    saveNotes(notesKeeper);
    if (notes.length !== notesKeeper.length) {
        console.log('Note removed!')
    } else {
        console.log('No note was removed..')
    };
}

const notesLoader = () => {
    try {
        const buffer = fs.readFileSync('notes.json');
        return JSON.parse(buffer.toString());
    } catch (e) {
        return [];
    }
}

const saveNotes = (newNotes) => {
    const dataJSON = JSON.stringify(newNotes);
    fs.writeFileSync('notes.json', dataJSON);
}

module.exports = { 
    getNotes, 
    addNote,
    removeNote
};