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
                <h1>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</h1>
                <span className="image"><img src="/images/img-1.jpg" /></span>
                <p>
                    <span className="name">Funcionário</span>
                    <span>Cargo</span>
                </p>
            </article>
                
            <article className="testemunhas-article">
                <h1>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</h1>
                <span className="image"><img src="/images/img-2.jpg" /></span>
                <p>
                    <span className="name">Funcionário</span>
                    <span>Cargo</span>
                </p>
            </article>
                
            <article className="testemunhas-article">
                <h1>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</h1>
                <span className="image"><img src="images/testemunha-03.jpg" /></span>
                <p>
                    <span className="name">Funcionário</span>
                    <span>Cargo</span>
                </p>
            </article>

            <article className="testemunhas-article">
                <h1>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</h1>
                <span className="image"><img src="images/testemunha-03.jpg" /></span>
                <p>
                    <span className="name">Funcionário</span>
                    <span>Cargo</span>
                </p>
            </article>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default AboutUs
