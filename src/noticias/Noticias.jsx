import React from 'react'
import Navbar from '../navbar/Navbar';
import NavSuperior from '../navbar/NavSuperior';
import './noticias.scss'
import Footer from '../footer/Footer'
import TitleContainerNoticias from './titleContainer/TitleContainerNoticias';

import { Link } from "react-router-dom";


import news from './news.png'
import imagem1 from '../home/noticias/assets/imagem1.webp'
import imagem3 from '../home/noticias/assets/imagem3.webp'
import imagem2 from '../home/noticias/assets/imagem2.webp'
import imagem4 from '../home/noticias/assets/imagem4.webp'
import pesquisa from '../home/noticias/assets/pesquisa.webp'
import img3 from '../home/noticias/assets/img-3.webp'
import fiocruz from '../home/noticias/assets/fiocruz.jpg'
import noticiaglobo from '../home/noticias/assets/foto-1.webp'
import machistometro from '../home/noticias/assets/machistometro.webp'
import gov from '../home/noticias/assets/gov.png'
import noticia7 from '../home/noticias/assets/noticia7.png'
import noticia8 from '../home/noticias/assets/noticia8.png'

import pdf from './pdf.png'
import contato from './contato.png'
import mensagem from './mensagem.png'


export default function Noticias() {
  return (
    <div className='noticias'>
        <NavSuperior/>
        <Navbar/>
        <div className="containerNoticias">
        <TitleContainerNoticias
            title="Noticias e Conteúdos Extras" 
            subtitle="Conheça um pouco mais sobre a pesquisa e sobre este guia virtual." />

            <div className="container-md-noticias">
                <div className="news">

                  <div className="boxNews">
                        <img src={imagem1} alt="" />
                        <div className='link'>

                            <Link to="https://www.institutomariadapenha.org.br/lei-11340/tipos-de-violencia.html">Política Nacional de Enfrentamento à Violência Contra as Mulheres</Link>
                        </div>
                       

                  </div>
                  <div className="boxNews">
                      <img src={imagem2} alt="" />
                     <div className='link'>
                            <Link to="https://www.institutomariadapenha.org.br/lei-11340/tipos-de-violencia.html">Tipos de Violência: Instituto Maria da Penha</Link>
                        </div>
                    </div>
                    <div className="boxNews">
                          <img src={imagem3} alt="" />
                       <div className='link'>
                            <Link to="https://www.institutomariadapenha.org.br/lei-11340/tipos-de-violencia.html">Manual para Atendimento às Vítimas de Violência na Rede de Saúde Pública do DF (2009)</Link>
                        </div>
                    </div>
                    <div className="boxNews">
                          <img src={imagem4} alt="" />
                       <div className='link'>
                            <Link to="https://www.institutomariadapenha.org.br/lei-11340/tipos-de-violencia.html">Música P.U.T.A. Altoria de Mulamba</Link>
                        </div>
                    </div>
                    <div className="boxNews">
                          <img src={pesquisa} alt="" />
                       <div className='link'>
                            <Link to="https://www.institutomariadapenha.org.br/lei-11340/tipos-de-violencia.html">Conheça o grupo de pesquisa em Saúde Coletiva da FCM</Link>
                        </div>
                    </div>
                    <div className="boxNews">
                          <img src={noticiaglobo} alt="" />
                       <div className='link'>
                            <Link to="https://g1.globo.com/sp/sao-paulo/noticia/2022/03/31/8-em-cada-dez-vitimas-de-violencia-contra-mulher-sofreram-abusos-psicologicos-na-pandemia-diz-projeto-que-atua-com-rede-de-voluntarias.ghtml">
                            8 em cada dez vítimas de violência contra mulher sofreram abusos psicológicos na pandemia, diz [...] </Link>
                        </div>
                    </div>                 
                    <div className="boxNews">
                          <img src={img3} alt="" />
                       <div className='link'>
                            <Link to="https://brasil.un.org/pt-br/93163-campanha-voce-nao-esta-sozinha-rede-de-protecao-e-essencial-para-acolher-mulheres-vitimas-de">Campanha Você Não Está Sozinha: Rede de proteção é essencial para acolher mulheres vítimas de violência</Link>
                        </div>
                    </div>
                    <div className="boxNews">
                          <img src={fiocruz} alt="" />
                       <div className='link'>
                            <Link to="https://portal.fiocruz.br/noticia/violencia-contra-mulheres-no-contexto-da-covid-19">Violência contra as mulheres no contexto da Covid-19 - Publicação FioCruz</Link>
                        </div>
                    </div>
                    <div className="boxNews">
                          <img src={machistometro} alt="" />
                       <div className='link'>
                            <Link to="https://www.institutomariadapenha.org.br/lei-11340/tipos-de-violencia.html">Machistômetro</Link>
                        </div>
                    </div>
                    <div className="boxNews">
                          <img src={gov} alt="" />
                       <div className='link'>
                            <Link to="https://www.institutomariadapenha.org.br/lei-11340/tipos-de-violencia.html">Tipos de Violência: Instituto Maria da Penha</Link>
                        </div>
                    </div>
                    <div className="boxNews">
                          <img src={noticia7} alt="" />
                          <div className='link'>
                            <Link to="https://www.institutomariadapenha.org.br/lei-11340/tipos-de-violencia.html">Tipos de Violência: Instituto Maria da Penha</Link>
                        </div>
                          
                    </div>
                    <div className="boxNews">
                          <img src={noticia8} alt="" />
                         <div className='link'>
                            <Link to="https://www.institutomariadapenha.org.br/lei-11340/tipos-de-violencia.html">Tipos de Violência: Instituto Maria da Penha</Link>
                        </div>
                    </div>
                </div>
                <div className="relacionados">
                    <h2>
                      Conteúdos relacionados
                    </h2>

                    <ul>
                      <li>
                        <div className="icon">
                            <img src={pdf} alt="" />
                        </div>
                         <div className="text">
                          <Link to="https://www.fcm.unicamp.br/fcm/laboratorio-saude-coletiva-e-saude-mental-interfaces">Conheça mais sobre a pesquisa clicando aqui</Link>

                         </div>
                      </li>
                      <li>
                         <div className="icon">
                            <img src={mensagem} alt="" />
                        </div>
                         <div className="text">
                          <Link to="/mensagem">Em caso de dúvidas, envie uma mensagem</Link>

                         </div>
                      </li>
                      <li>
                         <div className="icon">
                            <img src={contato} alt="" />
                        </div>
                         <div className="text">
                          <Link to="/contatos">Confira contatos que podem ser úteis</Link>

                         </div>
                      </li>
                      <li>
                         <div className="icon">
                            <img src={news} alt="" />
                        </div>
                         <div className="text">
                          <Link to="/">Casos de violência contra mulher aumentam na pandemia [...]</Link>

                         </div>
                      </li>
                      <li>
                         <div className="icon">
                            <img src={news} alt="" />
                        </div>
                         <div className="text">
                          <Link to="https://www12.senado.leg.br/institucional/omv/entenda-a-violencia/pdfs/politica-nacional-de-enfrentamento-a-violencia-contra-as-mulheres">Politica Nacional de Enfrentamento à Violência [...]</Link>
                         </div>
                      </li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}