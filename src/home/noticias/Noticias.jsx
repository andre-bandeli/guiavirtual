import React from 'react'
import './noticias.scss'
import TitleContainer from '../titleContainer/TitleContainer'



export default function Noticias() {
  return (
    <div className='noticias'>
        <TitleContainer 
            title="Conteúdos Extras" 
            subtitle="Está dando para criar imagens, rememorar cenas ou remeter a vivências no seu ambiente de trabalho?" />
        <div className="containerNoticias">

            <div class="news-grid">
                <div class="news-item">
                    <h3>Título da Notícia 1</h3>
                    <p>Resumo da Notícia 1</p>
                </div>
            <div class="news-item">
                <h3>Título da Notícia 2</h3>
                <p>Resumo da Notícia 2</p>
            </div>
            <div class="news-item">
                <h3>Título da Notícia 2</h3>
                <p>Resumo da Notícia 2</p>
            </div>
            <div class="news-item">
                <h3>Título da Notícia 2</h3>
                <p>Resumo da Notícia 2</p>
            </div>
            <div class="news-item">
                <h3>Título da Notícia 2</h3>
                <p>Resumo da Notícia 2</p>
            </div>
            <div class="news-item">
                <h3>Título da Notícia 2</h3>
                <p>Resumo da Notícia 2</p>
            </div>

            </div>
        </div>
    </div>
  )
}
