/*Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using
recursion. Test the function with different inputs.*/

function factorial(num){
    if(num===0){
        return 1;
    }else{
        return num*factorial(num-1);
    }
}

console.log("Factorial of 3 :", factorial(3));
console.log("Factorial of 7 :", factorial(7));
console.log("Factorial of 0 :", factorial(0));
console.log("Factorial of 9 :", factorial(9));
console.log("Factorial of 6 :", factorial(6));