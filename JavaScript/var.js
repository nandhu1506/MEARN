//var keyword
console.log(`num =${num}`);
var num = 10
console.log(num);
//template leterals
console.log(`num = ${num}, type: ${typeof num}`)
num='number'
console.log(`num = ${num}, type: ${typeof num}`)

//const keyword
const data = 100
console.log(`data = ${data}, type: ${typeof data}`)

//let keyword
var i=10
console.log(`before loop, i=${i}`);
for(let i=1;i<=5;i++){
    console.log(`insideloop, i=${i}`);
}
console.log(`outside loop, i=${i}`)