import React from 'react'
import { FaChartSimple } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className='bg-blue-200 md:min-h-screen h-fit  py-10'>
      {/* image */}
      <div className="flex justify-center">
        <img width={'300px'} height={'300px'} style={{borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtK24EY3iJHBUBH-nEdR_arIxx-KtOGZ0Uw&s" alt="" />
      </div>
      {/* name */}
      <h1 className="text-xl font-bold my-5 text-center">Name</h1>
      {/* Nav link */}
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="mt-3">
          <Link to={'/admin/home'} className='flex items-center'><FaChartSimple className='me-1'/>Dashboard</Link>
        </div>
        <div className="mt-3">
          <Link to={'/admin/collection'} className='flex items-center'><FaChartSimple className='me-1'/>Collections</Link>
        </div>
        <div className="mt-3">
          <Link to={'/admin/profile'} className='flex items-center'><FaChartSimple className='me-1'/>Profile</Link>
        </div>
      </div>

    </div>
  )
}

export default AdminSidebar