import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeWishlistItem } from '../redux/slices/wishListSlice'
import { addToCart } from '../redux/slices/cartSlice'


function Wishlist() {
const userCart=useSelector(state=>state.cartReducer)
const userWishlist = useSelector(state=>state.wishlistReducer)
const dispatch = useDispatch()

const handleAddtoCart = (product)=>{
  const existingProduct = userCart?.find(item=>item.id==product.id)
  dispatch(addToCart(product))
  dispatch(removeWishlistItem(product.id))
  if(existingProduct){
    alert(`${product.title} Qty is Updated in your Cart`)
  }else{
    alert(`${product.title} added in your Cart`)
  }
}



  return (
    <>
    <Header/>
    <div className="my-5 container">
      {
        userWishlist ?.length>0 ?
        <>
        <h1 className='pt-5 fw-bold text-primary'>Wishlist</h1>
        <div className="row ">
          {
            userWishlist?.map(product=>(
              <div key={product?.id} className="col-md-3 mb-2">
            <Card >
              <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
              <Card.Body className='text-center'>
                <Card.Title>{product?.title}</Card.Title>
                <div className="d-flex justify-content-evenly">
                  <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
                  <button onClick={()=>handleAddtoCart(product)} className='btn text-success fs-4'><FontAwesomeIcon icon={faCartPlus}/></button>

                </div>
              </Card.Body>
            </Card>
          </div>
            ))
          }
        </div>
        </>
        :
        <div style={{minHeight:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
          <img src="https://media1.giphy.com/media/giXLnhxp60zEEIkq8K/giphy.gif?cid=e3b0c442444f8d098c5abfafcae6d9dff28d7204c194b16e&rid=giphy.gif" width={'25%'} alt="" />
          <h3>Your Wishlist is Empty!!!</h3>
          <Link to={'/'} className='btn btn-primary'>Shop More</Link>
        </div>
      }
    </div>
    </>
    
  )
}

export default Wishlist