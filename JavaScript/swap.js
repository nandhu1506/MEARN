//swap with third variable
var num1=10
var num2=20
var temp= num1
console.log(`before swap num1=${num1}`)
console.log(`before swap num2=${num2}`)
num1=num2
num2=temp
console.log(`after swap num1=${num1}`)
console.log(`after swap num2=${num2}`)

//swap with addition and subtraction
console.log(`Before Swapping: num1=${num1}, num2=${num2}`)
num1= num1+num2
num2=num1-num2
num1=num1-num2
console.log(`After Swapping: num1=${num1}, num2=${num2}`)