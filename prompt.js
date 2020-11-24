// Prompt a user twice to input a number. Store their response in variables.
const num = prompt( "Pick any number ");
// Declare another variable to store the total of each statement
const realnum = parseInt(num);

const num2 = prompt("Pick a second number ");
const realnum2 = parseInt(num2);

// // Code a series of JS statements that use the user input to preform math operations.
const addition = realnum + realnum2;
console.log(addition);

const subtraction = realnum - realnum2;
console.log(subtraction);

const multiplication = realnum * realnum2;
console.log(multiplication);

const division = realnum / realnum2;
console.log(division);

const exponent = Math.pow(realnum, realnum2)
console.log(exponent);

const modulus = (realnum % realnum2)
console.log(modulus);
