import React from 'react'
import './noticias.scss'
import TitleContainer from '../titleContainer/TitleContainer'
import imagem3 from './assets/imagem3.webp'


export default function Noticias() {
  return (
    <div className='noticiasHome'>
        <TitleContainer 
            title="Conteúdos Extras" 
            subtitle="Está dando para criar imagens, rememorar cenas ou remeter a vivências no seu ambiente de trabalho?" />
        <div className="containerNoticiasHome">

            <div class="news-grid">
                <div class="news-item">
                    <h3>Política Nacional de Enfrentamento à Violência Contra as Mulheres</h3>

                </div>
            <div class="news-item">
                <h3>Manual para Atendimento às Vítimas de Violência na Rede de Saúde Pública do DF</h3>
            </div>
            <div class="news-item">
                <h3>Título da Notícia 2</h3>
                <p>Resumo da Notícia 2</p>
            </div>
            <div class="news-item">
                <h3>Violência de Gênero</h3>
            </div>
            <div class="news-item">
                <h3>Artigo de Minayo</h3>
                <p>Resumo da Notícia 2</p>
            </div>
            <div class="news-item">
                <h3>Machistômetro</h3>
                <p>Resumo da Notícia 2</p>
            </div>

            </div>
        </div>
    </div>
  )
}
