//print numbers from 1 to 10 using for loop

for(let i=1;i<=10;i++){
    console.log(i);   
}
// number from 10 to 1
for(i=10;i>=1;i--){
    console.log(i);
}

//print factorial of a numer using string
var prompt = require('prompt-sync')();
var number = prompt('Input Number: ');
num=number
var fact = 1
for(i=1;i<=num;i++){
     fact *= i;
}
console.log(`${number}! =${fact}`);