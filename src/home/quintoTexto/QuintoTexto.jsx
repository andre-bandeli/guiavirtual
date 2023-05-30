import React from 'react'
import './quintoTexto.scss'
import imagem_3 from '../../assets/img3.png'
import TitleContainer from '../titleContainer/TitleContainer'


export default function QuintoTexto() {
  return (
    <div className='quintoTexto'>
      <TitleContainer title="Concluindo"
      subtitle="Através das reflexões propostas aqui, o que podemos concluir?
      "/>
        <div className="container">
        <div className="col-6">
                <p>
                  <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</h3>
                </p>
            </div>
            <div className="col-6">
                <p>
                  <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</h3>
                </p>
            </div>
            <div className="col-6">
                <p>
                  <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</h3>
                </p>
            </div>
            <div className="col-6">
                <p>
                  <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</h3>
                </p>
            </div>
            <div className="col-8">
               <img src={imagem_3} alt="" />
               <button className='btn'>

               </button>
            </div>
            <div className="col-6">
                <p>
                  <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</h3>
                </p>
            </div>
            <div className="col-6">
                <p>
                  <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</h3>
                </p>
            </div>
            <div className="col-6">
                <p>
                  <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</h3>
                </p>
            </div>
            <div className="col-6">
                <p>
                  <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</h3>
                </p>
            </div>
        </div>
    </div>
  )
}
