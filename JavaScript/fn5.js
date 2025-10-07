// factorial with function
const factorial = (num)=>{
    if(num==1){
        return 1
    }
    num*factorial(num-1)
}

console.log(`5! = ${factorial(5)}`);