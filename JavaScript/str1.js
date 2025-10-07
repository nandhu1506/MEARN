const sentence = "Hi all welcome to MERN Stack Class"
console.log(`Total character in sentence : ${sentence.length}`);
console.log(`Substring of sentence : ${sentence.substring(0,10)}`);
console.log(`Slice of Sentence : ${sentence.slice(0,-1)}`);
console.log(`sentence in UpperCase : ${sentence.toUpperCase}`);
console.log(`Sentence in LowerCase : ${sentence.toLowerCase}`);
console.log(`Is sentence starts with "Hi" : ${sentence.startsWith("Hi")?"Yes":"No"}`);
console.log(`Is sentence ends with "Class" : ${sentence.endsWith("class")?"Yes":"No"}`);
const data =  "     Trim Data   "
console.log(`Total characters in data : ${data.trim().length}`);
console.log(`Is "welcome" is in sentence : ${sentence.includes("welcome")?"Yes":"No"}`);
console.log("Sentence after splitting with space");
console.log(sentence.split(" ")); 