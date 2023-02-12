import React from 'react'
import Navbar from '../navbar/Navbar';
import NavSuperior from '../navbar/NavSuperior';
import './contatos.scss'
import './responsivo.css'
import '../produtosRelacionados/relacionados.scss'
import Footer from '../footer/Footer'
import TitleContainerSobre from './titleContainer/TitleContainerContainer';

import { Link } from "react-router-dom";


import news from '../assets/news.webp'
import pdf from '../assets/pdf.webp'
import site from '../assets/site.webp'
import contato from '../assets/contato.webp'


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
    <Related icon={news} title="Política Nacional de Enfrentamento à Violência Contra as Mulheres" link="/politica-violencia-contra-mulheres"/>
    <Related icon={pdf} title="Guia de saúde mental" link="/guia-saude-mental"/>
  </ul>
);

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
                    <RelatedList/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
