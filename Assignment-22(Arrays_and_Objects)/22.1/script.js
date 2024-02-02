/**In the following shopping cart add, remove, and edit items
=> const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of your shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea' */

const shoppingCart= ['Milk', 'Coffee', 'Tea', 'Honey']

console.log(shoppingCart);      // initial values

const meatAdded= shoppingCart.unshift('Meat');  // 'Meat' added in the beginning of the array

console.log(shoppingCart);

const sugarAdded=shoppingCart.push('Sugar');    //'Sugar' added in the end of the array

console.log(shoppingCart);

shoppingCart.splice(4, 1);  //'Honey' removed from the array

console.log(shoppingCart); 

shoppingCart[3]= 'Green Tea'; //'Tea' modified to 'Green Tea'

console.log(shoppingCart);

