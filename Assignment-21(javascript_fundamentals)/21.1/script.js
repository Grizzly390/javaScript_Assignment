/*Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
The inner function should access both the parameter of outerFunction and a variable declared within
outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
variables even after outerFunction has finished executing.*/


function outerFunction(num){

    let var1="Variable declared within outer function.";

    function innerFunction(){
        console.log("parameter-1 of outer function:", num);
        console.log("Variable declared in outer function:", var1);
    }


    return innerFunction;
}

const result= outerFunction(5);

result();

// outerFunction takes parameters and declares a local variable (Var1).

// Inside outerFunction, an inner function (innerFunction) is defined, which has access to both the parameter and the local variable.

// outerFunction returns the innerFunction, creating a closure over the parameter and var1.

// The inner function from the closure is called result, and it still has access to both the parameter and the local variable, even though outerFunction has finished executing.

// This demonstrates how lexical scoping in JavaScript allows inner functions to maintain access to variables from their containing outer functions, creating closures that encapsulate variables and behavior.