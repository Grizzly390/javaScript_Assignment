//Describe the usage of the comma operator in JavaScript and provide an example.

// In JavaScript, the comma operator , is used to combine multiple expressions into a single expression. It evaluates each of its operands (from left to right) and returns the value of the last operand. While it's not commonly used in everyday code, it can be useful in certain situations, such as within a for loop's initialization or update section.

//Example:
// Using the comma operator in a variable declaration
var a = 1, b = 2, c = 3;
console.log("a:",a,"b:",b,"c:",c);

// Using the comma operator in a for loop
for (var i = 0, j = 10; i < 5; i++, j--) {
    console.log("i:", i, "j:", j);
}
