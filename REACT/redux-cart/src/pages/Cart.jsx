import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCartItem, incrementCartItem, removeCartItem ,emptyCart} from '../redux/slices/cartSlice'

function Cart() {
  const navigate = useNavigate()
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const [sum,setSum]=useState(0)

  useEffect(()=>{
    // setSum(userCart?.map(item=>item?.totalPrice)?.reduce((x,y)=>x+y,0))
    setSum(userCart?.reduce((acc,curr)=>acc+curr.totalPrice,0))
  },[userCart])

  const handleDecrementCart = (product)=>{
    if(product.quantity>1){
      dispatch(decrementCartItem(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const checkOut =()=>{
    alert("THANK YOU FOR PURCHASING WITH US ")
    dispatch(emptyCart())
    navigate('/')
  }


  return (
    <>
    <Header/>
    {
      userCart?.length>0?
      <div className="container pt-5">
      <h1 className="text-danger my-5">Cart Summary</h1>
      <div className="row mb-5"> 
        <div className="col-md-8 border p-5 rounded ">
          <table className='table table-stripped'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>...</th>
              </tr> 
            </thead>
            <tbody>
              {
                userCart?.map((product,index)=>(
                  <tr>
                <td>{index+1}</td>
                <td>{product?.title}</td>
                <td>
                  <img width={'50px'} height={'50px'} src={product?.thumbnail} alt="" /></td>
                <td>
                  <div className='d-flex'>
                    <button onClick={()=>handleDecrementCart(product)} className='btn fs-3'>-</button>
                  <input style={{width:'50px'}} type="text" className='form-control' value={product?.quantity} />
                  <button onClick={()=>dispatch(incrementCartItem(product?.id))} className='btn fs-3'>+</button>
                  </div>
                </td>
                <td>$ {product?.totalPrice}</td>
                <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='btn btn-danger'><FontAwesomeIcon icon={faTrash}/></button></td>
              </tr>
                ))
              }
            </tbody>
          </table>
          <div className="float-end mt-3">
            <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-5'>Empty Cart</button>
            <Link to={'/'} className='btn btn-info'>Shop More</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="border p-5 rounded shadow">
            <h3>Total Amount : <span className='text-danger'>${sum}</span></h3>
            <hr />
            <div className="d-grid">
              <button onClick={checkOut} className="btn btn-success">CheckOut</button>
              
            </div>
          </div>
        </div>
      </div>
      </div>:
      <div style={{minHeight:'80vh'}} className='d-flex justify-content-center align-items-center flex-column'>
                <img src="https://media1.giphy.com/media/giXLnhxp60zEEIkq8K/giphy.gif?cid=e3b0c442444f8d098c5abfafcae6d9dff28d7204c194b16e&rid=giphy.gif" width={'25%'} alt="" />
                <h3>Your Cart is Empty!!!</h3>
                <Link to={'/'} className='btn btn-primary'>Shop More</Link>
              </div>
    }
    </>
  )
}

export default Cart