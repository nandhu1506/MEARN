
import { faFacebookF, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
faTwitter

function Footer() {
  return (

    <div style={{ backgroundColor: "rgb(130, 68, 189)", }} className='row container-fluid text-white justify-content-between align-items-center'>
      <div className="col-md-4"><Link to={'/'} className='text-decoration-none text-light fw-bold fs-4'><FontAwesomeIcon icon={faTruckFast} className='me-1' />DailyCart</Link>
        <p>Designed and Buind with All the love in the World by the   Luminar Team with the help of our contriputers.</p>
        <p>Code and Licensed Luminar, docs CC BY 3.0.</p>
        <p>Currently v5.3.2</p>
      </div>
      <div className="col-md-2 ">
        <p className='fw-bold fs-4'>Links</p>
        <p ><Link to={'/'} className='text-decoration-none text-light'>Home</Link></p>
        <p><Link to={'./wishlist'} className='text-decoration-none text-light'>WishList</Link></p>
        <p><Link to={'./cart'} className='text-decoration-none text-light'>Cart</Link></p>
      </div>
      <div className="col-md-2">
        <p className='fw-bold fs-4'>Guides</p>
        <p><Link className='text-decoration-none text-light'>REACT</Link></p>
        <p><Link className='text-decoration-none text-light'>REACT BootStrap</Link></p>
        <p><Link className='text-decoration-none text-light'>REACT Router</Link></p>
      </div>
      <div className="col-md-4">
        <p className='fw-bold fs-4'>Contact US</p>
        <div style={{display:'flex',alignItems:'center'}}>
        <Form.Control type="text" placeholder="Enter Your Email Here"/>
        <Button style={{background:'transparent',border:'none',color:'white'}} className='fs-4' variant="light"><FontAwesomeIcon icon={faArrowRight} /></Button>
        </div>
        <div className="row">
          <Link className="col-1 text-white fs-4"><FontAwesomeIcon icon={faTwitter}/></Link>
          <Link className="col-1 text-white fs-4"><FontAwesomeIcon icon={faInstagram}/></Link>
          <Link className="col-1 text-white fs-4"><FontAwesomeIcon icon={faFacebookF}/></Link>
          <Link className="col-1 text-white fs-4"><FontAwesomeIcon icon={faLinkedin}/></Link>
          <Link className="col-1 text-white fs-4"><FontAwesomeIcon icon={faGithub}/></Link>
          <Link className="col-1 text-white fs-4"><FontAwesomeIcon icon={faPhone}/></Link>
        </div>

      </div>
      <div className='fw-bold text-center'>Copyright ©️ Aug 2025 Batch, Daily Cart, Build With REACT Redux.</div>
    </div>

  )
}

export default Footer