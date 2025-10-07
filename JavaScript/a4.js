//duplicate numbers : 20,30

duplicateArray=[10,20,30,20,40,30,20]

for(let index=0;index<duplicateArray.length;index++){
    for(let i=index+1;i<duplicateArray.length;i++){
        if(duplicateArray[index]==duplicateArray[i]){
            console.log(duplicateArray[index]);
            break
        }
    }
}

//print sum of pair of 2 numbers is 7,(2,5),(3,4)

pairArray = [2,3,4,5]
pairSum = 7
for(let i=0;i<pairArray.length;i++){
    for(let j=i+1;j<pairArray.length;j++){
        if(pairArray[i]+pairArray[j]==pairSum){
            console.log(`${pairArray[i]},${pairArray[j]}`)
        }
    }
}

//display duplicate numbers from 2 given array
a1 = [10,11,20,30,45]
b1 = [11,25,30,37,40]
console.log("The duplicate numbers are :")
for(let i of a1){
    for(let j of b1){
        if(i==j){
            console.log(i)
            break
        }
    }
}