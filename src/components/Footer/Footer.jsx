import React from 'react'
import './style.css'
import git from '../../assets/icons/git.webp'
import linkedin from '../../assets/icons/in.webp'

import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div className='footer'>
        <div className="social-box">
                
        </div>
        <div className="containerFooter">

           <div className="boxFooter">
            <h2>Institucional</h2>
            <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre a pesquisa</Link>
                    </li>
                    <li>
                        <Link to="/gravacoes">Gravações</Link>
                    </li>
                    <li>
                        <Link to="/saudecoletiva">Saúde coletiva</Link>
                    </li>
                    <li>
                        <Link to="/noticias">Notícias e Conteúdos extras</Link>
                    </li>
                    <li>
                        <Link to="/contatos">Contatos</Link>
                    </li>
                    <li>
                        <Link to="/destaques">Envie uma mensagem</Link>
                    </li>
            </ul>

           </div>
           <div className="boxFooter">
            <h2>Sites Externos</h2>
           <ul>
                    <li>
                    <Link to="https://www.unicamp.br/unicamp/" target='_blank'>Site da Unicamp</Link>
                 
                    </li>
                    <li>
                        <Link to="https://www.fcm.unicamp.br/posgraduacao/mestradodoutorado-stricto-sensu" target='_blank'>Mestrado na FCM</Link>
                    </li>
                    <li>
                        <Link to="https://www.ilhasolteira.sp.gov.br/" target='_blank'>Prefeitura Ilha Solteira</Link>
                    </li>

            </ul>

            
            </div>
            <div className="boxFooter">
            <h2>Contato</h2>
            <ul>
                    <li>
                        Universidade Estadual de Campinas. Campus Barão Geraldo.
                    </li>
                    <li>
                       Campinas, São Paulo, Brasil.
                    </li>
                    <li>
                       Inaya Weijenborg . Mestre em Psicologia
                    </li>
                    <li>
                       Site desenvolvido por André L. Bandeli
                    </li>
                    <li className='redes'>
                    
                    <Link to="https://www.linkedin.com/in/andrebandeli/" target='_blank'>
                        <img src={linkedin} alt="ícone do twitter" width='25px' height='25px' /></Link>
                    <Link to="https://github.com/andre-bandeli" target='_blank'>
                        <img src={git} alt="ícone do instagran" width='25px' height='25px' /></Link>
                    </li>
                   
            </ul>

            </div>
            <div className="boxFooter">
            <h2>Saiba mais</h2>
            <ul>
            <li>
                    <Link to="https://www.fcm.unicamp.br/posgraduacao/saude-coletiva" target='_blank'>Saúde Coletiva</Link>
                 
                    </li>
                    <li>
                        <Link to="https://drive.google.com/file/d/191Bag34rct0145eot2atPMyiq7J5TMXk/view?usp=sharing" target='_blank'>Resultados e Discussões</Link>
                    </li>
                    <li>
                        <Link to="/destaques">Premiação</Link>
                    </li>

            </ul>
            </div>
        </div>
    </div>
  )
}
