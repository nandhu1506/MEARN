const employe = {
    empId:1000,
    empName:'Neel',
    empDesg:'developer'
}
console.log(employe);
console.log(`Employee Name : ${employe['empName']}` );
console.log(`Insert salary`);
employe.empSalary=30000
console.log(employe);
console.log(`Increment employee salary by 5000`);
employe.empSalary += 5000
console.log(employe);
console.log(`Check empLocation is in employee : `);
if('empLocation' in employe){
    console.log(`Employee Location : ${employe.empLocation}`);    
}else{
    employe.empLocation="Kochi"
    console.log(employe);
}
console.log(`Check id is available for employee : ${employe.hasOwnProperty('empId')&&employe.empId}`);
console.log("Display all keys in employee object :"+ Object.keys(employe));
console.log("Display all values in employee object"+ Object.values(employe));

for(let key in employe){
    console.log(`${key} : ${employe[key]}`);

}