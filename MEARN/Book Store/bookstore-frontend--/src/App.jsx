import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './User/Pages/Home'
import Books from './User/Pages/Books'
import Contact from './User/Pages/Contact'
import Profile from './User/Pages/Profile'
import View from './User/Pages/View'

import AdminHome from './admin/pages/AdminHome'
import AdminCollection from './admin/pages/AdminCollection'
import AdminProfile from './admin/pages/AdminProfile'

import Auth from './pages/Auth'
import Pnf from './pages/Pnf'

import { useContext, useState } from 'react'
import PreLoader from './components/PreLoader'
import PaymentSuccess from './User/Pages/PaymentSuccess'
import PaymentFailure from './User/Pages/PaymentFailure'
import { routeGuardContext } from './contextAPI/AuthContext'




function App() {

const {role,authorisedUser,setAuthorisedUser} = useContext(routeGuardContext)
const[loader,setLoader] = useState(true)

setTimeout(()=>{
  setLoader(false)
},2000)


  return (
    <>
     <Routes>
      <Route path='/' element={ loader?<PreLoader/>:<Home/>} />
      <Route path='/login' element={ <Auth/> }/>
      <Route path='/register' element={ <Auth registerURL={true} /> }/>
      <Route path='/books' element={ <Books /> }/>
      <Route path='/contact' element={ <Contact /> }/>

      { role=="user"&&
        <>
          <Route path='/user/profile' element={ <Profile /> }/>
          <Route path='/books/:id/view' element={ <View /> } />
          <Route path='/payment-success' element={ <PaymentSuccess /> } />
          <Route path='/payment-failure' element={ <PaymentFailure /> } />
        </>
      }


      { role=="admin"&&
        <>
          <Route path='/admin/home' element={loader?<PreLoader/>: <AdminHome /> } /> 
          <Route path='/admin/collection' element={ <AdminCollection /> } /> 
          <Route path='/admin/profile' element={ <AdminProfile /> } /> 
        </>
      }

      <Route path='/*' element={ <Pnf /> } /> 

     </Routes>
    </>
  )
}

export default App
