import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <video src="/videos/video-2.mp4" autoPlay loop muted playsinline webkit-playsinline /> */}
        <h1>GSS SERVIÇOS</h1>
        <p>Como podemos ajudar?</p>
        <div className='hero-btns'>
            <Button className='btn'
                    route='/servicos'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large' >
                SERVIÇOS
            </Button>
            <Button className='btns'
                    route='/sobre'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large' >
                SOBRE {/*<i className='far fa-play-circle' /> */}
            </Button>
        </div>
    </div>
  )
}

export default HeroSection