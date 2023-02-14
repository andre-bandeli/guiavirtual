import React from 'react'
import './noticias.scss'
import TitleContainer from '../titleContainer/TitleContainer'

import { Link } from "react-router-dom";


export default function Noticias() {
  return (
    <div className='noticiasHome'>
        <TitleContainer 
            title="Conteúdos Extras" 
            subtitle="Conteúdos complementares para aprimorar suas habilidades e conhecimentos" />
        <div className="containerNoticiasHome">

            <div class="news-grid">
                <div class="news-item">
                    <div className="text">
                        <Link to="https://www.graduseditora.com/_files/ugd/c7d661_e05ce4f966e844c79715bd6bb94ccdad.pdf">Violência de Gênero</Link>
                    </div>
                </div>
            <div class="news-item">
                <div className="text">
                    <Link to="https://www12.senado.leg.br/institucional/omv/entenda-a-violencia/pdfs/politica-nacional-de-enfrentamento-a-violencia-contra-as-mulheres">Política Nacional de Enfrentamento à Violência Contra as Mulheres</Link>
                </div>
            </div>
            <div class="news-item">
                <div className="text">
                    <Link to="https://bvsms.saude.gov.br/bvs/publicacoes/manual_atendimento_vitimas_violencia_saude_publica_DF.pdf">Manual para Atendimento às Vítimas de Violência na Rede de Saúde Pública do DF (2009)</Link>
                </div>
            </div>
            <div class="news-item">
                <div className="text">
                    <Link to="https://www.youtube.com/watch?v=ZdpZ-93uUnY">Música P.U.T.A. Composição de Mulamba</Link>
                </div>
            </div>
            <div class="news-item">
                <div className="text">
                    <Link to="https://www.fcm.unicamp.br/imprensa/">Conheça mais sobre a Pesquisa acessando o site da FCM</Link>
                </div>
            </div>
            <div class="news-item">
                <div className="text">
                    <Link to="https://catarinas.info/cuidado-reaja-e-busque-ajuda-conheca-os-sinais-de-alerta-no-machistometro/">Machistômetro</Link>
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}
