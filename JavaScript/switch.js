// print day according to user input

var prompt = require('prompt-sync')();
var day = prompt('Input any date? ');

console.log(day)

switch(day){
    case "mon":console.log("Weekday!!!")
    break
    case "tue":console.log("Weekday!!!")
    break
    case "wen":console.log("Weekday!!!")
    break
    case "thu":console.log("Weekday!!!")
    break
    case "fri":console.log("Weekday!!!")
    break
    case "sat":console.log("Holiday!!")
    break
    case "sun":console.log("Holiday!!!")
    break
    default:console.log("try with other inputs!!!")
}