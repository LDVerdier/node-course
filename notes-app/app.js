// const validator = require('validator');

const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');
const { log } = console;

yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        },
    },
    handler({ title, body }) {
        notes.addNotes(title, body);
    },
});

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler({ title }) {
        notes.removeNote(title)
    }
});

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler() {
        notes.listNotes()
    }
});

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler({ title }) {
        notes.readNote(title)
    }
});


// log(process.argv);
yargs.parse();
// log(yargs.argv.title);