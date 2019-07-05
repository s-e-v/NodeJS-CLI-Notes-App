const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Something'
}

const addNote = (title, body) => {
    const notes = notesLoader();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.bgBlue('New note saved.'));
    } else { 
        console.log(chalk.bgRed('Note title already existing!'));
    };
}

const listNotes = () => {
    const notes = notesLoader();
    console.log(chalk.bgBlue('My Notes'))
    notes.forEach((note) => {
        console.log(note.title);
    });
}

const removeNote = (title) => {
    const notes = notesLoader();
    const notesKeeper = notes.filter((note) => note.title !== title);
    saveNotes(notesKeeper);
    if (notes.length !== notesKeeper.length) {
        console.log(chalk.bgGreen('Note removed!'));
    } else {
        console.log(chalk.bgRed('No note was removed..'));
    };
}

const readNote = (title) => {
    const notes = notesLoader();
    const note = notes.find((note) => note.title === title);
    
    if (note) {
        console.log(chalk.bgGreen(note.title));
        console.log(note.body);
    } else {
        console.log('Note not found!');
    }
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
    removeNote,
    listNotes,
    readNote
};