import React from 'react'
import './contatos.scss'
import TitleContainer from '../titleContainer/TitleContainer'

import phone from './phone.png'

export default function Contatos() {
  return (
    <div className='contatosHome'>
       <TitleContainer 
            title="Contatos" 
            subtitle="A tipificação apresentada a seguir é proposta pela Política Nacional de Enfrentamento à Violência Contra as Mulheres" />
        <div className="containerContatosHome">
            <div className="containerBoxHome">
                <img src={phone} alt="" />
                <h4>Prefeitura de Araquaia</h4>
            </div>
            <div className="containerBoxHome">
                <img src={phone} alt="" />
                <h4>Prefeitura de Araquaia</h4>
              </div>
              <div className="containerBoxHome">
                <img src={phone} alt="" />
                <h4>Prefeitura de Araquaia</h4>
              </div>
              <div className="containerBoxHome">
                <img src={phone} alt="" />
                <h4>Prefeitura de Araquaia</h4>
              </div>
              <div className="containerBoxHome">
                <img src={phone} alt="" />
                <h4>Prefeitura de Araquaia</h4>
              </div>
              <div className="containerBoxHome">
                <img src={phone} alt="" />
                <h4>Prefeitura de Araquaia</h4>
              </div>
        </div>
    </div>
  )
}
