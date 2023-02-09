import React from 'react'
import './navbar.scss'
import logo from './logo.png'

import { Link } from "react-router-dom";
import MobileNavigation from './MobileNavigation';


export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <div className="menu">
          <MobileNavigation/>
        </div>
        <img src={logo} alt="" />
        <div className="search">

        </div>
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
