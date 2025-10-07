var weekdays = ["Monday","Tuesday","Wednesday"]
console.log(weekdays);
console.log(`Type of array : ${typeof weekdays}`);
console.log(`First item of Weekdays : ${weekdays[0]}`);
console.log(`Total items in Array : ${weekdays.length}`);
console.log(`Last item in Array : ${weekdays[weekdays.length-1]}`);

console.log("Display Array items one by one : Normal for loop");
for(let index=0;index<weekdays;index++){
    console.log(weekdays[index]);
}
console.log("Display Array items one by one : Normal for-of loop");
for(let day of weekdays){
    console.log(day)
}
console.log("Display Array items one by one : Normal for-in loop");
for(let index in weekdays){
    console.log(weekdays[index]);
}
console.log("Adding values to existing array , Push method");
weekdays.push("Thursday")
console.log("Adding values to existing array , Unshift method");
weekdays.unshift("Sunday")
console.log(weekdays)
console.log("Array after applying pop method");
weekdays.pop()
console.log(weekdays);
console.log("Array after shifting method");
weekdays.shift()
console.log(weekdays);



