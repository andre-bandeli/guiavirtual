import React from 'react'
import Navbar from '../navbar/Navbar';
import NavSuperior from '../navbar/NavSuperior';
import './contatos.scss'
import Footer from '../footer/Footer'
import TitleContainerSobre from './titleContainer/TitleContainerContainer';

import { Link } from "react-router-dom";


import news from './assets/news.webp'
import pdf from './assets/pdf.png'
import site from './assets/site.png'
import contato from './assets/contato.png'

export default function Contatos() {
  return (
    <div className='contatos'>
        <NavSuperior/>
        <Navbar/>
        <div className="containerContatos">
        <TitleContainerSobre
            title="Contatos" 
            subtitle="Conheça um pouco mais sobre a pesquisa e sobre este guia virtual." />

            <div className="container-md-contatos">
                <div className="text">
                  <h2>Bem-vindo à nossa seção de contatos! Aqui você encontrará informações importantes sobre como entrar em contato conosco e sobre alguns dos
                     principais sites e organizações relacionadas ao tema da Saúde Coletiva e Saúde Mental.
                  </h2>
                      <div className="containerContatosHome">
                        <div className="containerBoxHome">
                          <img src={site} alt="" />
                            <Link to="https://www.ilhasolteira.sp.gov.br/">Prefeitura Municipal de Ilha Solteira</Link>
                      </div>
                      <div className="containerBoxHome">
                          <img src={site} alt="" />
                            <Link to="https://www.ilhasolteira.sp.gov.br/">Prefeitura Municipal de Ilha Solteira</Link>
                      </div>
                      <div className="containerBoxHome">
                          <img src={site} alt="" />
                            <Link to="https://www.ilhasolteira.sp.gov.br/">Prefeitura Municipal de Ilha Solteira</Link>
                      </div>
                      <div className="containerBoxHome">
                          <img src={site} alt="" />
                            <Link to="https://www.ilhasolteira.sp.gov.br/">Prefeitura Municipal de Ilha Solteira</Link>
                      </div>
                      <div className="containerBoxHome">
                          <img src={site} alt="" />
                          <Link to="https://www.institutomariadapenha.org.br/">Instituto Maria da Penha</Link>
                        </div>
                        <div className="containerBoxHome">
                          <img src={site} alt="" />
                          <Link to="https://www.unicamp.br/unicamp/">Site da Unicamp</Link>
                        </div>
                        <div className="containerBoxHome">
                          <img src={site} alt="" />
                          <Link to="https://www.naosecale.ms.gov.br/violencia-contra-a-mulher/">Não se Cale: Violência contra a mulher - ms.gov.br</Link>
                          
                        </div>
                        <div className="containerBoxHome">
                          <img src={contato} alt="" />
                          <h4>Disque 190 - Emergências</h4>
                        </div>
                        <div className="containerBoxHome">
                          <img src={contato} alt="" />
                          <h4>Disque 180 - denúncias de violência contra a mulher.</h4>
                        </div>
                  </div>
                  <h2>
                    Para entrar em contato conosco, você pode enviar um e-mail para [insira seu endereço de e-mail aqui] ou preencher o formulário de contato em nossa página.
                    Também estamos disponíveis por telefone em [insira seu número de telefone aqui].
                    Agora, se você estiver procurando informações adicionais sobre Saúde Coletiva e Saúde Mental, recomendamos visitar alguns dos seguintes sites:
                  </h2>
                    
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
                          <h3>Política Nacional de Enfrentamento à Violência Contra as Mulheres</h3>
                         </div>
                      </li>
                      <li>
                         <div className="icon">
                            <img src={news} alt="" />
                        </div>
                         <div className="text">
                          <h3>8 em cada dez vítimas de violência contra mulher sofreram abusos psicologicos [...]</h3>
                         </div>
                      </li>
                      <li>
                         <div className="icon">
                            <img src={site} alt="" />
                        </div>
                         <div className="text">
                          <h3>Tipos de Violência: Instituto Maria da Penha</h3>
                         </div>
                      </li>
                      <li>
                         <div className="icon">
                            <img src={pdf} alt="" />
                        </div>
                         <div className="text">
                          <h3>Protocolo do fluxo intersetorial de atendimento à mulher vítima de violência</h3>
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
