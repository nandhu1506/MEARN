import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'


function Home() {
  const dispatch = useDispatch()  
  const {allProducts,loading,error} = useSelector((state)=>state.productReducer)
  // console.log(allProducts);
  const [currentPage, setCurrentPage] = useState(1)
  const productPerPage = 8
  const totalPage = Math.ceil(allProducts?.length/productPerPage)
  const currentPageLastIndex = currentPage * productPerPage
  const currentPageFirstIndex = currentPageLastIndex - productPerPage
  const visibleProductArray = allProducts?.slice(currentPageFirstIndex,currentPageLastIndex)

  useEffect(()=>{
      dispatch(getAllProducts())
  },[])

  const navigateNext =() =>{
    if(currentPage!=totalPage){
      setCurrentPage(currentPage+1)
    }
  }
  const navigatePrevious =() =>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }


  return (
    <>
      <Header />
      <div className='m-5'>
        {
          loading ?
          <div className='p-5 text-center'>
            <img width={'100px'} src="https://webartdevelopers.com/blog/wp-content/uploads/2021/01/loading-animation.gif" alt="loading" />
            <span className='fw-bolder ms-5'>Loading....</span>
          </div>
          :
          <div className="row pt-5">
          {
            allProducts?.length>0 ?
            visibleProductArray?.map(product=>(
            <div key={product?.id} className="col-md-3 my-2">
             <Card className='text-center'>
              <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
              <Card.Body className='text-center'>
                <Card.Title>{product?.title.slice(0,18)}</Card.Title>
                <Link to={`/products/${product?.id}/view`} className='btn btn-primary'>View More...</Link>
              </Card.Body>
            </Card>
          </div>
            ))
            :
            <p className='fw-bold fs-5'>Product Not Found!!!</p>
          }
          <div className="text-center fw-bold my-3 fs-5">
            <button onClick={navigatePrevious} className="btn"><FontAwesomeIcon icon={faBackward}/></button>
            {currentPage} of {totalPage}
            <button onClick={navigateNext} className="btn"><FontAwesomeIcon icon={faForward}/></button>
          </div>
        </div>
        }
      </div>

    </>
  )
}

export default Home