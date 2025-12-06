import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Books() {
  const [toogle,setToogle] = useState('false')
  return (
    <>
    <Header/>
    <>
    <div className="flex flex-col justify-center items-center my-5">
      <h1 className="text-3xl font-bold my-5">All Books</h1>
      <div className="flex my-5">
        <input placeholder='Search By Book Title' type="text" className="p-2 border border-gray-200 text-black w-100 placeholder-gray-600" />
        <button className="p-2 bg-blue-900 text-white">Search</button>
      </div>
    </div>
    {/* Books Card and Filter */}
    <div className="md:grid grid-cols-4 p5 md:px-20 mb-10">
      {/* Filter */}
      <div className="col-span-1">
       <div className='flex justify-between'>
         <h1 className="font-bold text-2xl">Filter</h1>
         <button onClick={()=>setToogle(!toogle)} className='font-bold text-2xl md:hidden'><FaBars/></button>
       </div>
       {/* List Filters */}
       <div className={toogle?"block":"md:block hidden"}>
        {/* duplicate Filter Item */}
        <div className="mt-3">
          <input type="radio" name="filter" id="key1" />
          <label className='ms-3' htmlFor="key1" >Category Name</label>
        </div>
        <div className="mt-3">
          <input type="radio" name="filter" id="key1" />
          <label className='ms-3' htmlFor="nofilter" >No Filter</label>
        </div>
       </div>
      </div>
      {/* Book Card */}
      <div className="col-span-3">
        <div className="md:grid grid-cols-4 mt-5 md:mt-0">
          {/* duplicate Books */}
          <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://m.media-amazon.com/images/I/71+2-t7M35L._AC_UF1000,1000_QL80_.jpg" alt="" />
            <div className="flex flex-col justify-center items-center mt-4">
              <h3 className="font-bold text-blue-700 text-xl">Author</h3>
              <p>title</p>
              <Link to={'/books/:id/view'} className='bg-blue-800 p-3 text-white'>View Book</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    <Footer/>
    </>
  )
}

export default Books