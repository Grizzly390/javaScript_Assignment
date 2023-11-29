//Q-Write a program that grades students based on their marks.
//If greater than 90 then A Grade.
//If between 70 and 90 then a B grade.
//If between 50 and 70 then a C grade.
//Below 50 then an F grade.

let marks=33;

if(marks>90){
    console.log("You get A grade.")
}else if(marks>70 && marks<=90){
    console.log("You get B Grade.")
}else if(marks>50 && marks<=70){
    console.log("You get C Grade.")
}else{
    console.log("You get F Grade.")
}