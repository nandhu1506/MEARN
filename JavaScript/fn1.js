// Program to add 2 numbers using functions

// function add(num1,num2){
//     // add 2 numbers
//     const result = num1+num2
//     console.log(`${num1} + ${num2} = ${resuult}`)
//     return result
// }

// arrow function
const add =(num1,num2)=>{
     const result = num1+num2
    console.log(`${num1} + ${num2} = ${result}`)
    return result
}

var printResult = add(10,20)
console.log(`Result = ${printResult}`)