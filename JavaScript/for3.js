// print a number is prime or not
var prompt = require('prompt-sync')();
var number = prompt('Input Number: ');

var isPrime = true
for(i=2;i<=(number/2);i++){
    if(number%i==0){
        isPrime=false
        break
    }
}
console.log(isPrime?"Prime Number" : "Not A Prime Number");
