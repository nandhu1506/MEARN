//check a number 2 is present or not

numArray = [10,23,45,89,2,8,18]
result=""
for (let num of numArray){
    if(num==2){
        result=true
        break
    }
}
if(result==true){
    console.log("The number 2 is present in given array");
}else{
    console.log("The number 2 is not present in given array");
}

console.log(result?"Present":"Not Prestnt");