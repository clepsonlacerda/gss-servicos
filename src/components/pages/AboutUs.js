import React from 'react'
import Footer from '../Footer'
import './AboutUs.css'

function AboutUs() {
  return (
      <>
    <section className="section testemunhas bg-fixed">
        <div className="content">
            <header className="section-header">
                <h1>Equipe</h1>
                <p>Grupo organizacional da GSS Serviços</p>
            </header>
            
            <article className="testemunhas-article">
                <span className="image"><img src="/images/img-1.jpg" /></span>
                <p>
                    <span className="name">Gabriel</span>
                    <span>Designer e Gestor de tráfego </span>
                </p>
                <h1>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</h1>
            </article>
                
            <article className="testemunhas-article">
                <span className="image"><img src="/images/img-2.jpg" /></span>
                <p>
                    <span className="name">Saulo</span>
                    <span>Vendedor</span>
                </p>
                <h1>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</h1>
            </article>
                
            <article className="testemunhas-article">
                <span className="image"><img src="images/testemunha-03.jpg" /></span>
                <p>
                    <span className="name">Wesley</span>
                    <span>Gestor de tráfego</span>
                </p>
                <h1>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</h1>
            </article>

            <article className="testemunhas-article">
                <span className="image"><img src="images/testemunha-03.jpg" /></span>
                <p>
                    <span className="name">Clepson</span>
                    <span>Desenvolvedor</span>
                </p>
                <h1>Responsável por toda a parte operacional de criação de códigos, implementação e soluções programáticas</h1>
            </article>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default AboutUs
