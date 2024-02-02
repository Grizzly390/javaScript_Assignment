/**The following is an array of 10 students ages:
=> const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method*/

const ages= [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//For sorting the array and finding min and max age.
const minAndMaxAge=ages.sort((a,b)=> a-b);

const minAge=ages[0]

const maxAge= ages[ages.length-1]
console.log("Minimum age:",minAge);
console.log("Maximum Age:",maxAge);

//For finding median age
const median= ages[(ages.length)/2]

console.log("Median:",median);


// For finding average
let sum=0;

for(let i=0; i<ages.length; i++){
    sum+=ages[i];
}

const average=(sum)/(ages.length);

console.log("Average:",average);

// For finding range of ages
 const range= maxAge + "-"+ minAge;

 console.log("Range:",range);

 //For comparing the value of (min- average) and (max- average), using abs() method.

 let absoluteValue1= Math.abs(minAge-average);
 let absoluteValue2= Math.abs(maxAge-average);

 console.log("Absolute value of (min - average)=", absoluteValue1);
 console.log("Absolute value of (max - average)=", absoluteValue2);
