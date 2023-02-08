import React from 'react'
import './textoContainer.scss'
import TitleContainer from '../titleContainer/TitleContainer'


export default function TextoContainerFinal() {
  return (
    <div className='textosContainerHeaderFinal'>
       <TitleContainer 
            title="Concluindo" 
            subtitle="Está dando para criar imagens, rememorar cenas ou remeter a vivências no seu ambiente de trabalho?" />

      <div className="containerTextFinal">
        <div className="title-textFinal">
            <h2> A proposta é pensar especificamente na violência contra a mulher enquanto mulher, mas sabemos que é um 
       fenômeno que se relaciona com outras violências. De acordo com o Manual para Atendimento às Vítimas de Violência
       na Rede de Saúde Pública do DF (2009), além da violência contra a mulher existe a violência contra crianças e adolescentes, 
       contra pessoas idosas, violência intrafamiliar, negligência. Síndrome de Munchausen por Procuração, auto-extermínio/suicídio, 
       outras formas de violência de gênero (que não se restringe à díade homem-mulher —
       como retrata o livro sobre violência de gênero na aba "conteúdos úteis")
          </h2>
        </div>
        <div className="title-textFinal">
          <h2>
          Além desse manual, 
       podemos pensar em violência contra pessoas com deficiência, abandono, violência obstétrica, violência política, 
       violência contra orientação sexual e identidade de gênero, RACISMO… E todas as violências aqui listadas se relacionam. 
          Essa violência cultural que perpassa por anos e anos, gerações e gerações, tem um movimento cíclico: aprendemos e reproduzimos 
       padrões de comportamento violentos, alimentando essas formas prejudiciais de se relacionar. É importante perceber o plano de 
       fundo maior das relações sociais, históricas, culturais, mas como esta pesquisa de mestrado se ateve somente à violência contra mulher,
       vamos continuar desenvolvendo aqui essa questão em mais detalhes.
              </h2>
        </div>
       
      </div>


    </div>
  )
}
