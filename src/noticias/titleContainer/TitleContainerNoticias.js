import React from 'react'
import './titleContainerNoticias.scss'

const TitleContainerNoticias = ({ title, subtitle}) => {
  return (
    <div className="titleContainerNoticias">
      <h2>
        {title}
      </h2>
      <h3>
        {subtitle}
      </h3>
    </div>
  )
}

export default TitleContainerNoticias;