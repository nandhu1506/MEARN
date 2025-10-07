// const add=(a,b,c,d)=>{
//     return a+b+c+d
// }

//currying function
const add = (a)=>{
     return b=>{
        return c=>{
            return d=>{
                return d+c+b+a
            }
        }
    }
}

console.log(`result = ${add(10)(20)(30)(40)}`);