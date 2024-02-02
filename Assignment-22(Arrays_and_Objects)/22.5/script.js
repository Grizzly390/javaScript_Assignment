/**You are given a JavaScript object representing a student's information. Your task is to use the 'for...in' loop
to iterate over the properties of the object and perform various operations.

Create a function displayStudentInfo that takes the student object as a parameter. Inside this function, use a
'for...in' loop to iterate over the properties of the student object and print each property and its corresponding
value to the console.*/

const student= {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
}; 

function displayStudentInfo(studentInfo){
    for(let property in studentInfo){
        if(studentInfo.hasOwnProperty(property)){
            console.log(property, studentInfo[property]);
        }
    }
}

displayStudentInfo(student);