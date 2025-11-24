import { faCartPlus, faHeart, faHeartBroken, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { search } from '../redux/slices/productSlice'



function Header() {
    
    const userWishlist = useSelector(state=>state.wishlistReducer)
    const userCart = useSelector(state=>state.cartReducer)
    const dispatch =useDispatch()


    return (
        <Navbar expand="lg" className="bg-primary fixed-top ">
            <Container>
                <Navbar.Brand><Link to={'/'} className='text-decoration-none text-light fw-bold'><FontAwesomeIcon icon={faTruckFast} className='me-1' />DailyCart</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Item><input onChange={e=>dispatch(search(e.target.value))} type="text" className="form-control" placeholder='Search Product'/></Nav.Item>
                        <Link to={'/wishlist'} className='text-decoration-none text-light fw-bold'><FontAwesomeIcon icon={faHeartBroken} className='me-1 text-danger fs-2' /><Badge pill bg='secondary'>{userWishlist.length}</Badge></Link>
                        <Link to={'/cart'} className='text-decoration-none text-light fw-bold'><FontAwesomeIcon icon={faCartPlus} className='me-1 text-success fs-2' /><Badge pill bg='secondary'>{userCart.length}</Badge></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )       
}

export default Header

