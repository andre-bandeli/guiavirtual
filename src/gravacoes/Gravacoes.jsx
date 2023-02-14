import React from 'react'
import Navbar from '../navbar/Navbar';
import NavSuperior from '../navbar/NavSuperior';
import './gravacoes.scss'
import Footer from '../footer/Footer'
import TitleContainerSobre from './titleContainer/TitleContainerContainer';

import { Link } from "react-router-dom";


import news from '../assets/news.webp'
import pdf from '../assets/pdf.webp'
import site from '../assets/site.webp'


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
    <Related icon={site} title="Instituto Maria da Penha" link="https://www.institutomariadapenha.org.br/"/>
    <Related icon={site} title="Premiação no Conselho Federal de Psicologia [...]" link="/destaques"/>
    <Related icon={news} title="Confira notícias e conteúdos extras" link="/noticias"/>
    <Related icon={news} title="Confira os principais contatos que selecionamos sobre o tema." link="/contatos"/>
    
  </ul>
);


export default function Gravacoes() {
  return (
    <div className='gravacoes'>
        <NavSuperior/>
        <Navbar/>
        <div className="containerGravacoes">
        <TitleContainerSobre
            title="Gravações" 
            subtitle="Veja aqui as gravações realizadas durante a pesquisa." />

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

                    <RelatedList/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
