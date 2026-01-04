import React, { useEffect, useState } from 'react'
import { deleteBookAPI, getAllUserProfileBooksAPI } from '../../services/allAPI';


function BookStatus() {
    const [allBooks,setAllBooks] = useState([]) 
    
    console.log(allBooks);

    useEffect(()=>{
        getAllUserProfileBooks()
    },[])

    const getAllUserProfileBooks = async () =>{
        const token = sessionStorage.getItem("token")
        if(token){
            const reqHeader = {
                "Authorization" : `Bearer ${token}`
            }
            const result = await getAllUserProfileBooksAPI(reqHeader)
            if(result.status==200){
                setAllBooks(result.data)  
            }else{
                console.log(result);
            }
        }
    }

    const removeBook = async (id)=>{
        const token = sessionStorage.getItem("token")
        if(token){
            const reqHeader = {
                "Authorization" : `Bearer ${token}`
            }
            const result = await deleteBookAPI(id,reqHeader)
            if(result.status==200){
                getAllUserProfileBooks() 
            }else{
                console.log(result);
            }
        }
    }

    return (
        <div className='p-10 my-20 shadow rounded'>
            {/* duplicate book with status updation */}
            {
                allBooks?.length>0?
                allBooks.map(book=>(
                    <div key={book?._id} className="rounded mt-5 bg-gray-100">
                <div className="md:grid grid-cols-[3fr_1fr]">
                    <div className="px-4">
                        <div className="text-2xl">{book?.title}</div>
                        <div className="text-xl">{book?.author}</div>
                        <div className="text-lg text-blue-600">$ {book?.discountPrice}</div>
                        <div className="text-justify">{book?.abstract}</div>
                        <div className="flex mt-3">
                            
                            
                            
                            {
                                book?.status=="pending"?
                                <img width={'80px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OyBs0dMUFFNYS1wnrPdmdMYM8Qe6_HWJmQ&s" alt="Pending" />
                                :book?.status=="approved"?
                                <img width={'80px'} src="https://pngimg.com/d/approved_PNG13.png" alt="Approved" />
                                :
                                <img width={'80px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ743H2Wn7i_N-bEnepJR2B4O7cFuIn9Cw4Nw&s" alt="Sold" />
                            }
                        </div>
                    </div>
                    <div className="px-4 mt-4 md:mt-0">
                        <img src={book?.imageURL} alt="" className="w-full" />
                        <div className="mt-4 flex justify-end">
                            <button onClick={()=>{removeBook(book?._id)}} className="bg-red-600 text-white p-2 rounded">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
                ))
                :
                <p className="text-center font-bold">No Books Added Yet.....</p>
            }
        </div>
    )
}

export default BookStatus