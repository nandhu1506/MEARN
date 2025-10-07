// print pattern

// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
for(let i=1;i<=4;i++){
    let rowContent= ""
    for(let j=1;j<=4;j++){
        rowContent += i+" "
    }
    console.log(rowContent)
}

// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
for(let i=1;i<=4;i++){
    let rowContent= ""
    for(let j=1;j<=4;j++){
        rowContent += j+" "
    }
    console.log(rowContent)
}

// *
// *  *
// *  *  *
// *  *  *  *

for(let i=1;i<=4;i++){
    let content=" "
    for(let j=1;j<=i;j++){
        content +=  "# "
    }
    console.log(content);
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4

for(let i=1;i<=4;i++){
    let content=""
    for(let j=1;j<=i;j++){
        content += j+" "
    }
    console.log(content);
    
}