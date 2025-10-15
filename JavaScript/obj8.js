accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts

console.log(`-----------Total Number of Accounts -----------`);
console.log(`Total number of Accounts ${accounts.length}`);

//2. print account number whose ac_type is savings

console.log(`-----------Accounts whose acc_type is savings -----------`);
accounts.filter(item=>item.ac_type=="savings").forEach(item=>console.log(`Account Number : ${item.acno}, Account type : ${item.ac_type}`))

//3.print the balance of accnount number 1000

console.log(`----------- Print the balance of account number 1000  -----------`);
console.log(`Current balance : '${accounts.find(item=>item.acno==1000).balance}'`);

//4. print all gpay transactions

console.log(`----------- Print all gpay transactions  -----------`);
console.log(accounts.map(acc=>acc.transaction).flat().filter(item=>item.mode=="gpay"));

//5. print all transaction whose amount > 5000

console.log(`----------- Print all transaction whose amount > 5000  -----------`);
console.log(accounts.map(acc=>acc.transaction).flat().filter(item=>item.amount>5000));

//6. print credit transaction of account 1002

console.log(`----------- Print credit transaction of account 1002  -----------`);
const creditTransaction1002 = accounts.map(acc=>acc.transaction).flat().filter(item=>item.to==1002)
console.log(creditTransaction1002);

//7. Total credited amount to 1002

console.log(`----------- Total credited amount to 1002 -----------`);
creditAmount1002 = creditTransaction1002.map(item=>item.amount).reduce((a,b)=>a+b)
console.log(`Total credited amount to 1002 : ${creditAmount1002}`);

//8. print debit transaction of account 1002

console.log(`----------- Print debit transaction of account 1002 -----------`);
let debitTransaction1002 = accounts.find(acc => acc.acno == 1002).transaction;
console.log(debitTransaction1002);

//9. Total. debited amount from 1002

console.log(`----------- Print debit transaction of account 1002 -----------`);
console.log(`Total debited amount from 1002 : ${debitTransaction1002.map(item=>item.amount).reduce((a,b)=>a+b)}`);

//9. print transaction history of 1002

console.log(`----------- Transaction history of 1002 -----------`);
console.log([...creditTransaction1002,...debitTransaction1002]);

//10. Print currentBalance (balance+credit amount) of 1002

console.log(`----------- Print currentBalance (balance+credit amount) of 1002 -----------`);
console.log(`currentBalance of 1002 : ${accounts.find(item=>item.acno==1002).balance+creditAmount1002}`);

//11. print highest balance account details

console.log(`----------- highest balance account details -----------`);
const highestBalanceAcc = accounts.reduce((a,b)=>(a.balance>b.balance?a:b))
console.log(highestBalanceAcc);
