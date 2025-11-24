import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { height } from '@fortawesome/free-solid-svg-icons/fa0'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import { addToWishlist } from '../redux/slices/wishListSlice'
import { addToCart } from '../redux/slices/cartSlice'



function View() {
const {id} = useParams()
const [product,setProduct] = useState({})
const dispatch = useDispatch()
const userWishlist = useSelector(state=>state.wishlistReducer)
const userCart=useSelector(state=>state.cartReducer)


useEffect(()=>{
  getProductDetailes()
},[])

const getProductDetailes = ()=>{
  const allProducts = JSON.parse(sessionStorage.getItem("products"))
  setProduct(allProducts.find(item=>item.id==id))
}

const handleAddToWishlist = ()=>{
  const existingProduct = userWishlist?.find(item=>item.id==id)
  if(existingProduct){
    alert("Sorry !! Product already in your wishlist...")
  }else{
    dispatch(addToWishlist(product))
  }
}
 
const handleAddtoCart =()=>{
  const existingProduct = userCart?.find(item=>item.id==id)
  dispatch(addToCart(product))
  if(existingProduct){
    alert(`${product.title} Qty is Updated in your Cart`)
  }else{
    alert(`${product.title} added in your Cart`)
  }
}

  return (
    <>
    <Header/>
    <div style={{height:'80vh'}} className="container my-5">
      <div className="row pt-5 align-items-center">
        <div className='col-md-6 text-center'>
          <img className='img-fluid' src={product?.thumbnail} alt="" />
          <div className='d-flex justify-content-evenly mt-5'>
            <button onClick={handleAddToWishlist} className='btn btn-info'>Add to wishlist</button>
            <button onClick={handleAddtoCart} className='btn btn-success'>Add to cart</button>
          </div>
        </div>
        <div className="col-md-6">
          <h1>{product?.title}</h1>
          <h2 className='text-danger'>Price : ${product?.price}</h2>
          <h4 className='mt-2'>Brand : {product?.brand}</h4>
          <h4>Category : {product?.category}</h4>
          <h4>Description : {product?.description}</h4>
          <h5 className='fw-bolder my-3'>Client Review :</h5>
          {
            product?.reviews?.length>0 &&
            product?.reviews?.map((item,index)=>(
              <div key={index} className="my-2 border rounded shadow p-2">
            <p><span className='fw-bold'>{item.reviewerName}</span> {item.comment}</p>
            <p>Rating : {item.rating} <FontAwesomeIcon icon={faStar} className='text-warning' /></p>
          </div>
            ))
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default View