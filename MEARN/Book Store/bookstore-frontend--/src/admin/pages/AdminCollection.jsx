import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'

function AdminCollection() {
  const [tab,setTab] = useState(1)
  return (
    <>
    <AdminHeader/>
    <div className="md:grid grid-cols-5">
      <div className="col-span-1">
        <AdminSidebar/>
      </div>
      <div className="col-span-4">
        <h1 className="text-center my-5 font-bold text-3xl">All Resources</h1>
        <div className="flex justify-center mb-5 text-xl font-semibold">
          <p onClick={()=>setTab(1)} className={tab==1?"text-blue-600 border-gray-300 p-2 border-t border-l border-r cursor-pointer":'border-gray-300 border-b p-2'}>Books</p>
          <p onClick={()=>setTab(2)} className={tab==2?"text-blue-600 border-gray-300 p-2 border-t border-l border-r cursor-pointer":'border-gray-300 border-b p-2'}>Users</p>
        </div>
          {
            tab==1 &&
            <div className='md:grid grid-cols-4 w-full my-5'>
              {/* duplicate book card */}
              <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://m.media-amazon.com/images/I/71+2-t7M35L._AC_UF1000,1000_QL80_.jpg" alt="" />
            <div className="flex flex-col justify-center items-center mt-4">
              <h3 className="font-bold text-blue-700 text-xl">Author</h3>
              <p>title</p>
              <p>$ Price</p>
              <button className="bg-green-600 text-white p-2 mt-2 w-full">Approve</button>
            </div>
          </div>
          
            </div>
          }
          {
            tab==2 &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicate user card */}
              <div className="rounded bg-gray-200 p-2 m-2">
                <p className="text-red-600 font-bold text-md">ID : </p>
                <div className="flex items-center mt-3">
                  <img width={'150px'} height={'150px'} style={{borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtK24EY3iJHBUBH-nEdR_arIxx-KtOGZ0Uw&s" alt="" />
                  <div className="flex flex-col ml-3 w-full">
                    <h4 className="text-blue-600 font-bold">UserName</h4>
                    <p>email</p>
                  </div>
                </div>
              </div>
            </div>
          }
      </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default AdminCollection