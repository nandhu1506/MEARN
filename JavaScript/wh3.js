//check a 3 digit number is amstrong number
// amstrong :
var prompt = require('prompt-sync')();
var input = prompt('Input Number: ');

var num = input; 
let sum = 0;

while (num>0) {
  let lastdigit = num % 10;
  sum += lastdigit**3
  num = Math.floor(num / 10)
}
console.log(`sum of cubes of each digit os ${input} = ${sum}`)
console.log(input ==sum ? "Armstrong Number" : "Not an Armstrong Number");