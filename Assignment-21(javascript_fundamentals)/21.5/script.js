/**You are building a shipping application. Write a program that takes the type of package ("standard",
"express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time
based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and
"overnight" would be delivered the next day. */

function deliveryTime(packageType){
    let time;

    switch(packageType.toLowerCase()){
        case "standard":
            time= "3-5 days";
            break;

        case "express":
            time= "1-2 days";
            break;

        case "overnight":
            time= "next day";
            break;
        
        default:
            time="unknown";
    }

    return time;
}

const packageType1= "standard";
const packageType2= "express";
const packageType3= "overnight";

console.log("Estimate delivery time for", packageType1,":",deliveryTime(packageType1) );
console.log("Estimate delivery time for", packageType2,":",deliveryTime(packageType2) );
console.log("Estimate delivery time for", packageType3,":",deliveryTime(packageType3) );