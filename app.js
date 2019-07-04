const yargs = require('yargs');
const notesHelper = require('./notesHelper');

yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notesHelper.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notesHelper.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler: (argv) => {
        console.log('Listing notes!')
    }
});

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: (argv) => {
        console.log('Reading a note!')
    }
});

yargs.parse();
