import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className="footer-container">
        {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}

        {/* <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div> */}

        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                <img src='/images/logo.png' />
              </Link>
            </div>

            <small className='website-rights'>GSS Serviços © 2023</small>
            
            <div className='social-icons'>
              <a className='social-icon-link facebook'
                    href='https://www.facebook.com/htza003'
                    target='_blank'
                    aria-label='Facebook' >
                <i className='fab fa-facebook-f' />
              </a>
              <Link className='social-icon-link instagram'
                    to='https://instagram.com/gss.servicos'
                    target='_blank'
                    aria-label='Instagram' >
                <i className='fab fa-instagram' />
              </Link>
              {/* <Link className='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube' >
                <i className='fab fa-youtube' />
              </Link>
              <Link className='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter' >
                <i className='fab fa-twitter' />
              </Link> */}
              <Link className='social-icon-link twitter'
                    to='https://wa.me/558881767090?text=Olá,%20gostaria%20de%20aumentar%20minhas%20vendas'
                    target='_blank'
                    aria-label='LinkedIn' >
                <i className='fab fa-whatsapp' />
              </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer