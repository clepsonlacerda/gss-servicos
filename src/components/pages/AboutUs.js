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
                        <span className="image"><img src="images/testemunha-03.jpg" /></span>
                        <p>
                            <span className="name">Wesley</span>
                            <span>CEO e Gestor de tráfego</span>
                        </p>
                        <h1>Diretor Executivo e responsável pelo o estudo de públicos para o planejamento, criação e otimização de campanhas de tráfego pago.</h1>
                    </article>

                    <article className="testemunhas-article">
                        <span className="image"><img src="/images/img-1.jpg" /></span>
                        <p>
                            <span className="name">Gabriel</span>
                            <span>Designer e Gestor de tráfego </span>
                        </p>
                        <h1>Responsável pelos conceitos artísticos e funcionais, projeta e idealiza um objeto utilitário com fins definidos,
                            e faz o estudo de públicos para o planejamento, criação e otimização de campanhas de tráfego pago.</h1>
                    </article>

                    <article className="testemunhas-article">
                        <span className="image"><img src="/images/img-2.jpg" /></span>
                        <p>
                            <span className="name">Saulo</span>
                            <span>Consultor</span>
                        </p>
                        <h1>Responsável pelas negociações, vendas, fechamento de contratos, setor jurídico e atendimento ao cliente.</h1>
                    </article>

                    <article className="testemunhas-article">
                        <span className="image"><img src="images/team/clepson.jpeg" /></span>
                        <p>
                            <span className="name">Clepson</span>
                            <span>Desenvolvedor</span>
                        </p>
                        <h1>Responsável por toda a parte operacional de criação de códigos, implementação e soluções programáticas.</h1>
                    </article>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AboutUs
