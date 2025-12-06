import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FaPen } from 'react-icons/fa'

function AdminProfile() {
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className="text-center mb-10 font-bold text-3xl">Settings</h1>
          <div className="md:grid grid-cols-2 items-center gap-10">
            <div>
              <p className='text-xl'>Welcome to the Bookstore Admin Dashboard!</p>
              <p className='text-justify'> As the administrator, you have complete control over managing the bookstore’s content, users, and sales. This dashboard gives you a streamlined overview of everything happening behind the scenes.</p>
            </div>
            <div className="p-10 bg-blue-100 ">
              <div className="flex justify-center items-center my-5 flex-col">
                <label htmlFor="userProfile">
                  <input type="file" name="" id="userProfile" hidden />
                  <img className='z-52' style={{ width: '150px', height: '150px', borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtK24EY3iJHBUBH-nEdR_arIxx-KtOGZ0Uw&s" alt="" />
                  <button className="bg-blue-300 z-53 text-white py-2 px-3 rounded" style={{ marginLeft: '75px', marginTop: '-30px' }}><FaPen /></button>
                </label>
                <div className="mt-10 mb-3 w-full px-5">
                  <input placeholder='UserName' type="text" className="w-full border-gray-300 p-2 rounded border bg-white" />
                </div>
                <div className="mb-3 w-full px-5">
                  <input placeholder='New Password' type="password" className="w-full border-gray-300 p-2 rounded border bg-white" />
                </div>
                <div className="mb-3 w-full px-5">
                  <input placeholder='Confirm Password' type="password" className="w-full border-gray-300 p-2 rounded border bg-white" />
                </div>
                <div className="flex-justify-end w-full px-5">
                  <button className="bg-yellow-800 text-white px-3 py-2 rounded">Reset</button>
                  <button className="bg-green-800 ms-5 text-white px-3 py-2 rounded">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminProfile