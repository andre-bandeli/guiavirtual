import React from 'react'
import Navbar from '../navbar/Navbar';
import NavSuperior from '../navbar/NavSuperior';
import './gravacoes.scss'
import Footer from '../footer/Footer'
import TitleContainerSobre from './titleContainer/TitleContainerContainer';

import news from './news.png'


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
                          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit [...]</h3>
                         </div>
                      </li>
                      <li>
                         <div className="icon">
                            <img src={news} alt="" />
                        </div>
                         <div className="text">
                          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit [...]</h3>
                         </div>
                      </li>
                      <li>
                         <div className="icon">
                            <img src={news} alt="" />
                        </div>
                         <div className="text">
                          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit [...]</h3>
                         </div>
                      </li>
                      <li>
                         <div className="icon">
                            <img src={news} alt="" />
                        </div>
                         <div className="text">
                          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit [...]</h3>
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
