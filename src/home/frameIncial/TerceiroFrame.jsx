import React from 'react'
import './frameInicial.scss'
import TitleContainer from '../titleContainer/TitleContainer'

import video from './video.mp4'
import cena2 from './cena2.png'

export default function TerceiroFrame() {
  return (
    <div className='frameInicial'>
       <TitleContainer 
            title="Juntar as Peças" 
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
        <div className='apresentacaoPesquisaContainer'>

        </div>

      <div className="containerIframe">
      <iframe src="https://www.youtube.com/embed/TCK2vsvA_co" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>
  )
}
