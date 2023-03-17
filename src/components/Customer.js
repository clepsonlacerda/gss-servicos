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
          <span className="image"><img alt="Faturepag" src="images/customers/faturepag.png" /></span>
          <span className="image"><img alt="Loteria fort" src="images/customers/loteria-fort.png" /></span>
          <span className="image"><img alt="Ramon cell" src="images/customers/ramon-cell.png" /></span>
          <span className="image"><img alt="Rogerio imports" src="images/customers/rogerio-imports.png" /></span>
        </article>
      </div>
    </div>
  )
}

export default Customer;