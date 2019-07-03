const yargs = require('yargs');

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
        console.log('Title: ' + argv.title + '\n' + 'Body: ' + argv.body)
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: () => {
        console.log('Removing a note!')
    }
});

yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler: () => {
        console.log('Listing notes!')
    }
});

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: () => {
        console.log('Reading a note!')
    }
});

yargs.parse();
