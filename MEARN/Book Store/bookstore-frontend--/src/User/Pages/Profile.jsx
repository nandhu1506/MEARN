import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import SellBooks from '../components/SellBooks'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'

function PROFILE() {

  const [tabNo,setTabNo] = useState(1)

  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className='bg-black'></div>
      <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }} className='bg-white p-3'>
        <img width={'200px'} height={'200px'} style={{ borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtK24EY3iJHBUBH-nEdR_arIxx-KtOGZ0Uw&s" alt="" />
      </div>
      <div className="md:flex justify-between px-20 mt-5">
        <div className="flex items-center">
          <h1 className="font-bold md:text-3xl text-2xl">Username</h1>
          <FaCircleCheck className='text-blue-400 ms-3' />
        </div>
        <Edit/>
      </div>
      <p className="text-justify md:px-20 px-5 my-5">
        Welcome to your Bookstore Profile!
        Here, you can track your favourite books, manage your orders, create wishlists, and discover new reads curated just for you. Our goal is to make your reading journey smooth, enjoyable, and personalized. Happy reading!
      </p>
      <div className="md:px-40">
        {/* tabs */}
        <div className="flex justify-center items-center my-8 font-medium text-lg">
          <p onClick={()=>setTabNo(1)} className={tabNo==1?'border-l border-t border-r p-5 border-gray-200 rounded cursor-pointer':'border-b p-5 border-gray-200 rounded cursor-pointer'}>Sell Books</p>
          <p onClick={()=>setTabNo(2)} className={tabNo==2?'border-l border-t border-r p-5 border-gray-200 rounded cursor-pointer':'border-b p-5 border-gray-200 rounded cursor-pointer'}>Book Status</p>
          <p onClick={()=>setTabNo(3)} className={tabNo==3?'border-l border-t border-r p-5 border-gray-200 rounded cursor-pointer':'border-b p-5 border-gray-200 rounded cursor-pointer'}>Purchase Books</p>
        </div>
        {/* contsents */}
        { tabNo==1&&
          <div><SellBooks/></div>
        }
        { tabNo==2&&
          <div><BookStatus/></div>
        }
        { tabNo==3&&
          <div><Purchase/></div>
        }
      </div>
      <Footer />
    </>
  )
}

export default PROFILE