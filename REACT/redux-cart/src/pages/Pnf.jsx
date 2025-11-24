import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
  <div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center flex-column'>
    <img src="https://shop.sesto.ir/wp-content/uploads/2022/10/funny-404-error-page-design.gif" alt="Page Not Found" />
    <h4>Looks like you lost!!!</h4>
    <p>Page you are looking for is not available</p>
    <Link to={'/'} className='btn btn-primary'>Home</Link>
  </div>
  
  )
}

export default Pnf