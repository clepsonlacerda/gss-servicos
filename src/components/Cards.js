import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
        <h1>Nossas Especializações!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem src="images/public-alvo.png"
                              text='Seu produto ou negócio chegará as pessoas certas.'
                              label="Público Alvo"
                              path="/services" />
                    <CardItem src='images/publicacoes.png'
                              text='Criamos as melhores publicações para sua rede social.'
                              label='Publicações'
                              path='/services' />
                </ul>
                <ul className='cards__items'>
                  <CardItem
                    src='images/visibilidade.png'
                    text='Com tráfego pago, um anúncio pode maximizar a visibilidade do seu empreendimento.'
                    label='Visibilidade'
                    path='/services'
                  />
                  <CardItem
                    src='images/aprimoramento.png'
                    text='Utilizamos as melhores ferramentas de tráfego pago com uma ótima capacidade de segmentação.'
                    label='Aprimoramento'
                    path='/products'
                  />
                  <CardItem
                    src='images/baixo-investimento.png'
                    text='Para começar, não são necessárias grandes quantidades de investimento.'
                    label='Baixo investimento'
                    path='/sign-up'
                  />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards