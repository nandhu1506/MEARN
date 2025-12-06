import React from 'react'
import { FaArrowRight, FaInstagram } from 'react-icons/fa'
import { FaFacebookF, FaLinkedin, FaSquareXTwitter, FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <>
  <div className="w-full bg-blue-950 text-white p-5 grid md:grid-cols-3 grid-cols-1 gap-9">

    <div>
      <h1 className="m-3 font-bold text-xl">ABOUT US</h1>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium error,
        voluptates vitae facilis aperiam ducimus qui sequi facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iusto praesentium quaerat pariatur deserunt sequi, aliquam odio ab corporis porro velit totam optio provident ea facere rem soluta magni dicta!
      </p>
    </div>

    <div> 
      <h1 className="m-3 font-bold text-xl">NEWS LETTER</h1>
      <p>Stay Updated with our latest trends</p>
      <div className="flex items-center pt-6">
        <input type="email" placeholder="Email" className="bg-white text-gray-700 p-2 rounded-l w-full" />
        <button className="bg-orange-400 p-3 rounded-r"><FaArrowRight /></button>
      </div>
    </div>

    <div>
      <h1 className="m-3 font-bold text-xl">Follow US</h1>
      <p className="my-5">Let us be Social</p>
      <div className="my-5 flex gap-4 text-xl">
        <FaInstagram />
        <FaXTwitter />
        <FaFacebookF />
        <FaLinkedin />
      </div>
    </div>
  </div>
  <div className='bg-black text-center text-white p-2'>Copyright &Copyright 2025 All Rights Reserved | This Website is made with ❤️</div>

</>

  )
}

export default Footer