// check a number is even or odd

// function oddeven(x){
//     if(x%2==0){
//         console.log("Given number is even");
//     }else{
//         console.log("Given number is odd");
//     }
// }
var prompt = require('prompt-sync')();
var number = prompt('Input Number: ');

 oddeven(number)

 // arrow fns

 const oddeven = num=>num%2==0?"EVEN":"ODD"
 console.log(`Number is : ${oddeven}`);
 