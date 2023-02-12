import React from 'react'
import './noticias.scss'
import TitleContainer from '../titleContainer/TitleContainer'
import imagem3 from './assets/imagem3.webp'


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
                        <h3>Política Nacional de Enfrentamento à Violência Contra as Mulheres</h3>
                    </div>
                </div>
            <div class="news-item">
                <div className="text">
                    <h3>Política Nacional de Enfrentamento à Violência Contra as Mulheres</h3>
                </div>
            </div>
            <div class="news-item">
                <div className="text">
                    <h3>Manual para Atendimento às Vítimas de Violência na Rede de Saúde Pública do DF (2009)</h3>
                </div>
            </div>
            <div class="news-item">
                <div className="text">
                    <h3>Música P.U.T.A. Composição de Mulamba</h3>
                </div>
            </div>
            <div class="news-item">
                <div className="text">
                    <h3>Conheça mais sobre a Pesquisa acessando o site da FCM</h3>
                </div>
            </div>
            <div class="news-item">
                <div className="text">
                    <h3>Machistômetro</h3>
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}
