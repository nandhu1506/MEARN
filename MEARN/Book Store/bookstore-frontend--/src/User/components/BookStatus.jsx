import React from 'react'

function BookStatus() {
    return (
        <div className='p-10 my-20 shadow rounded'>
            {/* duplicate book with status updation */}
            <div className="rounded mt-5 bg-gray-100">
                <div className="md:grid grid-cols-[3fr_1fr]">
                    <div className="px-4">
                        <div className="text-2xl">Title</div>
                        <div className="text-xl">Author</div>
                        <div className="text-lg text-blue-600">$ Price</div>
                        <div className="text-justify">Abstract</div>
                        <div className="flex mt-3">
                            <img width={'80px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OyBs0dMUFFNYS1wnrPdmdMYM8Qe6_HWJmQ&s" alt="Pending" />
                            <img width={'80px'} src="https://pngimg.com/d/approved_PNG13.png" alt="Approved" />
                            <img width={'80px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ743H2Wn7i_N-bEnepJR2B4O7cFuIn9Cw4Nw&s" alt="Sold" />
                        </div>
                    </div>
                    <div className="px-4 mt-4 md:mt-0">
                        <img src="https://m.media-amazon.com/images/I/71+2-t7M35L._AC_UF1000,1000_QL80_.jpg" alt="" className="w-full" />
                        <div className="mt-4 flex justify-end">
                            <button className="bg-red-600 text-white p-2 rounded">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookStatus