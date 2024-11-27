import React from 'react'
import Navbar from '../Components/Navbar'
import '../assets/css/home.css'

const Home = () => {
  return (
    <>
    <Navbar />
    <div className='home'>
      <h1 className='home-title'>
        CONTACT MANAGEMENT SYSTEM
      </h1>
      <p className='home-description'>
        It's time to put the rolodex away.
        This is your new neighborhood friendly contact manager!
      </p>
    </div>
    </>
  )
}

export default Home
