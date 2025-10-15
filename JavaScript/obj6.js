weatherData=[
    {district:'Thrissur',temp:32},
    {district:'Kottayam',temp:29},
    {district:'Palakkad',temp:34},
    {district:'Ernakulam',temp:33},
    {district:'Thrissur',temp:29},
    {district:'Kottayam',temp:30},
    {district:'Palakkad',temp:32},
    {district:'Ernakulam',temp:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

//algorithm

// 1. create empty object output
// 2. get each item from weatherData
// 3. get district and stored its value, same as temp and stored into currTemp
// 4. check district is in output object
// 4.1.  if district is in output, then compare the temperature. get existing disting temp and compare it with currtemp, update highest temp as district value in output object
// 4.2.  if district is not in output, then insert district as key and currTemp as value
const output = {}

weatherData.forEach(districtDetails=>{
let district = districtDetails.district
let currTemp = districtDetails.temp
if(output.hasOwnProperty(district)){
    let oldTemp = output[district]
    if(currTemp>oldTemp){
        output[district] = currTemp
    }
    }else{
        output[district] = currTemp
    }
})
console.log(output);