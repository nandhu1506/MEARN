var num = -4
if(num>0)
{
    console.log(`Given number is Positive`)
}
else if(num<0)
{
    console.log(`given number is Negative`)
}
else
{
    console.log(`given number is zero`)
}


//to print largest among 2 numbers
var num1=5
var num2=10
if(num1<num2)
{
    console.log(`num2 is largest`)
}
else if(num1>num2)
{
    console.log(`num1 is largest`)
}
else{
    console.log(`given numbers are equal`)
}
// program to print "fizz" if number is divisible by 3, "buzz" if number divisible by 5,
//"fizzbuzz" if number divisible by 15
var number= 45
if(number%15==0)
{
    console.log(`FizzBuzz`)
}
else if(number%5==0)
{
    console.log( `Buzz`)
}
else if(number%3==0){
    console.log(`Fizz`)
}
else{
    console.log(`give another number`)
}

//print second largest number among 3 unique numbers and print them in ascending order  
var num3= 20
var num4= 30
var num5= 10
if(num3>num4 && num3>num5)
{
    if(num4>num5)
    {
        console.log(`second largest num3`)
        console.log(`Ascending order: ${num5},${num3},${num2}`)
    }
    else{
        console.log(`second largest num5`)
        console.log(`Ascending order: ${num3},${num5},${num4}`)
    }
}
else if(num5>num3 && num5>num4){
    if(num4>num3)
    {
        console.log(`second largest num4`)
        console.log(`Ascending order: ${num3},${num4},${num5}`)
    }
    else{
        console.log(`second largest num3`)
        console.log(`Ascending order: ${num4},${num3},${num5}`)
    }
}

