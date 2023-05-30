import React from 'react'
import './hero.scss'
import './responsive.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";


export default function Hero() {

  return (
    <div className='heroContainer'>
        <div className="container-lg-12">
          <div className="container">
            <h1>Guia virtual de atendimento à mulheres vítimas de violência</h1>
               <h2>Um guia virtual para atendimento de mulheres vítimas de violência como produto do Mestrado em Saúde Coletiva
                 pela Faculdade de Ciências Médicas da Unicamp</h2>
                <button className='primary-button'>
                  <Link to="/">ler mais</Link>
                </button>
          </div>
        </div>
    </div>
  )
}