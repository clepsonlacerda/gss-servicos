import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import Footer from '../Footer'
import './Contact.css'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5a6jw0o', 'template_7maejno', form.current, 'v3YgYnGubRZYC2SLJ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <>
      {/* <div className='contacts'>Contact</div> */}
      <section className='contact bg-fixed'>
        <div className='conatiner'>

          <h2>NOS CONTACTE</h2>

          <form ref={form} onSubmit={sendEmail} >
            <input type="text" placeholder='INFORME SEU NOME' name='user_name' required />
            <input type="email" placeholder='INFORME SEU EMAIL' name='user_email' required />
            <input type="text" placeholder='INFORME O ASSUNTO' name='subject' required />
            <textarea name="message" cols="30" rows="5"></textarea>

            <button type='submit'>Enviar Mensagem</button>
          </form>
        </div>
        <div className="container-footer">
          <div className="social-media">
            <Link className='social-media-icon' to='/'
                  target='_blank'
                  aria-label='LinkedIn' >
              <i className='fab fa-whatsapp' />
            </Link>
            <Link className='social-media-icon'
                  href='https://facebook.com'
                  target='_blank'
                  aria-label='Facebook' >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link className='social-media-icon'
                  to='https://instagram.com/gss.servicos'
                  target='_blank'
                  aria-label='Instagram' >
              <i className='fab fa-instagram' />
            </Link>
          </div>
        </div>

      </section>

      <Footer />
    </>
  )
}

export default Contact