import React from 'react'
import './navbar.scss'
import prp from './assets/logo_prp.svg'
import unicamp from './assets/logo_unicamp.svg'
import fcm from './assets/marcafcm.png'

import { Link } from "react-router-dom";
import MobileNavigation from './MobileNavigation';


export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
          <img src={unicamp} alt="" />
          <img src={fcm} alt="" />
        </div>

        <div className="menu">
          <MobileNavigation/>
        </div>
        
      <div className="nav">
        <ul>
          <li>
              <Link to="/">Introdução</Link>
          </li>
          <li>
              <Link to="/sobre">Sobre a pesquisa</Link>
          </li>
          <li>
              <Link to="/gravacoes">Gravações</Link>
          </li>
          <li>
              <Link to="/saudecoletiva">Saúde Coletiva</Link>
          </li>
          <li>
              <Link to="/noticias">Noticias e Conteúdos Extras</Link>
          </li>
          <li>
              <Link to="/contatos">Contatos</Link>
          </li>
          <li>
              <Link to="/destaques">Destaques</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
