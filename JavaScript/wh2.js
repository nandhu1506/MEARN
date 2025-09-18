// print total sum of all numbers from 1 to 10

var i =1
var sum = 0

while(i<=10){
    console.log(i)
    sum += i
    i++
}
console.log(`sum of the number is : ${sum}`)

// find factorial of a number
// 4! = 1*2*3*4

var prompt = require('prompt-sync')();
var number = prompt('Input Number: ');
var i=1
var fact=1
while(i<=number){
    fact *= i
    i++
}
console.log(`${number}! = ${fact}`)

//Program to reverse a number

var prompt = require('prompt-sync')();
var number = prompt('Input Number: ');
let orginal=number
let rev=""
    while(number!==0)
    {
       var x=number%10
       rev = rev + (x + "")
       number=Math.floor(number/10)
    }
    console.log(`Orginal given number is: ${orginal}`)
    console.log(`Reverse of the given number is: ${rev}`)
    //check number is palindrome or not
    console.log(orginal==rev?"Palindrome":"Not a Palindrome")