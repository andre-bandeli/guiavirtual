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
            subtitle="Conheça um pouco mais sobre a pesquisa e sobre este guia virtual." />

            <div className="container-md-destaques">
                <div className="textDestaques">
                  <h1>Fomos premiados</h1>
                  <h2>Este guia virtual é um produto técnico produzido no mestrado profissional em Saúde Coletiva da UNICAMP na pesquisa 
                    Percepções Sobre Violência contra a Mulher, orientada pela Profª Drª Rosana Teresa Onocko-Campos, que compõe uma 
                    pesquisa bem maior chamada Implementação de Ambulatório a Pessoas Expostas a Situações de Violência, com vários mestrandos, 
                    doutorandos, residentes, cuja pesquisadora principal também é a Profª Rosana. Este guia reúne material bibliográfico e trechos 
                    das narrativas produzidas durante a pesquisa de campo.
                  </h2>
                  <h1>Compartilhe nosso QRCode</h1>
                  <h2>  A pesquisa Percepções Sobre Violência Contra a Mulher foi realizada por meio de grupos focais narrativos, nos quais
                        foram criadas narrativas de diferentes perspectivas sobre o tema, analisadas pelos próprios grupos em momento hermenêutico. 
                        Este guia não é um resumo da dissertação, mas uma elaboração do conhecimento produzido na investigação. É destinado a profissionais
                        que trabalham em serviços públicos como um instrumento de apoio à formação continuada sobre atendimento a situações de violência de gênero.
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
