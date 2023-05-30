import React from 'react'
import './navbar.scss'
import unicamp from './assets/logo_unicamp.svg'

import { Link } from "react-router-dom";
import MobileNavigation from './MobileNavigation';


export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
          <img src={unicamp} alt="" />
        </div>
        
      <nav className='navbar'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Sobre a Pesquisa</Link>
          </li>
          <li>
            <Link to="/">Notícias</Link>
          </li>
          <li>
            <Link to="/">Contatos</Link>
          </li>
        </ul>
      </nav>

      <div className='search'>

      </div>
      <div className="mobile-navbar">
          <MobileNavigation/>
      </div>
    </div>
  )
}
