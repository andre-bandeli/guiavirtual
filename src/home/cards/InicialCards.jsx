import React from 'react'
import './InicialCards.scss'
import coracao from './coracao.png'

export default function InicialCards() {


  return (
    <div className="containerCards">
        <div className='InicialCards'>
                <div className="boxInicial">
                    <img src={coracao} alt="" />
                    <h3>Conheça o centro de acolhimento para mulheres</h3>
  
                </div>
                <div className="boxInicial">
                    <img src={coracao} alt="" />
                    <h3>Conheça o centro de acolhimento para mulheres</h3>
                </div>
                <div className="boxInicial">
                    <img src={coracao} alt="" />
                    <h3>Conheça o centro de acolhimento para mulheres</h3>
                </div>
                <div className="boxInicial">
                    <img src={coracao} alt="" />
                    <h3>Conheça o centro de acolhimento para mulheres</h3>
                </div>

        </div>
    </div>

  )
}
