import React, { useContext, useEffect, useState } from 'react'
import { FaAddressCard, FaBars, FaFacebookSquare, FaInstagram, FaPowerOff, FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import serverURL from '../../services/serverURL'
import { routeGuardContext } from '../../contextAPI/AuthContext'

function Header() {
  const {role,authorisedUser,setAuthorisedUser} = useContext(routeGuardContext)
  const navigate = useNavigate()
  const  [toogle,setToogle]=useState(false)
  const [token,setToken] = useState("")
  const [dp,setDp] = useState("")
  const [dropdown,setDropdown] = useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setDp(user.picture)
    }
  },[token])

  const logout = ()=>{
    sessionStorage.clear()
    setAuthorisedUser(false)
    setToken("")
    setDp("")
    setDropdown(false)
    navigate('/')
  }

  return (
    <>
      <div className='grid grid-cols-3 p-3'>
        {/* logo */}
      <div className="flex-items-center">
        <img width={'50px'} height={'50px'} style={{borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRopmq0M3seYXU-kwJERXGFSREpHpdjXeig&s" alt="logo" />
        <h1 className="text-2xl font-bold ms-2 md:hidden">Book Store</h1>
      </div>
      {/* Title */}
      <div className='md:flex justify-center items-center'>
        <h1 className="text-3xl font-bold hidden md:block ">BOOK STORE</h1>
      </div>
      {/* Login */}
      <div className="md:flex justify-end items-center hidden">
        <FaInstagram className='me-1'/>
        <FaXTwitter className='me-1'/>
        <FaFacebookSquare className='me-1'/>
        {/* Login Link */}
        {
          !token ?
          <Link to={'/login'} className='border border-black rounded px-3 py-2 ms-3 flex items-center hover:bg-black hover:text-white'><FaUser/>Login</Link>
          :
          <div>
            <button onClick={()=>setDropdown(!dropdown)} className='rounded ms-5 p-2'>
              <img width={"40px"} height={"40px"} style={{borderRadius:'50%'}} src={dp==""?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktoi2qNZ6Vesj_zN2ooj4h2Oq2S58CzfVJQ&s":dp.startsWith("https://lh3.googleusercontent.com/")?dp:`${serverURL}/uploads/${dp}`} alt="profile" />
            </button>
            {/* dropdown menu */}
              {
                dropdown &&
               <div className='shadow rounded bg-white absolute p-2 right-0 z-10 mt-2 w-40 ring-black/5 focus:outline-hidden'>
                  {/* profile page link */}
                  <Link to={'/user/profile'} className='flex items-center text-gray-700 text-sm px-4 py-2'><FaAddressCard className='me-2'/> Profile</Link>
                  {/* logout btn */}
                  <button onClick={logout} className='flex items-center text-gray-700 text-sm px-4 py-2'><FaPowerOff className='me-2'/> Logout</button>
                </div>
              }
          </div>
        }
      </div>
      </div>
      <nav className='w-full p-3 bg-black text-white md:flex justify-center items-center '>
        {/* menu icon and login */}
        <div className="flex justify-between items-center text-2xl md:hidden">
          <button onClick={()=>setToogle(!toogle)}><FaBars/></button>
        {
          !token ?
          <Link to={'/login'} className='border border-black rounded px-3 py-2 ms-3 flex items-center hover:bg-black hover:text-white'><FaUser/>Login</Link>
          :
          <div>
            <button onClick={()=>setDropdown(!dropdown)} className=' rounded ms-5 p-2 hover:bg-gray-100'>
              <img width={"40px"} height={"40px"} style={{borderRadius:'50%'}} src={dp==""?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktoi2qNZ6Vesj_zN2ooj4h2Oq2S58CzfVJQ&s":dp.startsWith("https://lh3.googleusercontent.com/")?dp:`${serverURL}/uploads/${dp}`} alt="profile" />
            </button>
            {/* dropdown menu */}
              {
                dropdown &&
               <div className='absolute right-0 z-10 mt-2 w-40 shadow rounded bg-white ring-1 ring-black/5 p-2 focus:outline-hidden'>
                  {/* profile page link */}
                  <Link to={'/user/profile'} className='flex items-center text-gray-700 text-sm px-4 py-2'><FaAddressCard className='me-2'/> Profile</Link>
                  {/* logout btn */}
                  <button onClick={logout} className='flex items-center text-gray-700 text-sm px-4 py-2'><FaPowerOff className='me-2'/> Logout</button>
                </div>
              }
          </div>
        }
        </div>
        <ul className={toogle?'flex flex-col':'md:flex justify-center items-center hidden'}>
          <li className='md:mx-4 mt-2 md:mt-0'><Link to={'/'}>Home</Link></li>
          <li className='md:mx-4 mt-2 md:mt-0'><Link to={'/books'}>Books</Link></li>
          <li className='md:mx-4 mt-2 md:mt-0'><Link to={'/contact'}>Contact</Link></li>

        </ul>
      </nav>
    </>
  )
}

export default Header  