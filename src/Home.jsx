import React from 'react'
import Navbar from './Navigation/Navbar'
import Hero from './Navigation/Hero'
import Popular_Categories from './Components/Popular_Categories'
import Trending from './Components/Trending'
import Footer from './Components/Footer'

const Home = () => {
  return (
    <div>
        <Hero />
        <Popular_Categories />
        <Trending />
    </div>
  )
}

export default Home