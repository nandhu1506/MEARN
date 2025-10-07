//[ id,name,designation,location,salary,experience]
employee = [
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',15000,2],
    [1002,'Maxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]
//employee with highest salary
const highestSalaryEmp = employee.reduce((prev,curr)=>prev[4]>curr[4]?prev:curr)
console.log(`Highest Salaried Employee : ${highestSalaryEmp[1]} and Salary : ${highestSalaryEmp[4]}`);

//employee with least salary
const leastSalaryEmp = employee.reduce((prev,curr)=>prev[4]<curr[4]?prev:curr)
console.log(`Least Salaried Employee : ${leastSalaryEmp[1]} and Salary : ${leastSalaryEmp[4]}`);
const leastFirstSalaryEmp=employee.reduceRight((prev,curr)=>prev[4]<curr[4]?prev:curr)
console.log(`First Least Salaried Employee : ${leastFirstSalaryEmp[1]} and Salary : ${leastFirstSalaryEmp[4]}`);

// Total Salary
const totalSalary=employee.map(emp=>emp[4]).reduce((prev,curr)=>prev+curr)
console.log(`All employees total salary : ${totalSalary}`);
