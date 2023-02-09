import React from 'react'

import Navbar from '../navbar/Navbar';
import NavSuperior from '../navbar/NavSuperior';
import Header from './header/Header'

export default function Index() {
  return (
    <div>
        <NavSuperior/>
        <Navbar/>
        <Header/>
    </div>
  )
}
