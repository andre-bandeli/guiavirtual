import React from 'react'
import './navbar.scss'
import unicamp from '../../assets/images/logo_unicamp.svg'
import searchicon from '../../assets/icons/searchicon.png'

import { Link } from "react-router-dom";
import MobileNavigation from './MobileNavigation';



export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
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
            <Link to="/">Notícias</Link>
          </li>
          <li>
            <Link to="/">Contatos</Link>
          </li>
        </ul>
      </nav>

      <div className='search'>
          <div className="container">
            <div className="search-action">

            </div>
            <img src={searchicon} alt="" />
          </div>
      </div>
      <div className="mobile-navbar">
          <MobileNavigation/>
      </div>
      </div>
    </div>
  )
}
