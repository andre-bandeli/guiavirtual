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
        <Related icon={site} title="Premiação no Conselho Federal de Psicologia [...]" link="/destaques"/>
        <Related icon={site} title="Saiba mais sobre a pesquisa" link="/sobre"/>
        <Related icon={news} title="Confira notícias e conteúdos extras" link="/noticias"/>
  </ul>
);

export default function Contatos() {
  return (
    <div className='contatos'>
      <NavSuperior />
      <Navbar />
      <div className="containerContatos">
        <TitleContainerSobre title="Contatos"
          subtitle="Conheça um pouco mais sobre a pesquisa e sobre este guia virtual." />

        <div className="container-md-contatos">
          <div className="text">
            <h2>Bem-vindo à nossa seção de contatos! Aqui você encontrará informações importantes sobre como entrar em
              contato conosco e sobre alguns dos
              principais sites e organizações relacionadas ao tema da Saúde Coletiva e Saúde Mental.
            </h2>
            <div className="containerContatosHome">
              <div className="containerBoxHome">
                <img src={site} alt="" />
                <Link to="https://observatoriodamulher.org.br/">Observatório da Mulher</Link>
              </div>
              <div className="containerBoxHome">
                <img src={site} alt="" />
                <Link to="https://www.spm.gov.br/">Secretaria Nacional de Políticas para as Mulheres (SNPM)</Link>
              </div>
              <div className="containerBoxHome">
                <img src={site} alt="" />
                <Link to="https://www.conselho.saude.gov.br/">Conselho Nacional de Saúde (CNS)</Link>
              </div>
              <div className="containerBoxHome">
                <img src={site} alt="" />
                <Link to="https://www.cndm.gov.br/">Conselho Nacional dos Direitos da Mulher (CNDM)</Link>
              </div>
              <div className="containerBoxHome">
                <img src={site} alt="" />
                <Link to="https://www.onumulheres.org.br/">ONU Mulheres </Link>
              </div>
              <div className="containerBoxHome">
                <img src={site} alt="" />
                <Link to="https://www.saude.sp.gov.br/">Secretaria de Estado da Saúde de São Paulo (SES-SP)</Link>
              </div>
              <div className="containerBoxHome">
                <img src={site} alt="" />
                <Link to="https://www.naosecale.ms.gov.br/violencia-contra-a-mulher/">Não se Cale: Violência contra a
                mulher - ms.gov.br</Link>
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
          </div>
          <div className="relacionados">
            <h2>
              Noticias e conteúdos relacionados
            </h2>
            <RelatedList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
