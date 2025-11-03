import React, { useRef } from 'react'

function Register() {
    const usernameRef = useRef()
    const handleRegister =(e)=>{
        e.preventDefault()
        alert(`Username : ${usernameRef.current.value}`)
    }
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className="col-4"></div>
            <div className="col-4">
                <form >
                    <div className="mb-3">
                        <input ref={usernameRef} type="text" placeholder='Username' className='form-control'/>
                    </div>
                    <div className="mb-3">
                        <button onClick={handleRegister} className='btn btn-success'>Register</button>
                    </div>
                </form>
            </div>
            <div className="col-4"></div>
        </div>
    </div>
  )
}

export default Register