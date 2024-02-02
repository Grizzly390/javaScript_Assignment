/*Write a JavaScript function called curry that takes a function as an argument and returns a curried
version of that function. The curried function should accept arguments one at a time and return a new
function until all arguments are provided. Then, it should execute the original function with all arguments.
Test the curry function with a function that adds two numbers. */

function curry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args);
        }else{
            return function(...moreArgs){
                return curried(...args, ...moreArgs);
            }
        }
    }
}

const add= curry((a,b)=>a+b);

const add7= add(7);
console.log("Curried add function with 7:", add7(7));

console.log("Directly applying all arguments:", add(6,9));