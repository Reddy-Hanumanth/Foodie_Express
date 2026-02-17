import react from 'react'
import Navbar from './Navigation/Navbar'
import Hero from './Navigation/Hero'
import Popular_Categories from './Components/Popular_Categories'
import Trending from './Components/Trending'
import Footer from './Components/Footer'
import Home from './Home' 


import { ToastContainer, toast } from 'react-toastify'
import { Route, Routes } from 'react-router-dom'
import Food from './Pages/Food'
import About_US from './Pages/About_US'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Food/>} />
        <Route path='/about' element={<About_US/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
