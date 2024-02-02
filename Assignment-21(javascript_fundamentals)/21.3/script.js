/*Write a JavaScript program that demonstrates the use of character classes in regular expressions.
Create a function that searches for specific character classes in a given string and returns the matches. Test
the function with patterns for digits, uppercase letters, lowercase letters, and special characters. */

function charcterClasses(string){
    const digitPattern=/[0-9]/g;
    const uppercasePattern= /[A-Z]/g;
    const lowercasePattern=/[a-z]/g;
    const specialCharacterPattern=/[^A-Za-z0-9]/g;


    const digits= string.match(digitPattern) || [];
    const uppercase= string.match(uppercasePattern) || [];
    const lowercase= string.match(lowercasePattern) || [];
    const specialCharacter= string.match(specialCharacterPattern) || [];

    return{
        digits,
        uppercase,
        lowercase,
        specialCharacter,
    }
}

let string="Hello PWSkills006 ! #@ from Himanshu";

const result=charcterClasses(string);

console.log("Digits:", result.digits);
console.log("Upper Case:", result.uppercase);
console.log("Lower Case:", result.lowercase);
console.log("Special Character:", result.specialCharacter);

