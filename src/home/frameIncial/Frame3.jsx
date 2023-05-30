import React from 'react'
import './frameInicial.scss'
import './responsive.css'
import TitleContainer from '../titleContainer/TitleContainer'


export default function Frame3() {
  return (
    <div className='frameInicial'>
      <TitleContainer title="Juntar as Peças"
        subtitle="Uma reflexão sobre o impacto da violência contra mulheres na saúde coletiva" />
      <div className='apresentacaoPesquisaContainer'></div>

      <div className="containerIframeInicial">
        <div className="text">

          <h2> <span>CENA 3</span> <br /> Juntar as Peças</h2>
          <h3>Vídeo criado por Márcia Rodrigues Rocha, mulher feminista e fonoaudióloga sanitarista,
            Inayá Ananias Weijenborg, psicóloga e mestranda em Saúde Coletiva FCM/UNICAMP,
            e editado por Rafael Marques da Silva, equipe da Coordenadoria de Apoio Acadêmico-CAAC/FCM/UNICAMP.
          </h3>

        </div>

        <div className="iframe">
        <iframe src="https://www.youtube.com/embed/r84xxU4E2Ho" title="YouTube video player" async
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

      </div>
    </div>
  )
}