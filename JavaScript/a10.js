numArray = [
    [10,20],[30,40],[50,60]
]

//display all numbers greater than 40
console.log(numArray.flat().filter(num=>num>40));

//display squares of numbers as a new array
console.log(numArray.flat().map(num => num**2));