import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { getAllBooksPageAPI } from '../../services/allAPI'
import { searchContext } from '../../contextAPI/ShareContext'


function Books() {
  const {searchKey,setSearchKey} = useContext(searchContext)
  const [toogle,setToogle] = useState('false')
  const [token,setToken] = useState("")
  const [categories,setCategories] = useState([])
  const [allBooks,setAllBooks] = useState([])
  const [tempAllBooks,setTempAllBooks] = useState([])
  
  console.log(allBooks);

  

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      const userToken = sessionStorage.getItem('token') 
      setToken(userToken)
      getAllBooks(userToken)
    }
  },[searchKey])

  const getAllBooks = async (token) =>{
    const reqHeader = {
      "Authorization" : `Bearer ${token}`
    }
    const result = await getAllBooksPageAPI(reqHeader,searchKey)
    if(result.status==200){
      setAllBooks(result.data)
      setTempAllBooks(result.data)
      // call functions to get category
      const tempCategory = result.data?.map(item=>item.category)
      setCategories([...new Set(tempCategory)]);

    }else{
      console.log(result);
    }
  }

  const filterBook = (category)=>{
    if(category!="No Filter"){
      setAllBooks(tempAllBooks?.filter(item=>item.category==category))
    }else{
      setAllBooks(tempAllBooks)
    }
  }

  return (
    <>
    <Header/>
    {
      token ? 
      <>
    <div className="flex flex-col justify-center items-center my-5">
      <h1 className="text-3xl font-bold my-5">All Books</h1>
      <div className="flex my-5">
        <input value={searchKey} onChange={e=>setSearchKey(e.target.value)} placeholder='Search By Book Title' type="text" className="p-2 border border-gray-200 text-black w-100 placeholder-gray-600" />
        <button className="p-2 bg-blue-900 text-white">Search</button>
      </div>
    </div>
    {/* Books Card and Filter */}
    <div className="md:grid grid-cols-4 p5 md:px-20 mb-10">
      {/* Filter */}
      <div className="col-span-1">
       <div className='flex justify-between'>
         <h1 className="font-bold text-2xl">Filter</h1>
         <button onClick={()=>setToogle(!toogle)} className='font-bold text-2xl md:hidden'><FaBars/></button>
       </div>
       {/* List Filters */}
       <div className={toogle?"block":"md:block hidden"}>
        {/* duplicate Filter Item */}
        {
          categories?.map((item,index)=>(
            <div key={index} className="mt-3">
          <input onClick={()=>filterBook(item)} type="radio" name="filter" id={item} />
          <label className='ms-3' htmlFor={item} >{item}</label>
        </div>
          ))
        }
        <div className="mt-3">
          <input onClick={()=>filterBook("No Filter")} type="radio" name="filter" id="nofilter" />
          <label className='ms-3' htmlFor="nofilter" >No Filter</label>
        </div>
       </div>
      </div>
      {/* Book Card */}
      <div className="col-span-3">
        <div className="md:grid grid-cols-4 mt-5 md:mt-0">
       {/* duplicate Books */}
       {
        allBooks?.length>0?
        allBooks?.map(book=>(       
    <div className='shadow rounded p-3 m-4 md:my-0' hidden={book?.status === "pending" || book?.status === "sold"}>
            <img width={'100%'} height={'300px'} src={book?.imageURL} alt="" />
            <div className="flex flex-col justify-center items-center mt-4">
              <h3 className="font-bold text-blue-700 text-lg">{book?.author}</h3>
              <p>{book?.title.slice(0,9)}...</p>
              <Link to={`/books/${book?._id}/view`} className='bg-blue-800 p-2 text-white'>View Book</Link>
            </div>
          </div>
        ))
        :
        <div className="text-center my-5 font-bold">Book Not Found</div>
      }
      </div>
      </div>
    </div>
    </>
    :
    <div className='w-full h-screen flex items-center justify-center flex-col'>
      <img  src="https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUybXNjdTN0cHl4b3VzYmRuN29naWF0aXRhejI0emFpOGNpMmczNGFoaCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/ocVFpiaTCxly9SKDit/giphy.gif" alt="lockscreen" />
      <p className='text-lg font-bold my-5'>Please <Link to={'/login'} className='text-blue-600'>Login</Link> to explore more....</p>
    </div>
    }
    <Footer/>
    </>
  )
}

export default Books