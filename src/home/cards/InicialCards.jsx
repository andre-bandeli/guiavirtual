import React from 'react'
import './InicialCards.scss'

export default function InicialCards() {


    const data = [1, 2, 3, 4];

  return (
    <div className="containerCards">
        <div className='InicialCards'>

            {data.map(item => (
                <div className="boxInicial">
                    {item}
                </div>
            ))}

        </div>
    </div>

  )
}
