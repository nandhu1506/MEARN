import React from 'react'
import { FaFacebookSquare, FaInstagram, FaUser } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      {/* logo */}
      <div className="flex-items-center">
        <img width={'50px'} height={'50px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRopmq0M3seYXU-kwJERXGFSREpHpdjXeig&s" alt="logo" />
        <h1 className="text-2xl font-bold ms-2 md:hidden">Book Store</h1>
      </div>
      {/* Title */}
      <div className='md:flex justify-center items-center'>
        <h1 className="text-3xl font-bold  ">BOOK STORE</h1>
      </div>
      {/* Login */}
      <div className="md:flex justify-end items-center hidden">
        <FaInstagram className='me-1'/>
        <FaXTwitter className='me-1'/>
        <FaFacebookSquare className='me-1'/>
        <Link to={'/login'} className='border border-black rounded px-3 py-2 ms-3 flex items-center hover:bg-black hover:text-white'><FaUser/>Login</Link>
      </div>
    </>
  )
}

export default Header  