//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]

]

//1. district having Highest +ve case 
const dangerZone = covid_data.reduce((prev,curr)=>prev[2]>curr[2]?prev:curr)
console.log(`Dist having Highest covid +ve case: ${dangerZone[1]}, Count: ${dangerZone[2]}`);

//2. district having Highest 1st dose vaccine
const HighestFirstVaccine = covid_data.reduce((prev,curr)=>prev[5]>curr[5]?prev:curr)
console.log(`Dist having Highest First Vaccine: ${HighestFirstVaccine[1]}, Vaccine Count: ${HighestFirstVaccine[5]}`);

//3. district having lowest death rate
const lowestDeath = covid_data.reduce((prev,curr)=>prev[3]<curr[3]?prev:curr)
console.log(`Dist having Lowest death rate: ${lowestDeath[1]}, Death Count: ${lowestDeath[3]}`);

//4. sort data with +ve case in descending order
console.log("sort data with +ve case in descending order");

covid_data.sort((a,b)=>b[2]-a[2]).forEach(data => console.log(`District: ${data[1]}, count: ${data[2]}`));

//5. is there any district with +ve cases > 15000
console.log(`Is any dist are with +ve cases > 15000 : ${covid_data.some(data=>data[2]>15000)?'Yes': 'No'}`);

console.log(`Is all dist are with +ve cases > 15000 : ${covid_data.every(data=>data[2]>15000)?'Yes': 'No'}`);

//6. sort data with 1st dose vaccine
console.log("sort data with 1st dose vaccine");

covid_data.sort((a,b)=>a[5]-b[5]).forEach(data => console.log(`District: ${data[1]}, count: ${data[5]}`));

//7. Print Thrissur details
console.log(covid_data.find(data=>data[1]=="Thrissur"))

//8. Print total number of positive cases
const totalPositive=covid_data.map(data=>data[2]).reduce((prev,curr)=>prev+curr)
console.log(`Total Positive Cases : ${totalPositive}`);

//9. Print total number of curred cases
const curred=covid_data.map(data=>data[4]).reduce((prev,curr)=>prev+curr)
console.log(`Total Curred Cases : ${curred}`);

//10. Print curred cases in Idukki
const idukki=covid_data.find(data=>data[1]=="Idukki")
console.log(`Total Curred cases in Idukki : ${idukki[4]}`);