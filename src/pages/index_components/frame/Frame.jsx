import React from 'react'
import './frame.scss'
import './responsive.css'
import TitleContainer from '../../../components/titleContainer/TitleContainer'

export default function Frame({tag, title, subtitle, videoSrc }) {
  return (
    <div className='frame'>

      <div className="containerFrame">
        <div className="iframe">
          <iframe src={videoSrc} title="YouTube video player" async frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}
