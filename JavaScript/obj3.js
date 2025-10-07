pattern = "ABBCADDBAAC"
//program to display first recurssive character from the given pattern
//Ans : B
const output = {}
const charArray = pattern.split("")

for(let char of charArray){
    if(output.hasOwnProperty(char)){
        console.log(`First Recurssive character in patern ${pattern} : ${char}`);        
        break
    }else{output[char] = 1
    }
}