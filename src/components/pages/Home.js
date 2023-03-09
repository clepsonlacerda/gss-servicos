import React from 'react'
import '../../App.css'
import Card from '../Cards'
import Customer from '../Customer'
import Footer from '../Footer'
import HeroSection from '../HeroSection'

function Home() {
  return (
    <>
      <HeroSection />
      <Card />
      <Customer  />
      <Footer />
    </>
  )
}

export default Home