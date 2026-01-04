import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6';
import { toast, ToastContainer } from 'react-toastify';
import { addBookAPI } from '../../services/allAPI';

function SellBooks() {

    const [bookDetailes,setBookDetailes] = useState({
        title:'',author:'',pages:'',imageURL:'',price:'',discountPrice:'',abstract:'',publisher:'',language:'',isbn:'',category:'',uploadImg:[]
    })

    const [preview,setPreview] = useState("")
    const [previewList,setPreviewList] = useState([])

        // console.log(bookDetailes);

    const handleBookImageUpload = (e)=>{
        console.log(e.target.files[0]);
        const file = e.target.files[0]
        const uploadImgArray = bookDetailes.uploadImg
        uploadImgArray.push(file)
        setBookDetailes({...bookDetailes,uploadImg:uploadImgArray})
        const url = URL.createObjectURL(file)
        setPreview(url)
        const demoPreviewList = previewList
        demoPreviewList.push(url)
        setPreviewList(demoPreviewList)
    }

    const handleResetform = ()=>{
        setBookDetailes({
        title:'',author:'',pages:'',imageURL:'',price:'',discountPrice:'',abstract:'',publisher:'',language:'',isbn:'',category:'',uploadImg:[]

        })
        setPreview("")
        setPreviewList([])
    }


    const handleUploadBookForm = async ()=>{
        // check all fields have value
        const {title,author,pages,imageURL,price,discountPrice,abstract,publisher,language,isbn,category,uploadImg} = bookDetailes
        if(!title||!author||!pages||!imageURL||!price||!discountPrice||!abstract||!publisher||!language||!isbn||!category||uploadImg.length==0){
            toast.info("Please fill the form completely")
        }else{
            const token = sessionStorage.getItem("token")
            if (token) {
                // const result = await addBookAPI
                const reqHeader = {
                    "Authorization":`Bearer ${token}`
                }
                const reqBody = new FormData()

                // reqBody.append("title",title)
                for(let key in bookDetailes){
                    if(key!="uploadImg"){
                        reqBody.append(key,bookDetailes[key])
                    }else{
                        bookDetailes.uploadImg.forEach(item => {
                            reqBody.append("uploadImg",item)
                        })
                    } 
                }
                const result = await addBookAPI(reqBody,reqHeader)
                    if(result.status==200){
                        toast.success("Book Added Successfully")
                    }else if(result.status==409){
                        toast.warning(result.response.data)
                    }else{
                        toast.error("Somthing went Wrong")
                        console.log(result);
                    }
                    handleResetform()
            }
            
        }
    }

  return (
    <div className='p-10 my-20 mx-5 bg-gray-200'>
        <h1 className="text-center text-3xl font-medium">Upload Book Detailes</h1>
        <div className="md:grid grid-cols-2 mt-10 w-full">
            <div className="px-3">
                <div className="mb-3">
                    <input value={bookDetailes.title} onChange={e=>setBookDetailes({...bookDetailes,title:e.target.value})} type="text" placeholder='Book Title' className="w-full p-2 rounded bg-white " />
                </div>
                <div className="mb-3">
                    <input value={bookDetailes.author} onChange={e=>setBookDetailes({...bookDetailes,author:e.target.value})} type="text" placeholder='Author' className="w-full p-2 rounded bg-white " />
                </div>
                <div className="mb-3">
                    <input value={bookDetailes.pages} onChange={e=>setBookDetailes({...bookDetailes,pages:e.target.value})} type="text" placeholder='No. of Pages' className="w-full p-2 rounded bg-white " />
                </div>
                <div className="mb-3">
                    <input value={bookDetailes.imageURL} onChange={e=>setBookDetailes({...bookDetailes,imageURL:e.target.value})} type="text" placeholder='Book Image URL' className="w-full p-2 rounded bg-white " />
                </div>
                <div className="mb-3">
                    <input value={bookDetailes.price} onChange={e=>setBookDetailes({...bookDetailes,price:e.target.value})} type="text" placeholder='Original Price' className="w-full p-2 rounded bg-white " />
                </div>
                <div className="mb-3">
                    <input value={bookDetailes.discountPrice} onChange={e=>setBookDetailes({...bookDetailes,discountPrice:e.target.value})} type="text" placeholder='Discount Price' className="w-full p-2 rounded bg-white " />
                </div>
                <div className="mb-3">
                    <textarea value={bookDetailes.abstract} onChange={e=>setBookDetailes({...bookDetailes,abstract:e.target.value})} type="text" placeholder='Abstract' rows={'5'} className="w-full p-2 rounded bg-white " />
                </div>

            </div>
            <div className="px-3">
                <div className="mb-3">
                    <input value={bookDetailes.publisher} onChange={e=>setBookDetailes({...bookDetailes,publisher:e.target.value})} type="text" placeholder='Publisher' className="w-full p-2 rounded bg-white " />
                </div>
                <div className="mb-3">
                    <input value={bookDetailes.language} onChange={e=>setBookDetailes({...bookDetailes,language:e.target.value})} type="text" placeholder='Language' className="w-full p-2 rounded bg-white " />
                </div>
                <div className="mb-3">
                    <input value={bookDetailes.isbn} onChange={e=>setBookDetailes({...bookDetailes,isbn:e.target.value})} type="text" placeholder='ISBN' className="w-full p-2 rounded bg-white " />
                </div>
                <div className="mb-3">
                    <input value={bookDetailes.category} onChange={e=>setBookDetailes({...bookDetailes,category:e.target.value})} type="text" placeholder='Category' className="w-full p-2 rounded bg-white " />
                </div>
                <div className="mb-3 flex justify-center items-center">
                    
                    <label htmlFor="uploadProfile">
                        <input onChange={e=>handleBookImageUpload(e)} type="file" name="" id="uploadProfile" hidden />
                        <img src={preview?preview:"https://cdnl.iconscout.com/lottie/premium/thumb/file-upload-animation-gif-download-4702141.gif"} width={'200px'} height={'200px'} alt="upload img" />
                    </label>
                </div>
                {
                    preview &&
                    <div className="flex items-center justify-center">
                    {
                        previewList?.map((bookImgURL,index)=>(
                        <img key={index} className='mx-2' width={'70px'} height={'70px'} src={bookImgURL} alt="book image" />))
                    }
                    {
                        previewList.length<3 &&
                        <label htmlFor="bookUpload">
                            <input onChange={e=>handleBookImageUpload(e)} type="file" id='bookUpload' hidden/>
                            <FaPlus className='text-3xl ms-2'/>
                        </label>
                    }
                </div>
                }
            </div>
        </div>
        <div className="p-3 w-full flex md:justify-end justify-center mt-8">
            <button onClick={handleResetform} className='py-2 px-3 rounded bg-gray-600 text-white hover:bg-white hover:text-gray-600'>RESET</button>
            <button onClick={handleUploadBookForm} className='py-2 px-3 rounded bg-gray-600 text-white hover:bg-white hover:text-blue-600 ms-5'>Add Book</button>
        </div>
      <ToastContainer position='top-center' autoClose={3000} theme='colored' />
    </div>
  )
}

export default SellBooks