// print square of a number
function square(number){
    return number**2
}
var prompt = require('prompt-sync')();
var number = prompt('Input Number: ');

console.log(`Square is : ${square(number)}`);


// arrow fns

const square = number=>number**2
console.log(`Square is : ${square(10)}`)