const validator = require('validator')
const chalk = require('chalk')
const ctx = new chalk.Instance({level:0})

console.log(process.argv)

const command = process.argv[2]

if (command === 'add') {
    console.log("Adding note !!")
} else if (command === 'remove') {
    console.log("Remove note !!")
}

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