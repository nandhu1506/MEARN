products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only    -- ForEach
console.log("Product Names : ");
products.forEach(product=>console.log(product.pName))
//2. print all mobile details whose display is lcd  -- Filter
console.log("Product Whose display is lcd : ");
products.filter(product=>product.display=="lcd").forEach(product=>console.log(`Product : ${product.pName}, Display : ${product.display}`))
//3. print 5g mobile phone name -- filter 
console.log("Product Whose Band are 5G : ");
products.filter(product=>product.band=="5g").forEach(product=>console.log(`Product : ${product.pName}, Band : ${product.band}`))
//4. Sort mobile based on price   --  sort
console.log("Sort mobile on price");
products.sort((a,b)=>a.price-b.price).forEach(product=>console.log(`Product : ${product.pName} Price : ${product.price}`))
//5. print costly mobile    -- reduce
const costly = products.reduce((a,b)=>a.price>b.price?a:b)
console.log(`Costly mobile is ${costly.pName} and its price is ${costly.price}`);
//6. print low cost mobile  -- reduce
const cheapest = products.reduce((a,b)=>a.price<b.price?a:b)
console.log(`Cheapest mobile is ${cheapest.pName} and its price is ${cheapest.price}`);