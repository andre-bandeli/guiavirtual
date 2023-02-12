import React from 'react'
import Navbar from '../navbar/Navbar';
import NavSuperior from '../navbar/NavSuperior';
import './saudeColetiva.scss'
import Footer from '../footer/Footer'
import TitleContainerSobre from './titleContainer/TitleContainerContainer';

import { Link } from "react-router-dom";


import news from '../assets/news.webp'
import site from '../assets/site.webp'
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


export default function SaudeColetiva() {
  return (
    <div className='saudeColetiva'>
      <NavSuperior />
      <Navbar />
      <div className="containerSaudeColetiva">
        <TitleContainerSobre title="Saúde Coletiva"
          subtitle="Conheça um pouco mais sobre a pesquisa e sobre este guia virtual." />

        <div className="container-md-saudeColetiva">
          <div className="text">
            <h2>
              O grupo de pesquisa "Saúde Coletiva e Saúde Mental: Interfaces", sediado no Departamento de Saúde Coletiva
              da Universidade Estadual
              de Campinas, tem como objetivo articular estudos, reflexões, pesquisas e formação na área da Saúde
              Coletiva e Saúde Mental. Além disso,
              o grupo busca realizar discussões teóricas sobre as políticas públicas
              de saúde mental, incluindo a avaliação de Centros de Atenção Psicossocial (Caps) e novos arranjos na
              atenção básica em saúde. A equipe também se dedica à sistematização de discussões metodológicas,
              utilizando abordagens qualitativas, participativas e hermenêutico-narrativas.
              Esta abordagem permite uma compreensão mais profunda da temática da Saúde Coletiva e Saúde Mental e suas
              interconexões.
            </h2>
            <h2>O grupo de pesquisa é formado por profissionais dedicados e comprometidos com o desenvolvimento de
              pesquisas interconectadas na área. O grupo tem como objetivo principal aprimorar a compreensão da relação
              entre Saúde Coletiva e Saúde Mental, explorando as interfaces existentes entre essas
              duas áreas.</h2>
            <h2>
              Através da pesquisa, o grupo espera contribuir
              para o desenvolvimento de políticas públicas mais efetivas e aprimoradas na área de saúde mental.
              O grupo de pesquisa também busca promover a formação de profissionais e acadêmicos na área da Saúde
              Coletiva e Saúde Mental. Através de cursos, workshops,
              seminários e outras atividades
              formativas, o grupo espera disseminar conhecimento e sensibilizar a sociedade sobre a importância dessa
              área.
            </h2>
            <h2>Além disso, o grupo de pesquisa mantém uma forte colaboração com outros grupos e instituições que também
              atuam na área da Saúde Coletiva e Saúde Mental,
              tanto no Brasil quanto em outros países. Esta colaboração
              permite a troca de conhecimento e a integração de diferentes perspectivas e abordagens, o que enriquece a
              pesquisa e amplia sua relevância.</h2>
            <h2>A equipe do grupo de pesquisa é composta por profissionais altamente capacitados e especializados na
              área da Saúde Coletiva e Saúde Mental, incluindo médicos,
              psicólogos, enfermeiros, sociólogos e outros profissionais.</h2>
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
