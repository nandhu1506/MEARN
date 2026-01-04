import React, { useContext } from 'react'
import { FaPowerOff } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { routeGuardContext } from '../../contextAPI/AuthContext'

function AdminHeader() {
  
  const {role,authorisedUser,setAuthorisedUser} = useContext(routeGuardContext)
  const navigate = useNavigate()
  const logout = ()=>{
    sessionStorage.clear()
    setAuthorisedUser(false)
    navigate('/')
  }

  return (
   <>
   <div className="flex justify-between items-center p-3 md:px-20">
    {/* logo */}
   <div className="flex items-center">
        <img width={'50px'} height={'50px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRopmq0M3seYXU-kwJERXGFSREpHpdjXeig&s" alt="logo" />
        
      <h1 className="text-2xl font-bold ms-2 ">Book Store</h1>
      </div>
      {/* Logout */}
      <button onClick={logout} className='bg-black px-3 py-2 rounded text-white hover-border hover:text-black hover:bg-white flex items-center'>LogOut<FaPowerOff className='me-2'/></button>
      {/* marque */}
      
   </div>
   <div className="w-full p-3 bg-black text-white">
        <marquee >Welcome Admin, You are all set to manage and monitor the system. Let's get into work!!! </marquee>
      </div>
   </>
  )
}

export default AdminHeader