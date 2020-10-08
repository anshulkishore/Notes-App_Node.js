const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const ctx = new chalk.Instance({level:0})
const notesUtils = require('./notes.js')

/////////add, remove, read, list

/////////create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: "string"
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        notesUtils.addNote(argv.title, argv.body)
    }
})

/////////create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a  note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        notesUtils.removeNote(argv.title)
    }
})

/////////create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading a note !!')
    }
})

/////////create list command
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: function() {
        console.log('Listing out all the notes !!')
    }
})


yargs.parse()

/////////getting notes from notes.js and printing that
// const getNotes = require('./notes.js')
// console.log(getNotes())

// const name = require('./utils.js')
// console.log(name)

// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)

//////////validator package
//console.log(validator.isEmail('anshulkishore310@gmail.com'))

//////////chalk package
// console.log(chalk.blue('Success !!'))
// console.log(chalk.blue.inverse('Inverse !!'))

// const error = chalk.bold.red;
// const warning = chalk.keyword('orange');
 
// console.log(error('Error!'));
// console.log(warning('Warning!'));

// const name = 'Anshul';
// console.log(ctx.green('Hello %s'), name);

//////////getting argument from command line
// console.log(process.argv[2])