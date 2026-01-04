import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routeGuardContext } from '../contextAPI/AuthContext'

function Pnf() {

  const {role,authorisedUser,setAuthorisedUser} = useContext(routeGuardContext)
  const navigate = useNavigate()

  const backHome = () => {
    if(role=="user"){
      navigate('/')
    }else{
      navigate('/admin/home')
    }
  }

  return (
    <div className='bg-[url(https://www.shutterstock.com/shutterstock/videos/3930930149/thumb/1.jpg?ip=x480)] bg-center bg-cover items-center justify-center flex' style={{height:'100vh'}}>
      <button onClick={backHome} className='bg-green-500 p-4 rounded-4xl mt-100 w-100 text-center'>Go Home</button>
    </div>
  )
}

export default Pnf