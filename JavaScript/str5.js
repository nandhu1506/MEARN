// prgm to print count of occurrence of a specific character in a string
//input = Javascript Language // count of "a" : 4
var prompt = require(`prompt-sync`)()
input = "Javascript Language"
var word = prompt(`Input a character : `)
count = 0
input.split("").forEach(char => {
    char==word && count++
})
console.log(`count of occurrence of ${word} in ${input} is ${count}`);