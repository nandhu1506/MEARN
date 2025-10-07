// print pattern

// 1
// 2    3
// 4    5   6
// 7    8   9   10
let x = 1
for(let i=1;i<=4;i++){
    let content=""
    
    for(let j=1;j<=i;j++){
       content+= x+" "
       x++
    }
       console.log(content) 
}

//print pattern
// *    *   *   *   *   *
// *                    *
// *                    *
// *                    *
// *    *   *   *   *   *

for(let i=1;i<=5;i++){
    let content=""
    for(let j=1;j<=6;j++){
        if(i==1||j==1||j==6||i==5){
        content+="* "
        }else{
            content+="  "
        }
    }
    console.log(content);    
}
