import React from 'react'
import './frameInicial.scss'
import TitleContainer from '../titleContainer/TitleContainer'

export default function SegundoFrame() {
  return (
    <div className='frameInicial'>
      <TitleContainer title="Acolher"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
      <div className='apresentacaoPesquisaContainer'>

      </div>

      <div className="containerIframe">
        <iframe src="https://www.youtube.com/embed/TCK2vsvA_co" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>

    </div>
  )
}
