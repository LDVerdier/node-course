const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.yellow.bold('Your notes :'))
    notes.forEach((note) => {
        console.log(note.title)
    })
};

const addNotes = (title, body) => {
    const notes = loadNotes();
    console.log(notes);

    const duplicateNote = notes.find((note) => title === note.title)

    if (!duplicateNote) {
        notes.push({
            title,
            body,
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added!'))
    } else {
        console.log(chalk.red.inverse('This note already exists!'))
    }

};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesAfterRemoval = notes.filter((note) => note.title !== title)
    console.log(notesAfterRemoval)
    if (notesAfterRemoval.length < notes.length) {
        saveNotes(notesAfterRemoval)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const foundNote = notes.find((note) => title === note.title)
    debugger

    if (foundNote) {
        console.log(chalk.inverse.bold(foundNote.title))
        console.log(foundNote.body)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync('notes.json');
        const notesJSON = notesBuffer.toString();
        const notes = JSON.parse(notesJSON);

        return notes;
    } catch (error) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

module.exports = {
    listNotes,
    addNotes,
    removeNote,
    readNote,
};