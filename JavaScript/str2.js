//prgm to print all vowels fron a given word
//input : apple     output : a , e
var prompt = require('prompt-sync')()
let word = prompt('Input any word: ')
let vowels = ['a','e','i','o','u']
// let vowels = "aeiou"
// for (const char of vowels){
//     if(word.includes(char)){
//         console.log(char);
//     }
// }
console.log(`Vowels are : ${vowels.filter(char=>word.toLowerCase().includes(char))}`)


//prgm to check a mail is valid gmail
let mailid="abcdef@gmail.com"
if(mailid.endsWith("@gmail.com")){
    console.log("Valid Gmail");    
}else{
    console.log("Invalid Gmail");
}


//prgm to print word count of a paragraph
let para= `This is a demo used for count`
let words= para.trim().split(/\s+/)
console.log(`Paragraph is : ${para}`);
console.log(`word count is : ${words.length}`);