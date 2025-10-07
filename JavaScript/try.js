var prompt = require(`prompt-sync`)()
var expr = prompt(`Input arithematic expersion : `)

try{
    const result = eval(expr)
console.log(`Result : ${result}`);
}catch(err){
    console.log("Invalid Expression");
}
console.log("Task Completed");