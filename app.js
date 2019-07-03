const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'Adding a new note',
    handler: () => {
        console.log('Adding a new note!')
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

console.log(yargs.argv);
