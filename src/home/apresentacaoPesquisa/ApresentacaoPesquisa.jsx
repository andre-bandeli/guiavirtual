import React from 'react'
import './apresentacaoPesquisa.scss'
import TitleContainer from '../titleContainer/TitleContainer'

import { Link } from "react-router-dom";

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
                      <Link to="https://www.fcm.unicamp.br/fcm/laboratorio-saude-coletiva-e-saude-mental-interfaces">Sobre a Pesquisa</Link>
                  </button>
                  <button className='btn-info'>
                  
                      <Link to="https://www.fcm.unicamp.br/fcm/pesquisa/publicacoes">Publicações</Link>
                  </button>
                  <button className='btn-info'>
                
                      <Link to="https://www.fcm.unicamp.br/fcm/laboratorio-saude-coletiva-e-saude-mental-interfaces/projetos">Projetos</Link>
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
                      O grupo de pesquisa "Saúde Coletiva e Saúde Mental: Interfaces", sediado no Departamento de Saúde Coletiva da Universidade Estadual de Campinas,
                      tem como objetivo articular estudos, reflexões, pesquisas e formação na área da Saúde Coletiva e Saúde Mental. Além disso, o grupo busca realizar 
                      discussões teóricas sobre as políticas públicas de 
                      saúde mental, incluindo a avaliação de Centros de Atenção Psicossocial (Caps) e novos arranjos na atenção básica em saúde.
                      </h4>
                      <button className='btn-introducao'>
                          <Link to="https://www.fcm.unicamp.br/fcm/laboratorio-saude-coletiva-e-saude-mental-interfaces">Sobre a Pesquisa</Link>  
                      </button>
                </div>
          </div>
    </div>

  )
}
