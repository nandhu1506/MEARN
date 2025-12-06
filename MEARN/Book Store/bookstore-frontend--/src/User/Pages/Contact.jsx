import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaLocationPin } from 'react-icons/fa6'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

function Contact() {
  return (
    <>
    <Header/>
    <div className='md:px-40'>
    <div className="text-center my-10 font-bold text-3xl">Contacts</div>
    <p className='text-center'>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam et facilis esse, repudiandae rem sunt ullam distinctio numquam vitae magnam. Reiciendis et, doloribus repudiandae tempora distinctio ex voluptate explicabo. Esse.
      Ex quo distinctio maiores doloribus aut illo cupiditate, inventore neque accusamus reiciendis dolor, repellat iste nulla sint tempore mollitia nemo tempora dolores natus! Fuga expedita dicta debitis error! Voluptate, quibusdam.
      Nobis, aperiam reiciendis corrupti accusamus rerum itaque exercitationem dicta aspernatur, temporibus id officiis sapiente cumque veritatis! Possimus sit accusantium maiores, ab ipsum modi numquam illum suscipit odit minus! Vitae, nihil.
      Impedit consequatur ut sint nam repellat culpa, cupiditate perferendis quidem nostrum quae earum veniam qui hic. Animi perferendis velit pariatur nisi quia. Placeat labore perspiciatis nihil aut soluta nemo eius?
      Ab, enim minus assumenda velit corporis dignissimos quisquam. Illo laborum dolorum facilis voluptatem similique reprehenderit mollitia architecto, ipsa, neque, vitae tenetur quis nemo ducimus earum nesciunt exercitationem voluptates numquam iste!
    </p>
    <div className="md:flex justify-center gap-15 items-center mt-5 md:mt-0 p-10">
      <div className="flex items-center">
        <div style={{height:'50px',width:'50px',borderRadius:'50%'}} className='flex justify-center items-center bg-gray-200'>
          <FaLocationPin/>
        </div>
        <p>123 main Street</p>
      </div>
      <div className="flex items-center ">
        <div style={{height:'50px',width:'50px',borderRadius:'50%'}} className='flex justify-center items-center bg-gray-200'>
          <FaPhone/>
        </div>
        <p>123 main Street</p>
      </div>
      <div className="flex items-center ">
        <div style={{height:'50px',width:'50px',borderRadius:'50%'}} className='flex justify-center items-center bg-gray-200'>
          <FaEnvelope/>
        </div>
        <p>123 main Street</p>
      </div>
    </div>
    <div className="w-full md:grid grid-cols-2 gap-10 my-5 p-5 md:px-10">
      <div className="bg-gray-100 p-5 text-center">
        <h1 className="font-semibold text-2xl">Send me Message</h1>
        <div className="my-5">
          <input type="text" className='bg-white w-full p-2' placeholder='Name'/>
        </div>
        <div className="my-5">
          <input type="text" className='bg-white w-full p-2' placeholder='Email'/>
        </div>
        <div className="my-5">
          <textarea type="text" className='bg-white w-full p-2' placeholder='Message'/>
        </div>
        <div className="my-5">
          <button className='bg-black w-full p-2 text-white text-lg'>Submit</button>
        </div>
      </div>
      <div> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4269.973713956084!2d76.25122721091117!3d10.151919470359712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1764578328001!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" style={{border:'0'}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact