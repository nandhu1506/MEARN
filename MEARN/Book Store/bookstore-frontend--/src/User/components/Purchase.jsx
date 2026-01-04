import React, { useEffect, useState } from 'react'
import { getAllUserBoughtBooksAPI } from '../../services/allAPI'

function Purchase() {

    const [allBooks,setAllBooks] = useState([])

    useEffect(()=>{
            getAllUserBoughtBooks()
        },[])


    const getAllUserBoughtBooks = async () =>{
            const token = sessionStorage.getItem("token")
            if(token){
                const reqHeader = {
                    "Authorization" : `Bearer ${token}`
                }
                const result = await getAllUserBoughtBooksAPI(reqHeader)
                if(result.status==200){
                    setAllBooks(result.data)  
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
                            
                            <img width={'200px'} src="https://static.vecteezy.com/system/resources/previews/023/629/827/non_2x/web-button-icon-purchase-button-free-png.png" alt="Purchase" />
                            
                            
                        </div>
                    </div>
                    <div className="px-4 mt-4 md:mt-0">
                        <img src={book?.imageURL} alt="" className="w-full" />
                        
                    </div>
                </div>
            </div>
                ))
                :
                <p className="text-center font-bold">No Books Purchased Yet.....</p>
            }
        </div>
  )
}

export default Purchase