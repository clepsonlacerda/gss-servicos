import React, { useEffect } from 'react'
import Footer from '../Footer'
import './Services.css'

function Services() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <div className="content-services">
        <div className="bloco">
          <div className="imagem-1"></div>
          <div className="texto">
            <h2>Custos</h2>
            <p>
              Ajudamos empresas da região a cortar os custos com marketing pela METADE, e ao mesmo tempo ter mais resultado que folder, 
              rádio, carro de som e TV, e pra isso levamos seu negócio aonde as pessoas estão, na Internet. 
            </p>
          </div>
        </div>

        <div className="bloco">
          <div className="texto">
            <h2>Notificações</h2>
            <p>
              Fazemos com que seu WhatsApp receba novos clientes diariamente e este esforço te ajude a vender à
              clientes de forma de segmentada. Nosso objetivo é atingir o público certo pra você, 
              gerar oportunidades reais pro seu negócio.
            </p>
          </div>
          <div className="imagem-2">
            {/* <img src="/images/img-1.jpg" alt="first" /> */}
          </div>
        </div>

        <div className="bloco">
          <div className="imagem-3"></div>
          <div className="texto">
            <h2>Divugações</h2>
            <p>
              Usamos as melhores técnicas de divlução de conteúdo, e que ele chegue as pessoas que estão interessados em seu produto ou negócio.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Services