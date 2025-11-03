import React,{useState} from 'react'

function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const showlogin = (e) =>{
        e.preventDefault()
        alert(`Username : ${username}
            Password : ${password}`)
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-4'></div>
            <div className='col-4'>
                <h1>Login</h1>
                <form className='shadow p-2 rounded'>
                    <div className='mb-3'>
                        <input onChange={e=>setUsername(e.target.value)} type="text" placeholder='Username' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <input onChange={e=>setPassword(e.target.value)} type="password" placeholder='Password' className='form-control'/>
                    </div>
                    <div className='mb-3'>
                        <button onClick={showlogin} className='btn btn-success'>Login</button>
                    </div>
                </form>
            </div>
            <div className='col-4'></div>
            </div>
        </div>
    )
}

export default Login