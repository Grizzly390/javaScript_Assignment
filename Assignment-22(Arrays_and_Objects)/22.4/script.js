/**Assignment: Building a Student Management System
Description:
You are tasked with building a student management system using JavaScript. The system should allow you to
perform various operations on a list of students, including adding, updating, deleting, and displaying student
information.
Implement the following functions using pure JavaScript (without any external libraries or frameworks):
a. Add a Student: Create a function to add a new student to the array.
b. Update Student Information: Create a function to update a student's information based on their id.
c. Delete a Student: Create a function to delete a student based on their id.
d. List All Students: Create a function to display a list of all students.
e. Find Students by Grade: Create a function to find all students who have a specific grade.
f. Calculate Average Age: Create a function to calculate the average age of all students using array method.*/

const students=[
    {id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A"},

    {id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B"},

    {id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A"},
]

//To add a new student to the array

function addStudent(id, firstName, lastName, age, grade){

    const newStudent={
        id: id,
        firstName: firstName,
        lastName: lastName,
        age: age,
        grade: grade
    }

    students.push(newStudent);

    return students;
}

addStudent(4, "Saul", "Smith", 22, "A");

addStudent(5, "Harry", "Style", 25, "C");

console.log(students);


//To update a student's information based on their id

function updateById(id, updatedInfo){
    
    const studentIndex= students.findIndex(student => student.id === id);


    if (studentIndex != -1){

        const updatedStudents= [
            ...students.slice(0, studentIndex),
            {...students[studentIndex], ...updatedInfo},
            ...students.slice(studentIndex+1)
        ]

        students.length =0;
        students.push(...updatedStudents)

        return students;
    }else{
        console.log("student with", id ,"not found.");
        return students
    }
}

updateById(5,{age: 21, grade: "B"} );

console.log(students);

updateById(7,{age: 21, grade: "B"} );

console.log(students);

//To delete a student based on their id.

function deleteStudentById(id){
    const studentIndex= students.findIndex(student => student.id ===id);

    if (studentIndex!= -1){
        students.splice(studentIndex, 1);

        return students;
    } else{
        console.log("Student with", id, "not found.");
    }
}

deleteStudentById(2);

console.log(students);

//To display a list of all students

function displayAllStudents(){
    students.forEach( student => {
        console.log(student.id, student.firstName, student.lastName, student.age, student.grade);
    })
}

displayAllStudents();

//To find all students who have a specific grade

function findStudentByGrade(targetGrade){
    return students.filter(student=> student.grade === targetGrade);
}

const gradeAStudent= findStudentByGrade("A");

console.log("Students with Grade-A:", gradeAStudent);


//To calculate the average age of all students using array method.

function averageAge(){
    const totalAge= students.reduce((sum, student) => sum + student.age, 0);

    if (students.length ==0){
        console.log("No student to calculate average age");
        return 0;
    }

    const average= totalAge/students.length;

    return average;
}

const average= averageAge();
console.log("Average age of all students:", average);

