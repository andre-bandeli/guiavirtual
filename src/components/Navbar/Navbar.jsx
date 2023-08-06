import React, { useState, useEffect } from 'react';
import './navbar.scss'
import unicamp from '../../assets/images/unicamp.png'

import { Link } from "react-router-dom";
import MobileNavigation from './MobileNavigation';


export default function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    setNavbarVisible(visible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`col-12 ${navbarVisible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <div className="logo">
          <img src={unicamp} alt="" />
        </div>

        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Sobre a Pesquisa</Link>
            </li>
            <li>
              <Link to="/">Saúde Coletiva</Link>
            </li>
            <li>
              <Link to="/">Notícias e Leituras Complementares</Link>
            </li>
          </ul>
        </nav>
        <div className="mobile-navbar">
          <MobileNavigation />
        </div>
      </div>
    </div>
  );
}