expenseArray = [12000,34000,27000,56000,10000,39000]
//display least expense
let least=expenseArray[0]
let highest=expenseArray[0]
let sum=0
for(let expense of expenseArray){
    if(expense<least){
        least=expense
    }
}
console.log(`Least expense is : ${least}`)

//display highest expense
for(let expense of expenseArray){
    if(expense>highest){
        highest=expense
    }
}
console.log(`Highest expense is : ${highest}`)

//display total expense
for(let expense of expenseArray){
    sum+=expense
}
console.log(`Total expense is : ${sum}`);