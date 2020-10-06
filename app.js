const validator = require('validator')
const chalk = require('chalk')
const ctx = new chalk.Instance({level:0})
const getNotes = require('./notes.js')
console.log(getNotes())

// const name = require('./utils.js')
// console.log(name)

// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)

//validator package
console.log(validator.isEmail('anshulkishore310@gmail.com'))

//chalk package
console.log(chalk.blue('Success !!'))
console.log(chalk.blue.inverse('Inverse !!'))

const error = chalk.bold.red;
const warning = chalk.keyword('orange');
 
console.log(error('Error!'));
console.log(warning('Warning!'));

const name = 'Anshul';
console.log(ctx.green('Hello %s'), name);