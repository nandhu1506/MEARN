import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { getAllAdminBooksAPI, getAllUsersAPI, updateBookStatusAPI } from '../../services/allAPI'
import serverURL from '../../services/serverURL'
import { toast, ToastContainer } from 'react-toastify'

function AdminCollection() {
  const [tab,setTab] = useState(1)
  const [allBooks,setAllBooks] = useState([])
  const [allUsers,setAllUsers] = useState([])

  // console.log(allBooks);
  // console.log(allUsers);

  useEffect(()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      if(tab==1){
      getAllBooks(token)
    }else {
      getAllUsers(token)
    }
  }
  },[tab])

  const getAllBooks = async (token)=>{
    const reqHeader = {
     "Authorization":`Bearer ${token}`
    }
    const result = await getAllAdminBooksAPI(reqHeader)
    if(result.status==200){
      setAllBooks(result.data)
    }else{
      console.log(result); 
    }
  }

   const getAllUsers = async (token)=>{
    const reqHeader = {
     "Authorization":`Bearer ${token}`
    }
    const result = await getAllUsersAPI(reqHeader)
    if(result.status==200){
      setAllUsers(result.data)
    }else{
      console.log(result); 
    }
  }

  const updateBookStatus = async (bookId)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
     "Authorization":`Bearer ${token}`
    }
    const result = await updateBookStatusAPI(bookId,reqHeader)
    if(result.status==200){
      toast.success("Book Approved")
      getAllBooks(token)
    }else{
      console.log(result);      
    }
    }
  }


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
              {
                allBooks?.length>0 ?
                allBooks?.map(book=>(
                  <div key={book?._id} className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src={book?.imageURL} alt="" />
            <div className="flex flex-col justify-center items-center mt-4">
              <h3 className="font-bold text-blue-700 text-xl">{book?.author}</h3>
              <p>{book?.title}</p>
              <p>$ {book?.discountPrice}</p>
              {
                book?.status!="approved"?
                <button onClick={()=>{updateBookStatus(book?._id)}} className="bg-green-600 text-white p-2 mt-2 w-full">Approve</button>
                :
                <img className='mt-2' width={"50px"} src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-green-check-mark-icon-flat-style-png-image_5253210.jpg" alt="approved" />
              }
            </div>
          </div>
                ))
                :
                <p>Loading...</p>
              }
          
            </div>
          }
          {
            tab==2 &&
            <div className='md:grid grid-cols-3 w-full my-5'>
              {/* duplicate user card */}
              {
                allUsers?.length>0?
                allUsers?.map(user=>(
                  <div key={user?._id} className="rounded bg-gray-200 p-2 m-2">
                <p className="text-red-600 font-bold text-md">ID : {user?._id}</p>
                <div className="flex items-center mt-3">
                  {
                    user?.picture?
                    <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src={user?.picture.startsWith("https://lh3.googleusercontent.com/")?user.picture:`${serverURL}/uploads/${user?.picture}`} alt="" /> 
                    :
                    <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTktoi2qNZ6Vesj_zN2ooj4h2Oq2S58CzfVJQ&s" alt="" />
                  }
                  <div className="flex flex-col ml-3 w-full ">
                    <h4 className="text-blue-600 font-bold">{user?.username}</h4>
                    <p className='break-all'>{user?.email}</p>
                  </div>
                </div>
              </div>
                ))
                :
                <p>Loading...</p>
              }
            </div>
          }
      <ToastContainer position='top-center' autoClose={3000} theme='colored' />

      </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default AdminCollection