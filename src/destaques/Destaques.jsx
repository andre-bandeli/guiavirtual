import React from 'react'
import Navbar from '../navbar/Navbar';
import NavSuperior from '../navbar/NavSuperior';
import './destaques.scss'
import './responsive.css'
import Footer from '../footer/Footer'
import TitleContainerSobre from './titleContainer/TitleContainerContainer';
import { Link } from "react-router-dom";

import site from '../assets/site.webp'
import news from '../assets/news.webp'
import pdf from '../assets/pdf.webp'
import qrcode from '../home/textos/qrcode.svg'


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
   <Related icon={site} title="Conheça mais sobre a pesquisa. Acesse a página do Grupo de Saúde Coletiva" link="https://www.fcm.unicamp.br/fcm/laboratorio-saude-coletiva-e-saude-mental-interfaces"/>
    <Related icon={pdf} title="Ficha de Notificação de Violência" link="https://drive.google.com/file/d/1kaDFIrn55E6luXpnvfw8-q_bRFZiTRCE/view"/>
    <Related icon={news} title="Política Nacional de Enfrentamento à Violência Contra as Mulheres" link="https://www12.senado.leg.br/institucional/omv/entenda-a-violencia/pdfs/politica-nacional-de-enfrentamento-a-violencia-contra-as-mulheres"/>
    <Related icon={news} title="Violência de Gênero" link="https://www.graduseditora.com/_files/ugd/c7d661_e05ce4f966e844c79715bd6bb94ccdad.pdf"/>
  </ul>
);

export default function Destaques() {
  return (
    <div className='destaques'>
        <NavSuperior/>
        <Navbar/>
        <div className="containerDestaques">
        <TitleContainerSobre
            title="Destaques" 
            subtitle="Veja aqui alguns dos destaques deste guia." />

            <div className="container-md-destaques">
                <div className="textDestaques">
                  <h1>O Guia Virtual foi premiado</h1>
                  <h2>O Guia Virtual de Atendimento às Mulheres Vítimas de Violência foi premiado no concurso de práticas inovadoras do Conselho Federal de Psicologia (2022)
                  </h2>
                  <h1>Compartilhe nosso QRCode</h1>
                  <h2>Clique no link abaixo para compartilhar o QRCode que dá acesso ao site. Bora juntos espalhar conhecimento?</h2>
                  <img src={qrcode} alt="" />
                  <h5> <Link to='/'>Clique aqui</Link></h5>

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
