/*

1)Write a program named greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program:

$ node greeter.js

Good Morning, Victor.
Good Afternoon, Victor.
Good Evening, Victor.

-Solution
see greeter.js

2)Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

You are 20 years old.
In 10 years, you will be 30 years old.
In 20 years, you will be 40 years old.
In 30 years, you will be 50 years old.
In 40 years, you will be 60 years old.

-Solution
see age.js

3)What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);
-Solution
Undefined should be returned because the foo variable was declared inside of the
curly brackets/scope, and the console log took place outside of that scope

4)What happens when you run the following code? Why?


const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

-Solution
An error should occur because NAME is a const and cannot be reassigned.

5)Take a look at this code snippet:

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
What does this program log to the console? Why?

-Solution
The program should log 'bar' to the console as foo was declared globaly in that file,
and the console.log shared that same scope.

6)Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
Solution
-This program will run without error as the FOO variable inside of the brackets are
considered a seperate variable than the one that was declared outside of the brackets.
Also, the variable in the brackets is not being accessed or run.

*/