import React from 'react'
import './apresentacaoPesquisa.scss'
import TitleContainer from '../titleContainer/TitleContainer'


export default function ApresentacaoPesquisa() {


  return (
    <div className="apresentacaoPesquisa">
        <TitleContainer 
            title="Política, Planejamento e Gestão" 
            subtitle="Um guia virtual para atendimento de mulheres vítimas de violência como produto do Mestrado em Saúde Coletiva" />
        <div className='apresentacaoPesquisaContainer'>
            <h4>
              <p>
                Este guia virtual é um produto técnico produzido no mestrado profissional em Saúde Coletiva da UNICAMP, numa pesquisa
                orientada pela Profa Dra Rosana Teresa Onocko-Campos e compõe uma pesquisa bem maior chamada 
                Implementação de Ambulatório a Pessoas Expostas a Situações de Violência, com vários mestrandos, doutorandos, residentes
                Pensando especialmente para os trabalhadores do município de Ilha Soleira/SP, espero que este produto técnico possibilite reflexões 
                através do texto e dos links de acesso a materiais sobre o tema. Atenciosamente, Inayá AW
              </p>
              <div className="container">
                  <button className='btn-info'>
                    sobre a pesquisa
                  </button>
                  <button className='btn-info'>
                    participantes
                  </button>
                  <button className='btn-info'>
                    saúde coletiva
                  </button>
                  <button className='btn-info'>
                    resultados e discussões
                  </button>
                  <button className='btn-info'>
                    premiações e citações
                  </button>
                  <button className='btn-info'>
                    entre em contato
                  </button>
              </div>
              <p>
                Este guia reúne material bibliográfico e narrativas produzidas durante a pesquisa de campo. Não é um resumo da dissertação 
                – essa pode ser acessada no link a seguir – mas uma elaboração do conhecimento produzido na investigação. É destinado a profissionais
                que trabalham em serviços públicos 
                como um instrumento de apoio à formação continuada sobre atendimento a situações de violência de gênero.
                As narrativas produzidas na pesquisa trouxeram duas dimensões importantes: técnica e afetiva. Por isso, a maior colaboração que consigo pensar 
                em trazer é juntar essas duas dimensões – técnica e afetiva – em um material de fácil veiculação, utilizando a parte mais libertadora e ramificada da tecnologia, 
                tecnologia essa que na pandemia de Covid-19 trouxe significados e afetações diversos.
              </p>
            </h4>
          </div>
            <div className="textIntroducaoContainer">
                <div className="imagemText">
    
                </div>
                <div className="textIntroducao">
                      <h3>Conheça mais sobre a pesquisa</h3>
                      <h4>
                        It is a long established fact that a reader will be distracted by the 
                        readable content of a page when looking at its layout. The point of using 
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                         to using 'Content here, content here', making it look like readable English. Many 
                         desktop publishing packages and web page editors now use.
                      </h4>
                      <button className='btn-introducao'>
                          acessar pesquisa
                      </button>
                </div>
          </div>
    </div>

  )
}
