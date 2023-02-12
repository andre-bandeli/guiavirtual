import React from 'react'
import Navbar from '../navbar/Navbar';
import NavSuperior from '../navbar/NavSuperior';
import './sobre.scss'
import './responsive.css'
import Footer from '../footer/Footer'
import TitleContainerSobre from './titleContainer/TitleContainerContainer';

import { Link } from "react-router-dom";


import news from '../assets/news.webp'
import contato from '../assets/contato.webp'
import mensagem from '../assets/mensagem.webp'
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
    <Related icon={news} title="Política Nacional de Enfrentamento à Violência Contra as Mulheres" link="/politica-violencia-contra-mulheres"/>
    <Related icon={pdf} title="Guia de saúde mental" link="/guia-saude-mental"/>
  </ul>
);

export default function Sobre() {
  return (
    <div className='sobre'>
        <NavSuperior/>
        <Navbar/>
        <div className="containerSobre">
        <TitleContainerSobre
            title="Sobre a Pesquisa" 
            subtitle="Conheça um pouco mais sobre a pesquisa e sobre este guia virtual." />

            <div className="container-md-sobre">
                <div className="text">
                  <h2>Este guia virtual é um produto técnico produzido no mestrado profissional em Saúde Coletiva da UNICAMP na pesquisa 
                    Percepções Sobre Violência contra a Mulher, orientada pela Profª Drª Rosana Teresa Onocko-Campos, que compõe uma 
                    pesquisa bem maior chamada Implementação de Ambulatório a Pessoas Expostas a Situações de Violência, com vários mestrandos, 
                    doutorandos, residentes, cuja pesquisadora principal também é a Profª Rosana. Este guia reúne material bibliográfico e trechos 
                    das narrativas produzidas durante a pesquisa de campo.
                  </h2>
                      <h2>A pesquisa Percepções Sobre Violência Contra a Mulher foi realizada por meio de grupos focais narrativos, nos quais
                         foram criadas narrativas de diferentes perspectivas sobre o tema, analisadas pelos próprios grupos em momento hermenêutico. 
                         Este guia não é um resumo da dissertação, mas uma elaboração do conhecimento produzido na investigação. É destinado a profissionais
                          que trabalham em serviços públicos como um instrumento de apoio à formação continuada sobre atendimento a situações de violência de gênero.
                  </h2>
                      <h2>Inayá Ananias Weijenborg: Psicóloga (UNESP) especialista em Saúde (CRP), especialização em Micropolítica da Gestão e Trabalho em Saúde Pública 
                        (UFF) e mestranda em Saúde Coletiva: Políticas, Planejamento e Gestão (UNICAMP). Funcionária pública com experiência em CAPS, CREAS, SAICA,
                         Educação, Saúde do Trabalhador e docência, pesquisando o campo de trabalho e trabalhando em diálogo com a pesquisa. Do campo - nos dois
                          sentidos.
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
