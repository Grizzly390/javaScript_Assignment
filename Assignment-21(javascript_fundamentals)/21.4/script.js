/**Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not
only checks if there is a match but also extracts specific parts of the matched text using groups. Test the
function with patterns that include groups to capture different parts of a date (e.g., day, month, and year)
from a given string. */

function extractDate(pattern, string){

    const regex= new RegExp(pattern);

    const match= regex.exec(string);

    if(match){
        const day= match[1] || "N/A";
        const month= match[2] || "N/A";
        const year= match[3] || "N/A";

        return{
            day,
            month,
            year,
        }
    } else {
        return null;
    }
}

const patternForDate=/(\d{1,2})\/(\d{1,2})\/(\d{4})/;
const stringForDate="26/08/2022";

const extractedDate= extractDate(patternForDate, stringForDate);

if(extractedDate){
    console.log("Day:", extractedDate.day);
    console.log("Month:", extractedDate.month);
    console.log("Year:", extractedDate.year);
}else{
    console.log("NO MATCH FOUND!!!");
}


