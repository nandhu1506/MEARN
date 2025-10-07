numArray = [
    [10,20],[30,40],[50,60]
]

//display all numbers greater than 40

for(let subArray of numArray){
    for(let num of subArray){
        if(num>40){
            console.log(num);
        }
    }
}