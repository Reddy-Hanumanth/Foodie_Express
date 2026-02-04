import react from 'react'
import Navbar from './Navigation/Navbar'
import Hero from './Navigation/Hero'
import Popular_Categories from './Components/Popular_Categories'
import Trending from './Components/Trending'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Popular_Categories />
      <Trending />
    </>
  )
}

export default App
