import React from 'react'
import './video.scss'

export default function Video() {
  return (
    <div className='videos'>
        <iframe  src="https://www.youtube.com/embed/2hyT0VCDasY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}
