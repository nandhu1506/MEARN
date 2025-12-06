import React, { useState } from 'react'
import { FaBars, FaFacebookSquare, FaInstagram, FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Header() {
  const  [toogle,setToogle]=useState(false)


  return (
    <>
      <div className='grid grid-cols-3 p-3'>
        {/* logo */}
      <div className="flex-items-center">
        <img width={'50px'} height={'50px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRopmq0M3seYXU-kwJERXGFSREpHpdjXeig&s" alt="logo" />
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
        <Link to={'/login'} className='border border-black rounded px-3 py-2 ms-3 flex items-center hover:bg-black hover:text-white'><FaUser/>Login</Link>
      </div>
      </div>
      <nav className='w-full p-3 bg-black text-white md:flex justify-center items-center '>
        {/* menu icon and login */}
        <div className="flex justify-between items-center text-2xl md:hidden">
          <button onClick={()=>setToogle(!toogle)}><FaBars/></button>
        <Link to={'/login'} className='border border-black rounded px-3 py-2 ms-3 flex items-center hover:bg-black hover:text-white'><FaUser className='me-1'/>Login</Link>
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