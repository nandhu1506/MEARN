import React, { useEffect, useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
        setCount(count+1)
    },1000)
    },[count])
  return (
    <div style={{height:'60vh'}} className='d-flex justify-content-center align-items-center -flex-column'>
        <h1>Counter</h1>
        <h1 style={{fontSize:'100px'}}>{count}</h1>
    </div>
  )
}

export default Counter