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
    <Related icon={pdf} title="Política Nacional de Enfrentamento à Violência Contra as Mulheres" link="/politica-violencia-contra-mulheres"/>
    <Related icon={pdf} title="Guia de saúde mental" link="/guia-saude-mental"/>
    <Related icon={news} title="Guia de saúde mental" link="/guia-saude-mental"/>
    <Related icon={news} title="Guia de saúde mental" link="/guia-saude-mental"/>
    
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

                    <RelatedList/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
