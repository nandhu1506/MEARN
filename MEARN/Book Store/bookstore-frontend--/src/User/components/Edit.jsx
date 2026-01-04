import React, { use, useEffect, useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import serverURL from '../../services/serverURL'
import { toast, ToastContainer } from 'react-toastify'
import { editUserAPI } from '../../services/allAPI'
import { useNavigate } from 'react-router-dom'

function Edit() {

    const [offCanvasStatus,setOffCanvasStatus] = useState(false)
    const [userDetailes,setUserDetailes] = useState({
        username:"",password:"",cpassword:"",picture:"",role:"",bio:"",id:""
    })
    const [existingUserImg,setexistingUserImg] = useState("")
    const [preview,setPreview] = useState("")
    const [pswdMatch,setPswdMatch] = useState(true)
    const navigate = useNavigate()

    // console.log(userDetailes); 

    useEffect(()=>{
        if(sessionStorage.getItem("user")){
            const user = JSON.parse(sessionStorage.getItem("user"))
            setUserDetailes({...userDetailes,username:user.username,role:user.role,bio:user.bio,id:user._id})
            setexistingUserImg(user.picture)
            }
    },[])

    const handlePictureUpdate = (e)=>{
        setUserDetailes({...userDetailes,picture:e.target.files[0]})
        const url = URL.createObjectURL(e.target.files[0])
        setPreview(url)
    }

    const handleResetForm = ()=>{
        const user = JSON.parse(sessionStorage.getItem("user"))
        setUserDetailes({username:user.username,role:user.role,bio:user.bio,password:"",cpassword:""})
        setexistingUserImg(user.picture)
        setPreview("")
    }

    const checkPasswordMatch = (data)=>{
        setUserDetailes({...userDetailes,cpassword:data})
        userDetailes.password == data ? setPswdMatch(true) : setPswdMatch(false)
    }

    const handleUpdateUser = async ()=>{
        const {username,password,cpassword,bio,id,picture} = userDetailes
        if(!username || !password || !cpassword || !bio){
            toast.info("Please Fill The Form Completely")
        }else if(pswdMatch){
            const token = sessionStorage.getItem("token")
            if(token){
                const reqHeader = {
                "Authorization":`Bearer ${token}`
                }
                const reqBody = new FormData()
                for(let key in userDetailes){
                    if(key != "picture"){
                        reqBody.append(key,userDetailes[key])
                    }else{
                    preview ? reqBody.append("picture",picture) : reqBody.append("picture",existingUserImg)
                    }
                }
            // api call

            const result = await editUserAPI(id,reqBody,reqHeader)
            if(result.status==200){
                toast.success("Profile Updated Successfully")
                setTimeout(() => {
                    sessionStorage.clear()
                    navigate('/login')
                }, 2000);
            }else{
                console.log(error);
                toast.error("Somthing went wrong")
            }
            }
        }else{
            toast.error("Operation Failed!!! Password MisMatch")
        }
    }

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
                    <input onChange={e=>handlePictureUpdate(e)} type="file" name="" id="userProfile" hidden/>
                    {
                        existingUserImg==""?
                        <img className='z-52' style={{width:'150px',height:'150px',borderRadius:'50%'}} src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktoi2qNZ6Vesj_zN2ooj4h2Oq2S58CzfVJQ&s" }alt="profile" />
                        :
                        existingUserImg.startsWith("https://lh3.googleusercontent.com/")? 
 
                        <img className='z-52' style={{width:'150px',height:'150px',borderRadius:'50%'}} src={preview?preview:existingUserImg} alt="profile" />

                        :
                        <img className='z-52' style={{width:'150px',height:'150px',borderRadius:'50%'}} src={preview?preview:`${serverURL}/uploads/${existingUserImg}`} alt="profile" />
                    }
                    <button className="bg-blue-300 z-53 fixed text-white py-2 px-3 rounded" style={{marginLeft:'75px',marginTop:'-30px'}}><FaPen/></button>
                </label>
                <div className="mt-10 mb-3 w-full px-5">
                    <input value={userDetailes.username} onChange={e=>setUserDetailes({...userDetailes,username:e.target.value})} placeholder='UserName' type="text" className="w-full border-gray-300 p-2 rounded border" />
                </div>
                <div className="mb-3 w-full px-5">
                    <input value={userDetailes.password} onChange={e=>setUserDetailes({...userDetailes,password:e.target.value})}  placeholder='New Password' type="password" className="w-full border-gray-300 p-2 rounded border" />
                </div>
                <div className="mb-3 w-full px-5">
                    <input value={userDetailes.cpassword} onChange={e=>checkPasswordMatch(e.target.value)}  placeholder='Confirm Password' type="password" className="w-full border-gray-300 p-2 rounded border" />
                </div>
                {!pswdMatch && <div className="text-red-600 mb-3 w-full px-5 text-xs font-bold">
                    Confirm Password must be match with new password
                </div>}
                <div className="mb-3 w-full px-5">
                    <textarea value={userDetailes.bio} onChange={e=>setUserDetailes({...userDetailes,bio:e.target.value})}  placeholder='Bio' type="text" className="w-full border-gray-300 p-2 rounded border" />
                </div>
                <div className="flex-justify-end w-full px-5">
                    <button onClick={handleResetForm} className="bg-yellow-800 text-white px-3 py-2 rounded">Reset</button>
                    <button onClick={handleUpdateUser} className="bg-green-800 ms-5 text-white px-3 py-2 rounded">Update</button>
                </div>
            </div>
        </div> 
        </>
        }
      <ToastContainer position='top-center' autoClose={3000} theme='colored' />
    </div>
  )
}

export default Edit