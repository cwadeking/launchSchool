let readLineSync = require('readline-sync');

let firstName = readLineSync.question("What is your first name?\n");
let secondName = readLineSync.question("What is your second name?\n");
console.log(`Good afternoon, ${firstName} ${secondName}!`);