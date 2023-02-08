import React from 'react'
import './frameInicial.scss'
import TitleContainer from '../titleContainer/TitleContainer'

export default function FrameInicial() {
  return (
    <div className='frameInicial'>
       <TitleContainer 
            title="Título da pesquisa" 
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
        <div className='apresentacaoPesquisaContainer'></div>

      <div className="containerIframeInicial">
          <div className="text">

            <h2>What is Lorem Ipsum?</h2>
            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
               standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
            <h4>Participantes</h4>
            <button className='btn-iframe-share'>compartilhar</button>

          </div>
          <div className="iframe">
          <iframe src="https://www.youtube.com/embed/fZLjyS6YZXs" title="YouTube video player" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
      </div>

    </div>
  )
}
