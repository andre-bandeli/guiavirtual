import React from 'react'
import './style.css'
import git from './git.png'
import linkedin from './in.png'

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
                        <Link to="/login">Sobre a pesquisa</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Gravações</Link>
                    </li>
                    <li>
                        <Link to="/financiamentos">Saúde coletiva</Link>
                    </li>
                    <li>
                        <Link to="/contato">Notícias e Conteúdos extras</Link>
                    </li>
                    <li>
                        <Link to="/motocicletas">Contatos</Link>
                    </li>
                    <li>
                        <Link to="/veiculos">Envie uma mensagem</Link>
                    </li>
            </ul>

           </div>
           <div className="boxFooter">
            <h2>Mestrado</h2>
           <ul>
                    <li>
                    <Link to="/">Mestrado na Unicamp</Link>
                 
                    </li>
                    <li>
                        <Link to="/">Mestrado na FCM</Link>
                    </li>
                    <li>
                        <Link to="/">Ética em pesquisa</Link>
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
                       Inaya . Mestre em Psicologia
                    </li>
                    <li>
                       Site desenvolvido por André L. Bandeli
                    </li>
                    <li className='redes'>
                    
                    <Link to="https://www.linkedin.com/in/andrebandeli/">
                        <img src={linkedin} alt="ícone do twitter" width='25px' height='25px' /></Link>
                    <Link to="https://github.com/andre-bandeli">
                        <img src={git} alt="ícone do instagran" width='25px' height='25px' /></Link>
                    </li>
                   
            </ul>

            </div>
            <div className="boxFooter">
            <h2>Saiba mais</h2>
            <ul>
            <li>
                    <Link to="/">Saúde Coletiva</Link>
                 
                    </li>
                    <li>
                        <Link to="/">Resultados e DIscussões</Link>
                    </li>
                    <li>
                        <Link to="/">Premiações</Link>
                    </li>

            </ul>
            </div>
        </div>
    </div>
  )
}
