import React from 'react'
import './primeiroTexto.scss'
import './responsive.css'

import { Link } from "react-router-dom";

export default function PrimeiroTexto() {


  return (
    <div className="primeiro-texto" id='first-text'>
        <div className="container">
          <h2>Política, Planejamento e Gestão</h2>
            <p>
              <h3>
                Este guia virtual faz parte de uma pesquisa maior chamada Implementação de Ambulatório a Pessoas Expostas a Situações de Violência, orientada pela Profa Dra Rosana Teresa Onocko-Campos, produzida no mestrado profissional em Saúde Coletiva da UNICAMP. 
                Destinado aos trabalhadores de Ilha Soleira/SP, o produto técnico inclui links para materiais sobre o tema e visa estimular reflexões.
              </h3></p>

              <p><h3>
                É uma elaboração do conhecimento produzido em uma pesquisa de campo sobre atendimento a situações de violência de gênero, destinado a profissionais que trabalham em serviços públicos como apoio à formação continuada. As narrativas da pesquisa abordaram as dimensões técnica e afetiva, 
                e o guia visa unir essas duas dimensões de forma acessível, utilizando tecnologia libertadora e adaptada à pandemia de Covid-19.
              </h3></p>
              
              <div className="btn">
                  <button className='secundary-button'>
                    <Link to="/">leia mais</Link>
                  </button>
              </div>
        </div>
    </div>

  )
}
