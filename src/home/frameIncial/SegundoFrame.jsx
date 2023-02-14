import React from 'react'
import './frameInicial.scss'
import TitleContainer from '../titleContainer/TitleContainer'

export default function SegundoFrame() {
  return (
    <div className='frameInicial'>
      <TitleContainer title="Acolher"
        subtitle="Cena 2: Uma reflexão sobre o impacto da violência contra mulheres na saúde coletiva" />
      <div className='apresentacaoPesquisaContainer'>

      </div>

      <div className="containerIframe">
      <iframe src="https://www.youtube.com/embed/tI_tOSg7LVY" title="YouTube video player" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>
  )
}
