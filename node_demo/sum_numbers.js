let readLineSync = require('readline-sync');

let number1 = Number(readLineSync.question(`Enter the first number\n`));
let number2 = Number(readLineSync.question(`Enter the second number\n`));

let sum = number1 + number2;

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);

