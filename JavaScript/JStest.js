// fibonassi series
// ex: input : 8
// output: 0 1 1 2 3 5 8 13
// var input = 8
// let first = 0
// let second = 1
// console.log("Fibonacci Series is : ");

// for(let i=0;i<input;i++){
//     third=first+second
//     console.log(first);
//     first = second
//     second = third
// }


// Write a JS code to find the number of digits in a number
// let input = 3456
// let x =""+input
// console.log(`The number of digits in the given number is ${x.length}`);


// Write a program to Check if a triangle is equilateral, scalene, or isosceles.
// var prompt = require('prompt-sync')();
// var a = prompt('Input Side A : ');
// var b = prompt('Input Side B : ')
// var c = prompt('Input Side C : ')
// if(a==b&&b==c){
//     console.log("Equilatral triangle");
// }else if(a==b||b==c||a==c){
//     console.log("isosceles triangle");    
// }else{
//     console.log("scalene triangle");
// }

// Write a program to check if a year is leap year or not.
// var prompt = require('prompt-sync')();
// var year = prompt('Input Year : ');
// if(year%4==0){
//     console.log("leap year");
// }else{
//     console.log("Not a Leap year");
// }


//  Write a program to Find number of days in a given month.
// var prompt = require('prompt-sync')();
// var month = prompt(`Input Month in number: `)
// var year = prompt('Input Year in number: ');
//     if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
//         console.log(`There are 31 days in the month ${month} of year ${year}`);
//     }else if(month==4||month==6||month==9||month==11){
//         console.log(`There are 30 days in the month ${month} of year ${year}`);
//     }else if(month==2){
//         if(year%4==0){
//             console.log(`There are 29 days in the month ${month} of year ${year}`);
//         }else{
//             console.log(`There are 30 days in the month ${month} of year ${year}`);
//         }
//     }else{
//         console.log("Enter a valid month and year");
//     }


//  Print the given pattern
// *    *   *   *   *   *
// *                    *
// *                    *
// *                    *
// *    *   *   *   *   *

// for(let i=1;i<=5;i++){
//     let x=""
//     for(let j=1;j<=6;j++){
//         if(i==1||j==1||j==6||i==5){
//         x+="* "
//         }else{
//             x+="  "
//         }
//     }
//     console.log(x);    
// }

// Write a program that simulates a basic calculator capable of performing addition, subtraction, multiplication, and division. The program should prompt the user to enter two numbers and an operator (+, -, *, /), then output the result of the operation.

// var prompt = require('prompt-sync')();
// var a = Number(prompt(`Enter number a : `))
// var op = prompt('Enter the operation to be performed "+ , - , * , /"');
// var b = Number(prompt('Enter number b: '))
// switch (op) {
//     case "+":
//          console.log(`${a} + ${b} = ${add(a, b)}`);
//         break;
//     case "-":
//          console.log(`${a} - ${b} = ${sub(a, b)}`);
//         break;
//     case "*":
//          console.log(`${a} * ${b} = ${mul(a, b)}`);
//         break;
//     case "/":
//          console.log(`${a} / ${b} = ${div(a, b)}`);
//         break;
//     default:
//         console.log(`Enter Valid Inputs`);
        
//         break;
// }
// function add(a,b) {
//    let result=a+b
//    return result
// }
// function sub(a,b) {
//    let result=a-b
//    return result
// }
// function mul(a,b) {
//    let result=a*b
//    return result
// }
// function div(a,b) {
//    let result=a/b
//    return result
// }


// Write a function to find the sum of all prime numbers up to a given number.
var prompt = require('prompt-sync')();
var num = Number(prompt(`Input the number: `))
var sum = 0
for(let i=2;i<=num;i++){
    let isPrime=true;
    for(let j=2;j<=i-1;j++){
        if(i % j==0) {
            isPrime=false;
            break;
        }
    }
    if (isPrime==true) {
        sum += i;
    }
}
console.log(`Sum of prime numbers till ${num} is ${sum}`);