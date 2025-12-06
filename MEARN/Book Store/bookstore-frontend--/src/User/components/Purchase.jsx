import React from 'react'

function Purchase() {
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
                            <img width={'200px'} src="https://static.vecteezy.com/system/resources/previews/023/629/827/non_2x/web-button-icon-purchase-button-free-png.png" alt="Purchase" />
                        </div>
                    </div>
                    <div className="px-4 mt-4 md:mt-0">
                        <img src="https://m.media-amazon.com/images/I/71+2-t7M35L._AC_UF1000,1000_QL80_.jpg" alt="" className="w-full" />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Purchase