import React from 'react'
import Navbar from '../navbar/Navbar';
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
        <Link to={link} target='_blank'>{title}</Link>
      </h3>
    </div>
  </li>
);

const RelatedList = () => (
  <ul className='related'>
    <Related icon={site} title="Conheça o grupo de Saúde Coletiva da FCM Unicamp" link="https://www.fcm.unicamp.br/posgraduacao/saude-coletiva"/>
    <Related icon={site} title="Saiba mais sobre o mestrado na Unicamp" link="http://www3.prpg.gr.unicamp.br/sites/site1/index.php/mestradodoutorado/"/>
    <Related icon={site} title="Saiba mais sobre o mestrado na FCM" link="https://www.fcm.unicamp.br/posgraduacao/mestradodoutorado-stricto-sensu"/>
    <Related icon={news} title="Manual para Atendimento às Vítimas de Violência na Rede de Saúde Pública do DF (2009)" link="https://bvsms.saude.gov.br/bvs/publicacoes/manual_atendimento_vitimas_violencia_saude_publica_DF.pdf"/>
    <Related icon={pdf} title="Ficha de notificação de violência" link="https://drive.google.com/file/d/1kaDFIrn55E6luXpnvfw8-q_bRFZiTRCE/view?usp=sharing"/>
  </ul>
);


export default function SaudeColetiva() {
  return (
    <div className='saudeColetiva'>
      <Navbar />
      <div className="containerSaudeColetiva">
        <TitleContainerSobre title="Saúde Coletiva"
          subtitle="Fique por dentro dos assuntos sobre Saúde Coletiva." />

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
