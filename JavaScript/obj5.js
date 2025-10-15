var car ={
    name:"boleno",
    model:"hatch-back",
    manufacturer:"Maruti Suzuki",
    price:"13 lakh"
}

//display car name and its manufacturer
console.log(car);
console.log(`Car Name : ${car['name']}` );
console.log(`Car Manaufacturer : ${car['manufacturer']}` );

//check 'model' key is present then display its value
console.log(`Check model is present : `);
if('model' in car){
    console.log(`Car Model : ${car.model}`);    
}else{
    console.log(`No Car model is present`);
}
//add 'varient' as automatic, manual
car.varient = "automatic"
console.log(car);

//add color as red,white,blue,ash,black
car.color = "red,white,blue,ash,black"
console.log(car);