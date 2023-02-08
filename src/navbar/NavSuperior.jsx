import React from 'react'
import './navSuperior.scss'

import { Link } from "react-router-dom";


export default function NavSuperior() {
  return (
    <div className='navSuperiorContainer'>

      <ul>
        <li>
            <Link to="/motocicletas">Ética em Pesquisa</Link>
        </li>
        <li>
            <Link to="/motocicletas">Mestrado na Unicamp</Link>
        </li>
        <li>
            <Link to="/motocicletas">FCM Faculdade de Ciências Médicas</Link>
        </li>
      </ul>

    </div>
  )
}
