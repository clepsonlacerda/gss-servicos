import React, { useEffect } from 'react'
import '../../App.css'
import Card from '../Cards'
import Customer from '../Customer'
import Footer from '../Footer'
import HeroSection from '../HeroSection'

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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