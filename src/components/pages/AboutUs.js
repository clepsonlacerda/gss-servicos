import React, { useEffect } from 'react'
import Footer from '../Footer'
import './AboutUs.css'

function AboutUs() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="section testemunhas bg-fixed">
                <div className="content">
                    <header className="section-header">
                        <h1>Sobre Nós</h1>
                        <p>
                            Somos uma empresa especialista em  gerar oportunidades e trazer clientes de forma relevante pro seu negócio
                            do Tráfego pago 
                        </p>
                    </header>

                    <header className="section-header">
                        <h1>Equipe</h1>
                    </header>

                    <article className="testemunhas-article">
                        <div className="info">
                            <span className="image"><img src="images/team/wesley.jpeg" /></span>
                            <p>
                                <span className="name">Wesley Saraiva</span>
                                <span className='position'>CEO e Gestor de tráfego</span>
                            </p>
                        </div>
                        <div className="text">
                            <h1>Diretor Executivo e responsável pelo o estudo de públicos para o planejamento, criação e otimização de campanhas de tráfego pago.</h1>
                        </div>
                    </article>

                    <article className="testemunhas-article">
                        <div className="info">
                            <span className="image"><img src="/images/team/gabriel.jpeg" /></span>
                            <p>
                                <span className="name">Gabriel Alcântara</span>
                                <span className='position' >Designer e Gestor de tráfego </span>
                            </p>
                        </div>
                        <div className="text">
                            <h1>Responsável pelos conceitos artísticos e funcionais e faz o estudo de públicos para o planejamento, criação e otimização de campanhas de tráfego pago.</h1>
                        </div>
                    </article>

                    <article className="testemunhas-article">
                        <div className="info">
                            <span className="image"><img src="/images/team/saulo.jpeg" /></span>
                            <p>
                                <span className="name">Saulo Araújo</span>
                                <span className='position' >Consultor</span>
                            </p>
                        </div>
                        <div className="text">
                            <h1>Responsável pelas negociações, vendas, fechamento de contratos, setor jurídico e atendimento ao cliente.</h1>
                        </div>
                    </article>

                    <article className="testemunhas-article">
                        <div className="info">
                            <span className="image"><img src="images/team/clepson.jpeg" /></span>
                            <p>
                                <span className="name">Clepson Lacerda</span>
                                <span className='position' >Desenvolvedor</span>
                            </p>
                        </div>
                        <div className="text">
                            <h1>Responsável por toda a parte operacional de criação de códigos, implementação e soluções programáticas.</h1>
                        </div>
                    </article>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AboutUs
