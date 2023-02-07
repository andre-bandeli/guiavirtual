import React from 'react'
import './titleContainer.scss'

const TitleContainer = ({ title, subtitle}) => {
  return (
    <div className="titleContainer">
      <h2>
        {title}
      </h2>
      <h3>
        {subtitle}
      </h3>
    </div>
  )
}

export default TitleContainer;