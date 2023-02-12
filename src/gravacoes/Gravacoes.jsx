import React from 'react'
import Navbar from '../navbar/Navbar';
import NavSuperior from '../navbar/NavSuperior';
import './gravacoes.scss'
import Footer from '../footer/Footer'
import TitleContainerSobre from './titleContainer/TitleContainerContainer';

import { Link } from "react-router-dom";


import news from './news.png'
import pdf from './pdf.png'
import site from './site.png'

export default function Gravacoes() {
  return (
    <div className='gravacoes'>
        <NavSuperior/>
        <Navbar/>
        <div className="containerGravacoes">
        <TitleContainerSobre
            title="Gravações" 
            subtitle="Conheça um pouco mais sobre a pesquisa e sobre este guia virtual." />

            <div className="container-md-gravacoes">
                <div className="videos">

                <iframe src="https://www.youtube.com/embed/TCK2vsvA_co" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className='div-iframe-flex'>
                                <iframe src="https://www.youtube.com/embed/TCK2vsvA_co" title="YouTube video player" 
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                                <iframe src="https://www.youtube.com/embed/TCK2vsvA_co" title="YouTube video player" 
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                  
                </div>
                <div className="relacionados">
                    <h2>
                      Noticias e conteúdos relacionados
                    </h2>

                    <ul>
                      <li>
                        <div className="icon">
                            <img src={news} alt="" />
                        </div>
                         <div className="text">

                          <Link to="https://www12.senado.leg.br/institucional/omv/entenda-a-violencia/pdfs/politica-nacional-de-enfrentamento-a-violencia-contra-as-mulheres">Política Nacional de Enfrentamento à Violência Contra as Mulheres</Link>

                         </div>
                      </li>
                      <li>
                         <div className="icon">
                            <img src={news} alt="" />
                        </div>
                         <div className="text">
                          <Link to="https://g1.globo.com/sp/sao-paulo/noticia/2022/03/31/8-em-cada-dez-vitimas-de-violencia-contra-mulher-sofreram-abusos-psicologicos-na-pandemia-diz-projeto-que-atua-com-rede-de-voluntarias.ghtml">8 em cada dez vítimas de violência contra mulher sofreram abusos psicologicos [...]</Link>

                         </div>
                      </li>
                      <li>
                         <div className="icon">
                            <img src={site} alt="" />
                        </div>
                         <div className="text">
                          <Link to="https://www.institutomariadapenha.org.br/">Tipos de Violência: Instituto Maria da Penha</Link>
                         </div>
                      </li>
                      <li>
                         <div className="icon">
                            <img src={pdf} alt="" />
                        </div>
                         <div className="text">
                            <Link to="https://drive.google.com/file/d/1kaDFIrn55E6luXpnvfw8-q_bRFZiTRCE/view">Ficha de notificação de violência</Link>
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
