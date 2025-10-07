//display number count
numArray = [10,20,30,40,20,30,50,30,20,10,60,70,40,50,60,70,80,20]
//output = {10:2,20:4,30:3,40:2,50:2,60:2,70:2,80:1}

const output = {}
numArray.forEach(num=>output.hasOwnProperty(num)?output[num]+=1:output[num]=1)
console.log(output);