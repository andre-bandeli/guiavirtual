import React from 'react'
import './titleContainerSobre.scss'

const TitleContainerSobre = ({ title, subtitle}) => {
  return (
    <div className="titleContainerSobre">
      <h2>
        {title}
      </h2>
      <h3>
        {subtitle}
      </h3>
    </div>
  )
}

export default TitleContainerSobre;