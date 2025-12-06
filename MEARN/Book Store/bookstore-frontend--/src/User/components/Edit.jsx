import React, { use, useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {

    const [offCanvasStatus,setOffCanvasStatus] = useState(false)

  return (
    <div>
        <button onClick={()=>setOffCanvasStatus(true)} className="text-blue-600 border rounded border-blue-600 p-3 flex item-center hover:bg-blue-600 hover:text-white"><FaEdit className='me-2'/>Edit</button>

        {/* off Canvas */}
        {
            offCanvasStatus &&
            <>
            <div className="fixed inset-0 bg-gray-500/75 w-full h-full"></div>
        <div className="bg-white h-full w-90 z-50 fixed top-0 left-0">
            {/* Head */}
            <div className="bg-black text-white flex px-3 py-4 justify-between text-2xl">
                <h1>Update User Profile</h1>
                <FaX onClick={()=>setOffCanvasStatus(false)}/>
            </div>
            {/* Body */}
            <div className="flex justify-center items-center my-5 flex-col">
                <label htmlFor="userProfile">
                    <input type="file" name="" id="userProfile" hidden/>
                    <img className='z-52' style={{width:'150px',height:'150px',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtK24EY3iJHBUBH-nEdR_arIxx-KtOGZ0Uw&s" alt="" />
                    <button className="bg-blue-300 z-53 fixed text-white py-2 px-3 rounded" style={{marginLeft:'75px',marginTop:'-30px'}}><FaPen/></button>
                </label>
                <div className="mt-10 mb-3 w-full px-5">
                    <input placeholder='UserName' type="text" className="w-full border-gray-300 p-2 rounded border" />
                </div>
                <div className="mb-3 w-full px-5">
                    <input placeholder='New Password' type="password" className="w-full border-gray-300 p-2 rounded border" />
                </div>
                <div className="mb-3 w-full px-5">
                    <input placeholder='Confirm Password' type="password" className="w-full border-gray-300 p-2 rounded border" />
                </div>
                <div className="mb-3 w-full px-5">
                    <textarea placeholder='Bio' type="text" className="w-full border-gray-300 p-2 rounded border" />
                </div>
                <div className="flex-justify-end w-full px-5">
                    <button className="bg-yellow-800 text-white px-3 py-2 rounded">Reset</button>
                    <button className="bg-green-800 ms-5 text-white px-3 py-2 rounded">Update</button>
                </div>
            </div>
        </div>
        </>
        }
    </div>
  )
}

export default Edit