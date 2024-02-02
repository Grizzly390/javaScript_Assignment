/*Write a JavaScript function called calculateTax that takes an income as an argument and returns the
amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
function with various incomes.*/



function createTaxBrackets(minIncome, maxIncome, rate){
    return{minIncome, maxIncome, rate}
}

function calculateTax(taxBrackets){
    return income=>{
        let totalTax=0;

        for(const {minIncome, maxIncome, rate} of taxBrackets){
            if(income>minIncome){
                const taxableAmount=Math.min(income, maxIncome)- minIncome;
                totalTax+= taxableAmount*(rate/100);
            }
        }

        return {income, tax: totalTax, totalIncomeAfterTax:income - totalTax};
    }
}

const bracketsForIncomeTax = [
    createTaxBrackets(0, 300000, 0),
    createTaxBrackets(300001, 600000, 5),
    createTaxBrackets(600001, 900000, 10),
    createTaxBrackets(900001, 1200000, 15),
    createTaxBrackets(1200001, 1500000, 20),
    createTaxBrackets(1500001, Infinity, 30)
]

const calculateIncomeTax = calculateTax(bracketsForIncomeTax);

console.log("Person 1:", calculateIncomeTax(250000));
console.log("Person 2:", calculateIncomeTax(500000));
console.log("Person 3:", calculateIncomeTax(700000));
console.log("Person 4:", calculateIncomeTax(1100000));
console.log("Person 5:", calculateIncomeTax(1400000));
console.log("Person 4:", calculateIncomeTax(5000000));