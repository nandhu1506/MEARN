// prgm to genetrate a loop with numbers from 1 to 10 but print upto 5

var num=10
for(i=1;i<=10;i++){
    if(i>5){
        break       // forcefully exit loop
    }
    console.log(i);
}
console.log("loop completed")

var num=10
for(i=1;i<=10;i++){
    if(i>5){
        continue        // skip the step in loop
    }
    console.log(i);
}
console.log("loop completed")