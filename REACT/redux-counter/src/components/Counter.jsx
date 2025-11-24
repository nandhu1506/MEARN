import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset ,incrementByAmount} from '../redux/counterSlice'


function Counter() {
    const {count} = useSelector(state=>state.counterReducer)
    const dispatch = useDispatch()
    const [amount,setAmount] = useState(0)
    const handleIncrement = ()=>{
        if(amount!="" && amount>0){
            dispatch(incrementByAmount(+amount))
        }else{
            alert("please input valid amount")
        }
    }
 
  return (
    <div className='container-fluid'>
    <h1 className='my-5'>Counter</h1>    
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <div className="border rounded p-5">
                    <h1 style={{fontSize:'100px'}} className='text-danger'>{count}</h1>
                    <div className="d-flex justify-content-evenly my-3">
                        <button onClick={()=>dispatch(decrement())} className='btn btn-warning text-light'>Decrement</button>
                        <button onClick={()=>dispatch(reset())} className='btn btn-danger text-light'>Reset</button>
                        <button onClick={()=>dispatch(increment())} className='btn btn-success text-light'>Increment</button>
                    </div>
                    <div className='d-flex justify-content-between align-items-center mt-5'>
                        <input onChange={e=>setAmount(e.target.value)} type="text" placeholder='Amount' className='form-control me-2' />
                        <button onClick={handleIncrement} className='btn btn-primary text-light'>Increment By Amount</button>
                    </div>
                </div>
            </div>
            <div className='col-md-4'></div>
        </div>
    </div>
  )
}

export default Counter