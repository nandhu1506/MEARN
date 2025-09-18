// predict pattern

//input:    2           3              4            5

//output:   24          369           4936          ?


var prompt = require('prompt-sync')();
var input = prompt('Input Number: ');

var num=1
var str=""
while(num<=input)
{
    console.log(num);
    str+=num
    num++
}
console.log(`input : ${input}`);
console.log(`output : ${str*input}`);

