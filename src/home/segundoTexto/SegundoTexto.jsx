import React from 'react'
import './segundoTexto.scss'
import imagem_1 from '../../assets/img1.png'
import imagem_2 from '../../assets/img2.png'
import TitleContainer from '../titleContainer/TitleContainer'


export default function SegundoTexto() {
  return (
    <div className='segundoTexto'>
      <TitleContainer title="Introdução"/>
        <div className="container">
            <div className="col-6">
              <p>
                <h3>
                Todos temos impulsos agressivos em alguma medida, mas direcionar esses impulsos na forma de violência é 
                outra história. A manifestação da agressividade da forma de VIOLÊNCIA significa utilizar PODER, força física, influências e 
                privilégios para DOMINAR alguém ou um grupo de pessoas e essa dominação provoca danos significativos: diminui a qualidade de vida de pessoas e 
                famílias, provoca morte, doenças, lesões, problemas emocionais, psicológicos,
                 espirituais, enfim… é um problema que precisa ser tratado intersetorialmente, multidisciplinarmente.
                </h3>
              </p>

            </div>
            <div className="col-6">
                <img src={imagem_1} alt="" />
            </div>
            <div className="col-6">
              <img src={imagem_2} alt="" />
            </div>
            <div className="col-6">
                <p>
                  <h3>A violência é social e histórica: em diferentes sociedades e em diferentes tempos, aparece sob formas diferentes, e aquelas formas que 
                    persistem por muuuito tempo são consideradas violência cultural. Essa violência cultural é tão...CULTURAL, 
                    assimilada, aprendida de maneira intencional ou não intencional, que é comum nem percebermos direito quando acontece (MINAYO, 2007).  Portanto, nosso primeiro passo aqui vai ser tentar identificar algumas formas de violência – no caso, especificamente, contra a 
                   mulher – para depois pensar qual papel podemos exercer na cultura, que é dinâmica, viva, e se transforma constantemente.</h3>
                </p>
            </div>
        </div>
    </div>
  )
}
