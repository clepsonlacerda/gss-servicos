import React from 'react'
import './Customer.css'

function Customer() {
  return (
    <div className='customer'>
      <div className="customer_container">
        <header className="customer_header">
          <h1>Nossos Clientes</h1>
          <p>Esses são alguns dos nosso clientes que usam nossos serviços</p>
        </header>
        
        <article className="customer_article">
          <span className="image"><img src="images/logo.png" /></span>
          <span className="image"><img src="images/logo.png" /></span>
          <span className="image"><img src="images/logo.png" /></span>
          <span className="image"><img src="images/logo.png" /></span>
        </article>
      </div>
    </div>
  )
}

export default Customer;