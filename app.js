const notes = require("./notes")
const validator  = require("validator")
const chalk = require('chalk');

console.log(chalk.red.bgYellowBright.bold('Hello world!'));
console.log(notes())

console.log(validator.isEmail("abc@odc.com"))
// const add = require("./utils");

// var s = add(4,6);
// console.log(s);