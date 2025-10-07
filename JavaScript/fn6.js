const globalVariable = "GLOBAL DATA"

const parent = ()=>{
    const parentVariable = "PARENT DATA"
    console.log(`Inside parent function, data from parent is : '${parentVariable}' and global variable is : '${globalVariable}'`);
    return ()=>{
        const childVariable = "CHILD DATA"
        console.log(`Inside child function, data from child id is : '${childVariable}', data from parent is:'${parentVariable}'`);        
    }   
}

const child = parent()
child()