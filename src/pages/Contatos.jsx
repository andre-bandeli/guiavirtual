import React from 'react'
import './contatos_components/contatos.scss'
import './responsive.css'
import TitleContainer from '../titleContainer/TitleContainer'
import { Link } from "react-router-dom";

import contato from '../../assets/contato.webp'
import site from '../../assets/site.webp'

export default function Contatos() {
  return (
    <div className='contatosHome'>
       <TitleContainer 
            title="Contatos" 
            subtitle="Confira aqui alguns sites e telefones que podem ser úteis" />
        <div className="containerContatosHome">
            <div className="containerBoxHome">
                <img src={site} alt="" />
                <Link to="https://www.ilhasolteira.sp.gov.br/" target='_blank'>Prefeitura Municipal de Ilha Solteira</Link>

            </div>
            <div className="containerBoxHome">
                <img src={site} alt="" />
                <Link to="https://www.institutomariadapenha.org.br/" target='_blank'>Instituto Maria da Penha</Link>
              </div>
              <div className="containerBoxHome">
                <img src={site} alt="" />
                <Link to="https://www.unicamp.br/unicamp/" target='_blank'>Site da Unicamp</Link>
              </div>
              <div className="containerBoxHome">
                <img src={site} alt="" />
                <Link to="https://www.naosecale.ms.gov.br/violencia-contra-a-mulher/" target='_blank'>Não se Cale: Violência contra a mulher - ms.gov.br</Link>
                
              </div>
              <div className="containerBoxHome">
                <img src={contato} alt="" />
                <h4>Disque 190 - Emergências</h4>
              </div>
              <div className="containerBoxHome">
                <img src={contato} alt="" />
                <h4>Disque 180 - denúncias de violência contra a mulher.</h4>
              </div>
        </div>
    </div>
  )
}
