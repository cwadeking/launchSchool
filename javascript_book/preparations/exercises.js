let foo = "bar";
console.log(foo);
foo;

/*5. Identify the Constructors for each of the following
methods and classify each method as either a "Static" or 
a "Prototype" method 

substring- substring is a prototype method as it is called from
an instance

create- is a static method as it is called from the constructor of
Object class

fromCharCode- is a static method as it is called from the constructor of
Object class

slice- is a prototype method as it is called from an instance

toString- is a prototype method as it is called from an instance
*/

/*
6)Which of the following names satisfy the style guidelines for variable
names? For the purposes of this question, constants are not variables.

index - statisfies
CatName - does not
snake_case - does not
lazyDog - satisfies
quick_Fox - does not
1stCharacter - does not
operand2 - satisfies
BIG_NUMBER - does not
*/

/*
7) Which of the following satisfy guidelines for function names?
index -technically does, but could be more descriptive.
CatName- uses Pascal Casing instead of camelCasing --unless constructor
snake_case- used more in Python, but would be better used in file names instead
of functions
lazyDog- same as index
quick_Fox- Same as snake_case, but better casing without underscore. Not having 
the underscore at the beginning or the end is helpful though.
1stCharacter- should not start with a number.
operand2-should be fine
BIG_NUMBER-better for Const
*/

/*
8) Which satisfy the style guidlines for constants used to represent magic numbers
BIG_NUMBER ONLY
*/

/*
9) Which of the following don't satisfy the style guidelines for naming variables,
functions, or constants?

snake_case
quick_Fox
1stCharacter
 */

//first Exercise, Intro to programming
let firstName = "Charles";
let lastName = "King";

let wholeName = firstName + " " + lastName;
let tempNumber = 4936;
let stringNumber = tempNumber.toString();
console.log(tempNumber.toString().length);


//My solution for second exercise. 
// function grabIndividualDigits(fourDigitNumber){
//   for(let i = 0; i < fourDigitNumber.toString().length; i ++){
//     printDigitAndValue(fourDigitNumber, i);
//   }
// }

// function printDigitAndValue(fullNumber, place){
//   let numberToModulusBy = '10';
//   for(let i = 0; i < place; i++){
//     numberToModulusBy += '0';
//   }
//   let singleDigit = (fullNumber % parseInt(numberToModulusBy)).toString()[0];
//   console.log(`The ${place} digit is ${singleDigit}`);
// }

// grabIndividualDigits(tempNumber);

//solution after hint

function printEachDigitOfANumber(fullNumber){
  let counter = 0;
  let initialLength = fullNumber.toString().length;
  while(counter < initialLength){
    let remainderValue = fullNumber % 10;
    counter++;
    console.log(`The ${counter} digit from the right is ${remainderValue}`)
    fullNumber = parseInt(fullNumber.toString().slice(0,-1));
  }
}

printEachDigitOfANumber(tempNumber);

//exercise 8

let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

//exercise 9 

let pets = {
  'asta': 'dog',
  'butterscotch': 'cat',
  'pudding': 'cat',
  'neptune': 'fish',
  'darwin': 'lizard',
}
