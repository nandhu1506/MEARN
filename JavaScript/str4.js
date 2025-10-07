products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]
//search a string is available in a product array, it return an array of product which include the given string otherwise display no products are available
//search string= a
//output= ['hide and seek','lays','parleG','good day']
var prompt = require('prompt-sync')()
let key = prompt('Input key: ')
const output = products.map(item=>item[1]).filter(item=>item.toLowerCase().includes(key.toLowerCase()))
if(output.length>0){
    console.log(`output : ${output}`);
}else{
    console.log("Product not Found");   
}