import React from 'react'
import './textoContainer.scss'
import TitleContainer from '../titleContainer/TitleContainer'


export default function PrimeiroTextoContainer() {
  return (
    <div className='textosContainerHeader'>
       <TitleContainer 
            title="Introdução" 
            subtitle="" />

      <div className="containerText">
        <div className="title-text">
            <h2> 
              <p>
                  Todos temos impulsos agressivos em alguma medida, mas direcionar esses impulsos na forma de violência é outra história. A
                  manifestação da agressividade da forma de VIOLÊNCIA significa utilizar PODER, força física, influências e privilégios para 
                  DOMINAR alguém ou um grupo de pessoas e essa dominação provoca danos significativos: diminui a qualidade de vida de pessoas e 
                  famílias, provoca morte, doenças, lesões, problemas emocionais, 
                  psicológicos, espirituais, enfim… é um problema que precisa ser tratado intersetorialmente, multidisciplinarmente.
              </p>

                <p>
                   A violência é social e histórica: em diferentes sociedades e em diferentes tempos, aparece sob formas diferentes, e aquelas formas
                   que persistem por muuuito tempo são consideradas violência cultural. Essa violência cultural é tão...CULTURAL,
                   assimilada, aprendida de maneira intencional ou não intencional, que é comum nem percebermos direito quando acontece (MINAYO, 2007).
                </p>
                <p>
                   Portanto, nosso primeiro passo aqui vai ser tentar identificar algumas formas de violência – no caso, especificamente, contra a 
                   mulher – para depois pensar qual papel podemos exercer na cultura, que é dinâmica, viva, e se transforma constantemente.
                </p>
          </h2>
        </div>
      </div>


    </div>
  )
}
