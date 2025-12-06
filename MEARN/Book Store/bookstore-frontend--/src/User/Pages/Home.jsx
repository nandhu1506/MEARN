import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header />
      {/* Landing Page */}
      <div style={{ height: '500px' }} className='flex flex-col justify-center items-center bg-[url(https://static.vecteezy.com/system/resources/thumbnails/006/296/747/small/bookshelf-with-books-biography-adventure-novel-poem-fantasy-love-story-detective-art-romance-banner-for-library-book-store-genre-of-literature-illustration-in-flat-style-vector.jpg)] bg-cover bg-center text-white'>
        <div style={{ height: '500px', backgroundColor: 'rgba(0,0,0,0.4' }} className='w-full flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-bold'>Wonderful Gifts</h1>
          <p>Gift your family and friends a book</p>
          <div className="mt-9 flex items-center">
            <input type="text" className='bg-white p-2 rounded-3xl w-100 text-black placeholder-gray-500' placeholder='Search A Book' name="" id="" />
            <FaSearch className='text-gray-500' style={{ marginLeft: '-40px' }} />
          </div>
        </div>
      </div>
      {/* new arrivals */}
      <section className='md:px-40 my-5 p-5 flex flex-col justify-center items-center '>
        <h1 className='text-3xl font-bold'>New Arrivals</h1>
        <h1 className='text-4xl my-2'>Explore our Latest Collection</h1>
        <div className='md:grid grid-cols-4 w-full my-10'>
          {/* duplicate book card */}
          <div className='shadow rounded p-3 m-4 md:my-0'>
            <img width={'100%'} height={'300px'} src="https://m.media-amazon.com/images/I/71+2-t7M35L._AC_UF1000,1000_QL80_.jpg" alt="" />
            <div className="flex flex-col justify-center items-center mt-4">
              <h3 className="font-bold text-blue-700 text-xl">Author</h3>
              <p>title</p>
              <p>$ Price</p>
            </div>
          </div>
        </div>
        <div className="text-center my-10">
          <Link to={'/books'} className='bg-blue-900 p-3 text-white font-black'>Explore More</Link>
        </div>
      </section>

      {/* author */}
      <section className='md:grid grid-cols-2 items-center gap-10 p-5 md:px-40'>
        <div className="text-center">
          <h2 className="text-xl font-bold">Featured Authors</h2>
          <h3 className='text-xl'>Captivatives with every word</h3>
          <p className="my-5 text-justify">
            Welcome to the Author Features Module of our Book Store Website!
            This section is designed to give readers, buyers, and admins a rich experience when exploring authors and their works.

          </p>
          <p className='text-justify'>🌟 What This Feature Includes</p>
          <p className='text-justify font-bold'>1. Author Profiles</p>

          <p className='text-justify'>Each author has a dedicated profile page.

            Includes photo, biography, writing style, and career highlights.</p>

          <p className='text-justify font-bold'>2. List of Books by the Author</p>

          <p className='text-justify'>Displays all books written by the author.

            Books are shown with covers, ratings, prices, and descriptions.

            Readers can quickly browse, add to cart, or view more details.</p>

          <p className='text-justify font-bold'>3. Author Search & Filters</p>

          <p className='text-justify'>Users can search authors by:

            Name

            Genre

            Popularity

            Helps in finding authors easily among large collections.</p>

          <p className='text-justify font-bold'>4. Follow / Favorite Author</p>

          <p className='text-justify'>Users can follow their favorite authors.

            Get notifications when:

            New books are added

            Special offers appear

            Author events happen</p>

          <p className='text-justify font-bo;d'>5. Author Spotlight Section</p>

          <p className='text-justify'> Website automatically highlights:

            Trending authors

            Best-selling authors

            New authors of the month

            Increases engagement and discoverability.</p>
        </div>
        <div className="p-5 flex justify-center-item-center">
          <img src="https://m.media-amazon.com/images/S/amzn-author-media-prod/ovmv52mf4daeo4iakjiepifci0._SX450_CR0%2C0%2C450%2C450_.jpg" alt="" />
        </div>
      </section>

      {/* Testimonials */}
      <section className='md:px-40 p-5 flex flex-col justify-center items-center'>
        <h2 className="text-xl font-bold">Testimonials</h2>
        <h3 className="text-xl">See what others are saying</h3>
        <div className="my-5 flex flex-col items-center justify-center">
          <img width={'300px'} height={'300px'} style={{borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtK24EY3iJHBUBH-nEdR_arIxx-KtOGZ0Uw&s" alt="" />
          <h3 className="my-3">Luther King</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente error accusantium ex quas quibusdam blanditiis ut magnam maiores earum debitis quos, quisquam vel? Nam suscipit, ullam fuga vero ea nobis?
            Repellat, veritatis facilis unde hic, magnam quisquam atque sed, beatae quod nam natus illo quia consequatur officia ut eligendi consequuntur commodi sapiente. Illo dolorem dolore sunt a repellat omnis accusamus!
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home