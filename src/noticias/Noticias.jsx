import React from 'react'
import Navbar from '../navbar/Navbar';
import NavSuperior from '../navbar/NavSuperior';
import './noticias.scss'
import Footer from '../footer/Footer'
import TitleContainerNoticias from './titleContainer/TitleContainerNoticias';

import { Link } from "react-router-dom";

import pdf from '../assets/pdf.webp'
import imagem1 from '../home/noticias/assets/imagem1.webp'
import imagem3 from '../home/noticias/assets/imagem3.webp'
import imagem2 from '../home/noticias/assets/imagem2.webp'
import imagem4 from '../home/noticias/assets/imagem4.webp'
import pesquisa from '../home/noticias/assets/pesquisa.webp'
import img3 from '../home/noticias/assets/img-3.webp'
import fiocruz from '../home/noticias/assets/fiocruz.jpg'
import noticiaglobo from '../home/noticias/assets/foto-1.webp'
import machistometro from '../home/noticias/assets/machistometro.webp'
import gov from '../home/noticias/assets/gov.png'
import noticia7 from '../home/noticias/assets/noticia7.png'
import noticia8 from '../home/noticias/assets/noticia8.png'
import tjse from '../home/noticias/assets/tjse.png'
import news from '../assets/news.webp'
import site from '../assets/site.webp'
import contato from '../assets/contato.webp'
import noticia9 from '../home/noticias/assets/noticia9.png'
import mensagem from '../assets/mensagem.webp'




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
      <Related icon={contato} title="Veja contatos que podem ser úteis" link="/contatos"/>
      <Related icon={site} title="Conheça o grupo de Saúde Coletiva da FCM Unicamp" link="https://www.fcm.unicamp.br/posgraduacao/saude-coletiva"/>
      <Related icon={site} title="Premiação no Conselho Federal de Psicologia [...]" link="/destaques"/>
      <Related icon={pdf} title="Protocolo do fluxo intersetorial de atendimento à mulhe vítima de violência" link="/guia-saude-mental"/>
      <Related icon={pdf} title="Ficha de notificação de violência" link="https://drive.google.com/file/d/1kaDFIrn55E6luXpnvfw8-q_bRFZiTRCE/view?usp=sharing"/>
    </ul>
  );



export default function Noticias() {
  return (
    <div className='noticias'>
      <NavSuperior />
      <Navbar />
      <div className="containerNoticias">
        <TitleContainerNoticias title="Noticias e Conteúdos Extras"
          subtitle="Separamos alguns conteúdos e leituras extras que valem a reflexão." />

        <div className="container-md-noticias">
          <div className="news">

            <div className="boxNews">
              <img src={imagem1} alt="" />
              <div className='link'>
                <Link
                  to="https://www12.senado.leg.br/institucional/omv/entenda-a-violencia/pdfs/politica-nacional-de-enfrentamento-a-violencia-contra-as-mulheres" target='_blank'>
                Política Nacional de Enfrentamento à Violência Contra as Mulheres</Link>
              </div>


            </div>
            <div className="boxNews">
              <img src={imagem2} alt="" />
              <div className='link'>
                <Link to="https://www.graduseditora.com/_files/ugd/c7d661_e05ce4f966e844c79715bd6bb94ccdad.pdf" target='_blank'>Violência de Gênero</Link>
              </div>
            </div>
            <div className="boxNews">
              <img src={imagem3} alt="" />
              <div className='link'>
                <Link to="https://bvsms.saude.gov.br/bvs/publicacoes/manual_atendimento_vitimas_violencia_saude_publica_DF.pdf" target='_blank'>Manual para
                Atendimento às Vítimas de Violência na [...]</Link>
              </div>
            </div>
            <div className="boxNews">
              <img src={imagem4} alt="" />
              <div className='link'>
                <Link to="https://www.youtube.com/watch?v=ZdpZ-93uUnY" target='_blank'>Música P.U.T.A. Altoria de Mulamba</Link>
              </div>
            </div>
            <div className="boxNews">
              <img src={pesquisa} alt="" />
              <div className='link'>
                <Link to="https://www.fcm.unicamp.br/posgraduacao/saude-coletiva" target='_blank'>Conheça o grupo de pesquisa em Saúde
                Coletiva da FCM</Link>
              </div>
            </div>
            <div className="boxNews">
              <img src={noticiaglobo} alt="" />
              <div className='link'>
                <Link
                  to="https://g1.globo.com/sp/sao-paulo/noticia/2022/03/31/8-em-cada-dez-vitimas-de-violencia-contra-mulher-sofreram-abusos-psicologicos-na-pandemia-diz-projeto-que-atua-com-rede-de-voluntarias.ghtml" target='_blank'>
                8 em cada dez vítimas de violência contra mulher sofreram abusos psicológicos [...] </Link>
              </div>
            </div>
            <div className="boxNews">
              <img src={img3} alt="" />
              <div className='link'>
                <Link
                  to="https://brasil.un.org/pt-br/93163-campanha-voce-nao-esta-sozinha-rede-de-protecao-e-essencial-para-acolher-mulheres-vitimas-de" target='_blank'>
                Campanha Você Não Está Sozinha: Rede de proteção é essencial para acolher mulheres [...]</Link>
              </div>
            </div>
            <div className="boxNews">
              <img src={fiocruz} alt="" />
              <div className='link'>
                <Link to="https://portal.fiocruz.br/noticia/violencia-contra-mulheres-no-contexto-da-covid-19" target='_blank'>Violência
                contra as mulheres no contexto da Covid-19 - Publicação FioCruz</Link>
              </div>
            </div>
            <div className="boxNews">
              <img src={machistometro} alt="" />
              <div className='link'>
                <Link
                  to="https://catarinas.info/cuidado-reaja-e-busque-ajuda-conheca-os-sinais-de-alerta-no-machistometro/" target='_blank'>
                Machistômetro</Link>
              </div>
            </div>
            <div className="boxNews">
              <img src={gov} alt="" />
              <div className='link'>
                <Link to="https://www.gov.br/mdh/pt-br/assuntos/denuncie-violencia-contra-a-mulher/violencia-contra-a-mulher" target='_blank'>Violência doméstica e familiar
                 contra a mulher: Ligue 180 e tudo o que você precisa saber</Link>
              </div>
            </div>
            <div className="boxNews">
              <img src={tjse} alt="" />
              <div className='link'>
                <Link to="https://www.tjse.jus.br/portaldamulher/definicao-de-violencia-contra-a-mulher" target='_blank'>Definição de Violência contra a Mulher. TJSE</Link>
              </div>

            </div>
            <div className="boxNews">
              <img src={noticia9} alt="" />
              <div className='link'>
                <Link to="https://www.justica.pr.gov.br/Pagina/Violencia-Contra-Mulher" target='_blank'>A Violência Contra a Mulher</Link>
              </div>
            </div>
          </div>
          <div className="relacionados">
            <h2>
              Conteúdos relacionados
            </h2>

            <RelatedList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
