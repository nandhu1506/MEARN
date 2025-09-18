//find GCD/HCF of 2 numbers
//GCD(4,12)=4
//4 : 1 2  4
//12: 1 2 3 4 6 12

var prompt = require('prompt-sync')();
var num1 = prompt('Input First Number: ');

var prompt = require('prompt-sync')();
var num2= prompt('Input Second Number: ');

let gcd=1

var min = num1<num2 ? num1 : num2

for(i=1;i<=min;i++){
    if(num1%i == 0 &&  num2%i == 0){
        gcd=i
        }
}
console.log(`GCD for given Numbers are: ${gcd}`);
