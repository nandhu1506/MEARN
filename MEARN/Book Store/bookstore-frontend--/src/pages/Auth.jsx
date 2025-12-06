import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

function Auth({registerURL}) {
  
  const [invalidUsername,setinvalidUsername] = useState(false)
  const [invalidEmail,setinvalidEmail] = useState(false)
  const [invalidPassword,setinvalidPassword] = useState(false)

  const [viewPassword,setViewPassword] = useState(false)
  const [userDetailes,setUserDetailes]= useState({
    username:"", email:"", password:""
  })

  // Function for validation
  const validateInputs = (inputTag)=>{
    // console.log(inputTag);
    const {name,value} = inputTag
    // console.log(name,value);
    if(name=="username"){
      setUserDetailes({...userDetailes,username:value})
      if(!!value.match(/^[a-zA-Z0-9]{3,16}$/)){
        setinvalidUsername(false)
      }else{
        setinvalidUsername(true)
      }
    }
    if(name=="email"){
      setUserDetailes({...userDetailes,email:value})
      if(!!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        setinvalidEmail(false) 
      }else{
        setinvalidEmail(true)
      }
    }
    if( name=="password"){
      setUserDetailes({...userDetailes,password:value})
      if(!!value.match(/^.{6,}$/)){
        setinvalidPassword(false)
      }else{
        setinvalidPassword(true)
      }
    }
  }
  const handleRegister =(e)=>{
    e.preventDefault()
    const{username,email,password} = userDetailes
    if(username && email && password){
    alert("api Call")
    }else{
    return toast.warning("Please complete the form")
    }
  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(https://thumbs.dreamstime.com/b/books-table-library-bookstore-blur-background-books-table-library-bookstore-blur-background-279011960.jpg)] bg-cover bg-center text-white)] bg-cover bg-center text-white'>
      <div className="p-10">
        <h1 className="text-center font-bold text-3xl">Book Store</h1>
        <div style={{width:'400px'}} className="bg-black text-white p-5 flex flex-col my-5 justify-center items-center">
          {/* Userlogo */}
          <div style={{width:'100px', height:'100px', borderRadius:'50%'}} className="border rounded mb-5 flex justify-center items-center ">
            <FaUser/>
          </div>
          {/* Form Title */}
          <h1 className="text-2xl">{registerURL?"Register":"LogIn"}</h1>
          {/* Form */}
          <form className="my-5 w-full" onSubmit={handleRegister} >
            {/* Username - Register */}
            {registerURL&&
            <>
            <input onChange={(e)=>validateInputs(e.target)} name='username' type="text" placeholder='UserName' className="bg-white p-3 w-full rounded my-5 text-black" />
            {invalidUsername && <div className='text-yellow-500 mb-5'>Invalid Username</div>}
            </>
            }
            {/* Email */}
            <input onChange={(e)=>validateInputs(e.target)} name='email' type="text" placeholder='Email' className="bg-white p-3 w-full rounded my-5 text-black" />
            {invalidEmail && <div className='text-yellow-500 mb-5'>Invalid Email</div>}

            {/* Password */}
            <div className="flex items-center">
              <input onChange={(e)=>validateInputs(e.target)} name='password' type={viewPassword?"text":"password"} placeholder='Password' className="bg-white p-2 w-full rounded mb-5 text-black" />
              {viewPassword?
              <FaEyeSlash onClick={()=>setViewPassword(!viewPassword)}  className='text-gray-400' style={{marginLeft:'-30px', marginTop:'-20px'}}/>
              :
              <FaEye onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400' style={{marginLeft:'-30px', marginTop:'-20px'}}/>}
            </div>
            {invalidPassword && <div className='text-yellow-500 mb-5'>Invalid Password</div>}

            {/* Forgot Password */}
            { 
            !registerURL&&
            <div className="flex justify-between mb-5">
              <p className='text-xs text-orange-300'>Never Share Your PASSWORD with others</p>
              <button className='text-xs underline'>Forget Password</button>
            </div>
            }
            {/* btn reg/login */}
            <div className="text-center">
              {
                registerURL?
                <button disabled={invalidEmail || invalidUsername || invalidPassword} className="bg-green-700 p-2 w-full rounded">Register</button>
                :
                <button disabled={invalidEmail || invalidUsername || invalidPassword} className="bg-green-700 p-2 w-full rounded">LogIn</button>
              }
            {/* Google Authentication */}

            <div className="my-5 text-center">
              {
                registerURL?
                <p className="text-blue">Already a user? <Link to={'/login'} className='underline ms-3'>Login</Link></p>
                :
                <p className="text-blue">New user? <Link to={'/register'} className='underline ms-3'>Register</Link></p>
              }
            </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer position='top-center' autoClose={3000} theme='colored' />
    </div>  
  )
}

export default Auth