import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'


function PaymentFailure() {
  return (
    <>
    <Header/>
      <div className="container min-h-screen flex justify-center items-center"> 
        <div className="md:grid grid-cols-2 px-20 justify-center items-center my-10">
          <div>
            <h1 className="text-red-500 md:text-4xl">Sorry!!! Your Payment Failed!!!</h1>
            <p className='text-2xl my-10'>We Appologize for the Inconvenience</p>
            <Link to={'/books'} className='flex items-center justify-center bg-red-600 h-13 w-70 p-2 text-white font-bold'> <FaBackward className='me-2' /> Explore More BOOKS!!!</Link>
          </div>
          <div className="flex justify-center items-center">
            <img src="https://cdn.dribbble.com/userupload/22223082/file/original-a9d418cd241698b277044219b7471004.gif" alt="Payment Failed" />
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default PaymentFailure