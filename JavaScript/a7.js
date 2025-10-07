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
//1. print all employee name
console.log("All Employees Name List");
// for(let empDetail of employee){
//     console.log(empDetail[1])
// }
employee.forEach(empDetails => console.log(empDetails))

//2.print total number of employee
console.log("Total numbers of employess");
console.log(employee.length)

//3. print developer employee details
console.log("Developer employee details");
// for(let empDetail of employee){
//     if(empDetail[2]=='developer'){
//     console.log(empDetail);
// }
// }
employee.filter(empDetail=>empDetail[2]=="developer").forEach(empDetail =>console.log(`Name : ${empDetail[1]}, Designation : ${empDetail[2]}`));

//4. print employee whose salary > 30000
console.log("Employees with salary >30000");
// for(let empDetail of employee){
//     if(empDetail[4]>=30000){
//     console.log(empDetail);
// }
// }
employee.filter(empDetail=>empDetail[4]>=30000).forEach(empDetail=>console.log(`Name : ${empDetail[1]}, Designation : ${empDetail[2]}, Salary : ${empDetail[4]}`))

//5. print details of employee Laisha
console.log("Details of employee Laisha");
const empDetail=employee.find(empDetail=>empDetail[1]=="Lisha")
console.log(`Name : ${empDetail[1]}
             Designation : ${empDetail[2]}
             Location : ${empDetail[3]}
             Salary : ${empDetail[4]}
             Expirence : ${empDetail[5]} years `);
// for(let empDetail of employee){
//     if(empDetail[1]=="Laisha"){
//     console.log(empDetail);
// }
// }
//6. Sort employee based on their salary in descending order
console.log("Employees sorted by salary decending");
employee.sort((a,b)=>b[4]-a[4]).forEach(empDetail => console.log(empDetail))
// for(let empDetails of employee){
//     console.log(empDetails);
// }


//7. Sort employee based on their experience in ascending order
console.log("Employees sorted by experience ascending");
employee.sort((a,b)=>a[5]-b[5]).forEach(empDetail => console.log(empDetail))
// for(let empDetails of employee){
//     console.log(empDetails);
// }