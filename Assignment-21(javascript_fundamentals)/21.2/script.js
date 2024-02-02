/*Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function
that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test
the function with various patterns and strings. */

function match(pattern, string){

    const regex= new RegExp(pattern);

    return regex.test(string);
}

const pattern1=/[a-zA-Z]/;
const pattern2=/[0-9]/;
const pattern3=/^[A-Za-z0-9]+$/;

const string1="Hello";
const string2="7707";
const string3="Hello7707";
const string4="#Hello78";

console.log(match(pattern1, string1));
console.log(match(pattern2, string1));
console.log(match(pattern3, string1));

console.log(match(pattern1, string2));
console.log(match(pattern2, string2));
console.log(match(pattern3, string2));

console.log(match(pattern1, string3));
console.log(match(pattern2, string3));
console.log(match(pattern3, string3));

console.log(match(pattern1, string4));
console.log(match(pattern2, string4));
console.log(match(pattern3, string4));