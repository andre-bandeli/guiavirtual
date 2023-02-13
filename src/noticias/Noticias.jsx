import React from 'react'
import Navbar from '../navbar/Navbar';
import NavSuperior from '../navbar/NavSuperior';
import './noticias.scss'
import Footer from '../footer/Footer'
import TitleContainerNoticias from './titleContainer/TitleContainerNoticias';

import { Link } from "react-router-dom";


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

import news from '../assets/news.webp'
import site from '../assets/site.webp'
import contato from '../assets/contato.webp'
import mensagem from '../assets/mensagem.webp'




const Related = ({icon, title, link}) => (
    <li>
      <div className="icon">
        <img src={icon} alt="" />
      </div>
      <div className="text">
      <h3>
        <Link to={link}>{title}</Link>
      </h3>
      </div>
    </li>
  );
  
  const RelatedList = () => (
    <ul className='related'>
      <Related icon={contato} title="Política Nacional de Enfrentamento à Violência Contra as Mulheres" link="/politica-violencia-contra-mulheres"/>
      <Related icon={mensagem} title="Guia de saúde mental" link="/guia-saude-mental"/>
      <Related icon={site} title="Política Nacional de Enfrentamento à Violência Contra as Mulheres" link="/politica-violencia-contra-mulheres"/>
      <Related icon={site} title="Guia de saúde mental" link="/guia-saude-mental"/>
      <Related icon={news} title="Política Nacional de Enfrentamento à Violência Contra as Mulheres" link="/politica-violencia-contra-mulheres"/>
    </ul>
  );



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
                            <Link to="https://www.institutomariadapenha.org.br/lei-11340/tipos-de-violencia.html">Manual para Atendimento às Vítimas de Violência na [...]</Link>
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
                            8 em cada dez vítimas de violência contra mulher sofreram abusos psicológicos [...] </Link>
                        </div>
                    </div>                 
                    <div className="boxNews">
                          <img src={img3} alt="" />
                       <div className='link'>
                            <Link to="https://brasil.un.org/pt-br/93163-campanha-voce-nao-esta-sozinha-rede-de-protecao-e-essencial-para-acolher-mulheres-vitimas-de">Campanha Você Não Está Sozinha: Rede de proteção é essencial para acolher mulheres [...]</Link>
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

                    <RelatedList/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
