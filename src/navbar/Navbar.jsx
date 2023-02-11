import React from 'react'
import './navbar.scss'
import prp from './logo_prp.svg'
import logo from './logo.png'
import unicamp from './logo_unicamp.svg'
import fcm from './fcm.png'

import { Link } from "react-router-dom";
import MobileNavigation from './MobileNavigation';


export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
          <img src={prp} alt="" />
          <img src={fcm} alt="" />
          <img src={unicamp} alt="" />
        </div>

        <div className="menu">
          <MobileNavigation/>
        </div>
        
      <div className="nav">
        <ul>
          <li>
              <Link to="/motocicletas">Sobre a pesquisa</Link>
          </li>
          <li>
              <Link to="/motocicletas">Introdução</Link>
          </li>
          <li>
              <Link to="/motocicletas">Gravações</Link>
          </li>
          <li>
              <Link to="/motocicletas">Tipificação da violência</Link>
          </li>
          <li>
              <Link to="/motocicletas">Noticias e conteúdos extras</Link>
          </li>
          <li>
              <Link to="/motocicletas">Contatos</Link>
          </li>
          <li>
              <Link to="/motocicletas">Envie uma mensagem</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
