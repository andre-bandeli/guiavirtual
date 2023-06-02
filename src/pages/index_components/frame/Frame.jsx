import React from 'react'
import './frame.scss'
import './responsive.css'
import TitleContainer from '../../../components/titleContainer/TitleContainer'

export default function Frame({tag, title, subtitle, videoSrc }) {
  return (
    <div className='frame'>
      <TitleContainer title={title} />

      <div className="containerFrame">
        <div className="text">
          <div className="container">
            <h2><span>{tag}</span></h2>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </div>  
        </div>

        <div className="iframe">
          <iframe src={videoSrc} title="YouTube video player" async frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}
