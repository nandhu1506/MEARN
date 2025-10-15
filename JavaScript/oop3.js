function add(...arg){
    console.log(arg);
    console.log("Result = "+ arg.reduce((a,b)=>a+b))    
}

add(10,20)
add(10,20,30)
add(10,20,30,40)