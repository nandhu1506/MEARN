const sentence = "Hello Hi all Hello welcome"

//Program to display count of each word in the given sentence
//output = Hello:2 , Hi:1, all:1 , welcome:1

//create empty object for output
//split string into array of words, get each word from array
//check word is in output object
//if present, update the value of that word key by 1
//not present , insert word into output object as its key and value as 1
console.log(sentence);

const output = {}
sentence.split(" ").forEach(word=>output.hasOwnProperty(word)?output[word]+=1:output[word]=1)
console.log(`Word Count of Sentence : `);

console.log(output);
