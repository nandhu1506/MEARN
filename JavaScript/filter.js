const numArray = [1,20,3,40,50,60]

//display all numbers > 30
console.log(numArray.filter(num=>num>30));

//display all even number
console.log(numArray.filter(num=>num%2==0));

//display square each numbers of the given array
numArray.forEach(num => console.log(num**2))

    //mapping for display it in a new array
    console.log(numArray.map(num=>num**2));
//  

//display largest 
console.log(`Largest : ${numArray.reduce((prev,curr)=>prev>curr?prev:curr)}`);

//smallest num
console.log(`Smallest : ${numArray.reduce((prev,curr)=>prev<curr?prev:curr)}`);

//total sum of all numbers
console.log(`Total : ${numArray.reduce((prev,curr)=>prev+curr)}`);
