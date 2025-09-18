//
var num1=20
var num2=30
if(num1>num2){
    console.log("largest is num1")
}
else if(num2>num1){
console.log("largest is num2")
}else{
    console.log("both are equal")
}
console.log(num1>num2?"largest is num1":num2>num1?"largest is num2":'equal')