import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='bg-[url(https://www.shutterstock.com/shutterstock/videos/3930930149/thumb/1.jpg?ip=x480)] bg-center bg-cover items-center justify-center flex' style={{height:'100vh'}}>
      <Link to={'/'} className='bg-green-500 p-4 rounded-4xl mt-100 w-100 text-center'>Go Home</Link>
    </div>
  )
}

export default Pnf