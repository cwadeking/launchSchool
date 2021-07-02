/*
1)Concatenate two or more strings, one with your first name and one with your
last, to create a string with your full name as its value. For example, if 
your name is John Doe, think about how you can put 'John' and 'Doe' together 
to get 'John Doe'.
Solution
*/
let firstName = "Charles";
let lastName = "King";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
/*

2)Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

thousands place is 4
hundreds place is 9
tens place is 3
ones place is 6
Solution
*/
let testNumber = 2440;
individualDigitsOfFourDigitNumber(testNumber);
function individualDigitsOfFourDigitNumber(fourDigitNumber){
  let thousandsPlace = (fourDigitNumber - (fourDigitNumber % 1000)) / 1000;
  let hundredsPlace = ((fourDigitNumber % 1000) - ((fourDigitNumber % 1000) % 100)) / 100;
  let tensPlace = ((fourDigitNumber % 100) - ((fourDigitNumber % 100) % 10)) / 10;
  let onesPlace = fourDigitNumber % 10;
  console.log(thousandsPlace, hundredsPlace, tensPlace, onesPlace);
}
/*

3)Identify the data type for each of the following values:

'true' - string
false - bool
1.5 - float(Number)
2 - integer(Number)
undefined (Undefined)
{ foo: 'bar' } - object

*//*

4)Explain why this code logs '510' instead of 15.


console.log('5' + 10);

Solution
-The program implicitly converts 10 to a string and concatenates the '5' and the '10'
together to give '510'
*//*

5)Refactor the code from the previous exercise to use explicit coercion, 
so it logs 15 instead.

Solution
*/
console.log(parseInt('5') + 10);
/*

6)Use the template literal syntax along with the expression Number('5') + 
10 to log the following sentence to the console:

The value of 5 + 10 is 15.
Solution
*/
console.log(`The value of ${Number('5')} + ${Number('10')} is ${Number('15')}`);
/*

7)Will an error occur if you try to access an array element with an index 
that is greater than or equal to the length of the array? For example:

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?
Solution
-The third index of the array is undefined.  Since arrays are not strictly typed when
declared this way, the array could continually be added to.  However, those values are
not currently defined.
*//*

8)Create an array named names that contains a list of pet names. For instance:

Name
asta
butterscotch
pudding
neptune
darwin
You can use that data or make up your own.

Solution
*/
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin'];

/*

9)Create an object named pets that contains a list of pet names and the type of animal. For instance:

Name	Animal
asta	dog
butterscotch	cat
pudding	cat
neptune	fish
darwin	lizard
You can use that data or make up your own.

Solution
*/
let pets = {
  'asta': 'dog',
  'butterscotch': 'cat',
  'pudding': 'cat',
  'neptune': 'fish',
  'darwin': 'lizard',
}
/*

10)What value does the following expression evaluate to?


'foo' === 'Foo'
Solution
-This comparison evaluates to false.  Although they are of the same data type, they
are not the same value.
*//*
11)What value does the following expression evaluate to?


parseInt('3.1415')
Solution
-This will evaluate to 3. ParseInt returns whole numbers.  So after the explicit
conversion to 3.1415, the decimal values will be dropped off.
*//*

12)What value does the following expression evaluate to?

'12' < '9'
Solution
-Because strings are evaluated a single char at a time from left to right, when 1 is
compared to 9, it will be less than 9, and therefore the expression will evaluate to 
true.
*/

