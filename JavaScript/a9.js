//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]

//1. display all product name
console.log('---------All product name--------');
products.forEach(item => console.log(item[1]));
console.log('-----------------');

//2. display product whose price < Rs.50
console.log('--------Display product whose price < Rs.50---------');
products.filter(item=>item[2]<50).forEach(item=>console.log(`Product: ${item[1]},Price: ${item[2]}`))
console.log('-----------------');

//3. print price of oreo
console.log('--------Print price of oreo---------');
const oreoDetails = products.find(item=>item[1]=="oreo")
console.log(`Price of Oreo: ${oreoDetails[2]}`);
console.log('-----------------');

//4. print costly product name
console.log('-------Print costly product name--------');
const costly = products.reduce((prev,curr)=>prev[2]>curr[2]?prev:curr)
console.log(`Costly product name: ${costly[1]} Price: ${costly[2]}`);
console.log('-----------------');

//5. display out of stock product
console.log('-------Out of Stock Products--------');
products.filter(item=>item[3]==0).forEach(item=>console.log(`Product: ${item[1]} Stock: ${item[3]}`))
console.log('-----------------');

//6. sort products based on stock in decsending order
console.log('sort products based on stock in decsending order');
products.sort((a,b)=>b[3]-a[3]).forEach(item=>console.log(`Product: ${item[1]},Stock: ${item[3]}`))
console.log('-----------------');

//7. print product having maximum available stock
console.log('-------Products having maximum available stock--------');
const maxAvailable = products.reduce((prev,curr)=>prev[3]>curr[3]?prev:curr)
console.log(`product having maximum available stock ${maxAvailable[1]} Stock: ${maxAvailable[3]}`);
console.log('-----------------');
//8. is there any product can be purchased by Rs. 10
console.log('-------Is there any product can be purchased by Rs. 10--------');
console.log(`Is there any product can be purchased by Rs. 10 : ${products.some(item=>item[2]<=10)?'Yes':'No'}`);
console.log('-----------------');

//9. Is there any product in the range of 10 to 30
console.log('--------Is there Product in the range of 10 to 30---------');
console.log(`Is there any product in the range of 10 to 30: ${products.some(item=>item[2]>=10&&item[2]<=30)?"Yes":"No"}`);
console.log('-----------------');

//10. print all products in the range of 10 to 30
console.log('--------Product in the range of 10 to 30---------');
console.log('print all products in the range of 10 to 30');
products.filter(item=>item[2]>=10&&item[2]<=30).forEach(item=>console.log(`Product: ${item[1]}, Price: ${item[2]}`))