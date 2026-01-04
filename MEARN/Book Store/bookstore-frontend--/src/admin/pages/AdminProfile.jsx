import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FaPen } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { editUserAPI } from '../../services/allAPI'
import serverURL from '../../services/serverURL'

function AdminProfile() {

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
        setUserDetailes({username:user.username,role:user.role,bio:user.bio,password:"" ,cpassword:"",id:user._id})
        setexistingUserImg(user.picture)
        setPreview("")
        setPswdMatch(true)
    }

    const checkPasswordMatch = (data)=>{
        setUserDetailes({...userDetailes,cpassword:data})
        userDetailes.password == data ? setPswdMatch(true) : setPswdMatch(false)
    }

    const handleUpdateUser = async ()=>{
        const {username,password,cpassword,bio,id,picture} = userDetailes
        if(!username || !password || !cpassword){
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
                    preview ? reqBody.append("picture",userDetailes.picture) : reqBody.append("picture",existingUserImg)
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
                    <button className="bg-blue-300 z-53 text-white py-2 px-3 rounded" style={{marginLeft:'75px',marginTop:'-45px'}}><FaPen/></button>
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
                <div className="flex-justify-end w-full px-5">
                  <button onClick={handleResetForm} className="bg-yellow-800 text-white px-3 py-2 rounded">Reset</button>
                  <button onClick={handleUpdateUser} className="bg-green-800 ms-5 text-white px-3 py-2 rounded">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      <ToastContainer position='top-center' autoClose={3000} theme='colored' />

      </div>
      <Footer />
    </>
  )
}

export default AdminProfile