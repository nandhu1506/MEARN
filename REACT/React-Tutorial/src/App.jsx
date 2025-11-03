
import AboutUs from './AboutUs'
import './App.css'
import ClassDemo from './ClassDemo'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Counter from './Counter'
import User from './User'
function App() {
  const dataShare = "Data From Parent"
  return (
    <>
    <User/>
    <Counter/>
    <Login/>
    <Register/>
    <Home data={dataShare}/>
    <AboutUs data={dataShare}/>
    <ClassDemo data = {dataShare}/>
    </>
  )
}

export default App
