import React from 'react'
import Footer from '../Footer'
import './Services.css'

function Services() {
  return (
    <>
      <div className="content-services">
        <div className="bloco">
          <div className="imagem-1"></div>
          <div className="texto">
            <h2>Título</h2>
            <p>Eum consequatur voluptatem ex nesciunt optio et reiciendis velit quo dolorum omnis et quasi corrupti ex totam quae quo cumque earum! Ut porro iste est accusantium officia et repudiandae veniam quo aperiam veniam aut earum quidem ut reprehenderit nisi? Ut autem rerum nam aperiam odio sed alias asperiores. </p>
          </div>
        </div>

        <div className="bloco">
          <div className="texto">
            <h2>Título</h2>
            <p>Conteúdo do texto</p>
          </div>
          <div className="imagem-2">
            {/* <img src="/images/img-1.jpg" alt="first" /> */}
          </div>
        </div>

        <div className="bloco">
          <div className="imagem-3"></div>
          <div className="texto">
            <h2>Título</h2>
            <p>Conteúdo do texto</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Services