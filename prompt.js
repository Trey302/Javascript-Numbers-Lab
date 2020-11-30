// Prompt a user twice to input a number. Store their response in variables.
const num = prompt( "Enter any number ");
// Declare another variable to store the total of each statement
const realnum = parseInt(num);

const num2 = prompt("Thank you, enter a second number ");
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

// Code a statement that would return a random number between 1 and 35.
const randomNumber = Math.floor( Math.random() * 35 ) + 1 ;
console.log(randomNumber);

// Code a statement to return a floating point number rounded up to the nearest integer.
const decimal = prompt ('Enter any number with a decimal');
const floatUp = parseInt(decimal);
const decimalNumber = Math.ceil (Math.random() * floatUp ) + 1;
console.log(decimalNumber);

// Code a statement that returns a floating point number rounded down to the nearest integer.
const number = prompt ('Enter another number with a decimal');
const floatDown = parseInt(number);
const floatNumber = Math.floor (Math.random() * floatDown ) + 1;
console.log(floatNumber);

const one = prompt( "Enter any number ");
const realone = parseInt(one);

const two = prompt("Thank you, enter another number ");
const realtwo = parseInt(two);

const power = Math.pow(realone, realtwo)
console.log(power)