//Explain the usage of ternary operator with syntax and write a program to check whether the number is evenor odd using the ternary operator.

//In JavaScript, the ternary operator is a concise way to write conditional statements.

//The syntax of the ternary operator is:
//condition ? expression_if_true : expression_if_false

//Here's a simple JavaScript program that uses the ternary operator to check whether a number is even or odd:

// JavaScript program to check if a number is even or odd using the ternary operator

let num= 6;
num=parseInt(num);

// Check if the number is even or odd using the ternary operator
var result = num % 2 === 0 ? "Even" : "Odd";

// Output the result
console.log(`The number ${num} is ${result}.`);
