import React from 'react'
import './frameInicial.scss'
import TitleContainer from '../titleContainer/TitleContainer'

export default function SegundoFrame() {
  return (
    <div className='frameInicial'>
      <TitleContainer title="Acolher"
        subtitle="Essas violências - pequenas e diárias - que você precisa ter um ouvido muito atento [...] " />
      <div className='apresentacaoPesquisaContainer'>

      </div>

      <div className="containerIframe">
      <iframe src="https://www.youtube.com/embed/tI_tOSg7LVY" title="YouTube video player" async
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>
  )
}
