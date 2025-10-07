//check a number 2 is present or not

//Linear Search

numArray = [10,23,45,89,2,8,18]

var searchKey = 2
var isFound = false
var count=0
console.log("Linear Search");

for(let num of numArray){
    count++
    if(searchKey==num){
        isFound=true
        break
    }
}

console.log(`Execution time : ${count}`);

console.log(isFound?"Found":"Not Found");

//Binary Search
numArray = [10,23,45,89,2,8,18]

var searchKey = 2
var isFound = false
var count = 0
numArray.sort((a,b)=>a-b)
var low = 0
var up = numArray.length-1
console.log("Binary Search")

while(low<=up){
    const mid = Math.floor(low+up/2)
    count++
    if(numArray[mid]==searchKey){
        isFound=true
        break
    }else if(numArray[mid]>searchKey){
        up = mid-1
    }else{
        low = mid+1
    }
}
console.log(`Execution time : ${count}`);

console.log(isFound?"Found":"Not Found");