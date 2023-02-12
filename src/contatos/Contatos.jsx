import React from 'react'
import Navbar from '../navbar/Navbar';
import NavSuperior from '../navbar/NavSuperior';
import './contatos.scss'
import Footer from '../footer/Footer'
import TitleContainerSobre from './titleContainer/TitleContainerContainer';

import news from './assets/news.webp'
import contato from './assets/contato.webp'
import mensagem from './assets/mensagem.webp'

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
                            <img src={contato} alt="" />
                        </div>
                         <div className="text">
                          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit [...]</h3>
                         </div>
                      </li>
                      <li>
                         <div className="icon">
                            <img src={mensagem} alt="" />
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
