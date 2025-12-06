import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function View() {

  const [modalStatus,setModalStatus] = useState(false)
  
  return (
    <>
    <Header/>
    <div className="md:m-10 m-5">
      <div className="border shadow p-5 border-gray-200">
        <div className="md:grid grid-cols-4 gap-x-10">
          <div className="col-span-1">
            <img width={'100%'} src="https://m.media-amazon.com/images/I/71+2-t7M35L._AC_UF1000,1000_QL80_.jpg" alt="" /> 
          </div>
          <div className="col-span-3">
            <div className="flex justify-between mt-5 md:mt-0">
              <h1 className="text-xl font-bold">Title</h1>
              <button onClick={()=>setModalStatus(!modalStatus)} className="text-gray-400"><FaEye/></button>
            </div>
            <h3 className="text-xl text-blue-600 my-5">Author</h3>
            <div className="md:grid grid-cols-3 gap-5 my-10">
              <p className="font-bold">Publisher :</p>
              <p className="font-bold">Language :</p>
              <p className="font-bold">No of Pages :</p>
              <p className="font-bold">Category :</p>
              <p className="font-bold">ISBN :</p>
              <p className="font-bold">Original Price :</p>
              <p className="font-bold">Seller :</p>
            </div>
            <div className="md:my-10 my-4">
              <p className="font-bold text-lg">Abstract</p>
            </div>
            <div className="flex justify-end">
              <Link to={'/books'} className='bg-blue-900 text-white p-2 rounded flex items-center'><FaBackward className='me-2'/>Back</Link>
              <button className='bg-green-900 text-white p-2 rounded ms-5'>Buy $ price</button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      {modalStatus &&
        <div className="relative z-10 overflow-y-auto " onClick={()=>setModalStatus(!modalStatus)}>
        <div className="bg-gray-500/75 fixed inset-0">
        <div className="flex justify-center items-center min-h-screen scroll">
          <div className="bg-white rounded-2xl md:w-250 w-100">
            {/* modal title */}
            <div className="bg-black text-white flex justify-between items-center p-3">
              <h3>Books Images</h3>
            </div>
            {/* modal body */}
            <div className="relative p-5">
              <p className="text-blue-600"><FaCamera className='me-2'/>Camera click of the book in the hand of seller</p>
              {/* books in rows and columns */}
              <div className="md:flex flex-wrap my-4">
            <img className='md:w-75 w-25 md:me-2 mb-3 md:mt-0' src="https://m.media-amazon.com/images/I/71+2-t7M35L._AC_UF1000,1000_QL80_.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      }
    </div>
    <Footer/>
    </>
  )
}

export default View