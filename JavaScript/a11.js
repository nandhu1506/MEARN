const nameArray=["mini","mili","rani","dini","sini"]
console.log(nameArray);

//Is "mili" is in given array
console.log(`Is mili is in given array : ${nameArray.includes("mili")?'yes':'no'}`);

//display index of "mili"
console.log(`Index of "mili" : ${nameArray.indexOf("mili")}`);

//delete "mili"
nameArray.splice(nameArray.indexOf("mili"),1)
console.log(nameArray);
const addArray=['dili','chili']
nameArray.concat(addArray)
console.log(nameArray.concat(addArray));

//join
console.log(nameArray.join(","));
